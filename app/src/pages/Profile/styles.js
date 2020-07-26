import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/ButtonIcon';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: 'Exo';
  font-size: 20px;
  margin-top: 40px;
  text-align: center;
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
  margin: 30px 0 10px;
`;

export const SubmitButton = styled(Button)`
  background: #f64c75;
`;
