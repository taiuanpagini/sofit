import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: 40px;
`;

export const Form = styled.View`
  align-self: stretch;
  flex-direction: column;
  padding: 0 30px;
`;

export const Title = styled.Text``;

export const FormInput = styled(Input)``;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background: #4b8b45;
`;
