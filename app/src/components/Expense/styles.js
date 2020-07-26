import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import MaskText from '~/components/MaskText';

export const Container = styled.View`
  background: rgba(206, 220, 94, 0.2);
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;

  justify-content: space-between;
  flex-direction: row;
`;

export const DadosExpense = styled.View`
  opacity: ${(props) => (props.loading ? 0.3 : 1)};
`;

export const Date = styled.Text`
  font-family: 'Exo';
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const ContainerDado = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 3px;
`;

export const TitleDado = styled.Text`
  font-family: 'Exo';
  font-weight: 600;
`;

export const Title = styled.Text`
  font-family: 'Exo';
`;

export const Value = styled(MaskText)`
  font-family: 'Exo';
  color: red;
`;

export const Type = styled.Text`
  font-family: 'Exo';
`;

export const ContainerItens = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const CancelButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background: #f64c75;
  border-radius: 4px;
  padding: 5px;
`;

export const TextButton = styled.Text`
  font-size: 12px;
  font-family: 'Exo';
  color: #fff;
  margin-left: 5px;
`;
