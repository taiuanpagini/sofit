import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Title, Form, FormInput, SubmitButton } from './styles';
import Background from '~/components/Background';
import { signOut } from '~/store/modules/auth/sagas';

export default function Profile() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const loading = useSelector((state) => state.expense.loading);
  const [device] = useState(Platform.OS);

  async function handleSubmit() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title param={device}>Seus Dados</Title>

        <Form>
          <FormInput
            icon="mail-outline"
            autoCorrect={false}
            placeholder="Seu e-mail"
            value={email}
          />

          <SubmitButton loading={loading} icon="close" onPress={handleSubmit}>
            Sair
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
