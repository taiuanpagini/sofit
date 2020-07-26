import React, { useState, useRef } from 'react';
import { Alert, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { format } from 'date-fns';
import {
  Container,
  Title,
  Form,
  FormInput,
  FormInputMask,
  SubmitButton,
} from './styles';
import Background from '~/components/Background';
import DateInput from '~/components/DateInput';
import { expensesRequest } from '~/store/modules/expense/actions';
import PickerSelect from '~/components/PickerSelect';

function New({ navigation }) {
  const dispatch = useDispatch();
  const valueRef = useRef();

  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.expense.loading);

  const [item, setItem] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState(new Date());
  const [device] = useState(Platform.OS);

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
      expensesRequest(dateFormatted, item, value, type, token, navigation)
    );
  }

  return (
    <Background>
      <Container>
        <Title param={device}>Cadastrar Despesa</Title>

        <Form>
          <DateInput date={date} onChange={setDate} />
          <FormInput
            icon="description"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite sua despesa"
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
            onSubmitEditing={handleSubmit}
            value={value}
            onChangeText={setValue}
          />

          <PickerSelect onValueChange={setType} />

          <SubmitButton loading={loading} icon="save" onPress={handleSubmit}>
            Cadastrar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

export default withNavigationFocus(New);
