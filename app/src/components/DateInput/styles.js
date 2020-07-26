import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 30px 0 10px;
`;

export const DateButton = styled.TouchableOpacity`
  padding: 0 15px;
  height: 46px;
  background: #ffffff;
  border-color: #dcdcdc;
  border-width: 1px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  margin-left: 25px;
`;

export const Picker = styled.View`
  background: #fff;
  padding: 15px 30px;
  margin-top: 30px;
`;
