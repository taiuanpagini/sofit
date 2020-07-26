import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Alert, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ContainerIndicator,
  Form,
  FormInput,
  FormInputMask,
  SubmitButton,
} from './styles';
import Background from '~/components/Background';
import DateInput from '~/components/DateInput';
import { expensesUpdateRequest } from '~/store/modules/expense/actions';
import PickerSelect from '~/components/PickerSelect';
import api from '~/services/api';

export default function Edit({ navigation }) {
  const dispatch = useDispatch();
  const id = navigation.getParam('id');
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.expense.loading);
  const [loadingPage, setLoadingPage] = useState(true);
  const [item, setItem] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const valueRef = useRef();
  const [date, setDate] = useState();

  const getExpense = useCallback(
    async function getExpense() {
      const response = await api.get(`expenses/${id}`);

      const { data, status } = response;

      if (status === 200) {
        setDate(new Date(data.date));
        setItem(data.item);
        setValue(data.value);
        setType(data.additionalInfo.type);
        setLoadingPage(false);
      } else {
        Alert.alert(
          'Atenção',
          'Não foi possivel carregar os dados da sua despesa.'
        );
        navigation.goBack();
      }
    },
    [id, navigation]
  );

  useEffect(() => {
    if (id) {
      getExpense();
    }
  }, [getExpense, id]);

  async function handleSubmit() {
    if (item === '') {
      Alert.alert('Atenção', 'Descrição da despesa é obrigatório.');
      return;
    }

    if (value === '') {
      Alert.alert('Atenção', 'Valor da despesa é obrigatório.');
      return;
    }

    if (type === '') {
      Alert.alert('Atenção', 'Tipo da despesa é obrigatório.');
      return;
    }

    const dateFormatted = format(date, 'yyyy-MM-dd HH:mm');

    dispatch(
      expensesUpdateRequest(
        id,
        dateFormatted,
        item,
        value,
        type,
        token,
        navigation
      )
    );
  }

  return (
    <Background>
      <Container>
        <Form>
          {loadingPage ? (
            <ContainerIndicator>
              <ActivityIndicator />
            </ContainerIndicator>
          ) : (
            <>
              <DateInput date={date} onChange={setDate} />
              <FormInput
                icon="description"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite sua despesa"
                returnKeyType="next"
                onSubmitEditing={() => valueRef.current.focus()}
                value={item}
                onChangeText={setItem}
              />
              <FormInputMask
                icon="attach-money"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Valor da despesa"
                ref={valueRef}
                returnKeyType="send"
                value={value}
                onChangeText={setValue}
              />

              <PickerSelect value={type} onValueChange={setType} />

              <SubmitButton
                loading={loading}
                icon="save"
                onPress={handleSubmit}
              >
                Atualizar
              </SubmitButton>
            </>
          )}
        </Form>
      </Container>
    </Background>
  );
}

Edit.navigationOptions = ({ navigation }) => ({
  title: 'Editar Despesa',
  headerRight: () => {
    return <View style={{ padding: 6 }} />;
  },
  headerLeft: () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={30} color="#000" />
      </TouchableOpacity>
    );
  },
});
