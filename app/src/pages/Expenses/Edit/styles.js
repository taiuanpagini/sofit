import styled from 'styled-components/native';

import { Platform } from 'react-native';
import Input from '~/components/Input';
import InputMask from '~/components/InputMask';
import Button from '~/components/ButtonIcon';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${(props) => (props.param === 'android' ? 'Exo Bold' : 'Exo')};
  color: #000;
  font-size: 20px;
  margin-top: 40px;
  text-align: center;
`;

export const ContainerIndicator = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  flex: 1;
  background: #fff;
  padding: 0 30px;
  margin-top: 30px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const FormInputMask = styled(InputMask)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)``;
