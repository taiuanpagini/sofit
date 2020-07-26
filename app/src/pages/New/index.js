import React, { useState, useRef } from 'react';

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
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.expense.loading);
  const [item, setItem] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const valueRef = useRef();
  const [date, setDate] = useState(new Date());

  async function handleSubmit() {
    const dateFormatted = format(date, 'yyyy-MM-dd');

    setItem('');
    setValue('');
    setType('');

    dispatch(
      expensesRequest(dateFormatted, item, value, type, token, navigation)
    );
  }

  return (
    <Background>
      <Container>
        <Title>Cadastrar Despesa</Title>

        <Form>
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
