import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 50px;
  background: #3b9eff;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Text = styled.Text`
  color: #fff;
  margin-left: 10px;
  font-weight: bold;
  font-size: 16px;
  font-family: ${(props) =>
    props.param === 'android' ? 'Exo SemiBold' : 'Exo'};
`;
