import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import Background from '~/components/Background';

import { Container, Logo, Form, FormInput, SubmitButton } from './styles';

import logo from '~/assets/images/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    if (email !== '') {
      dispatch(signInRequest(email));
    } else {
      Alert.alert('Atenção', 'Digite seu e-mail para continuar');
    }
  }

  return (
    <Background>
      <Container>
        <Logo source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={email}
            onChangeText={setEmail}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
