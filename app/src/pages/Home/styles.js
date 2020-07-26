import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerDespesas = styled.View`
  flex: 1;
  background: #fff;
  padding: 30px;
  margin-top: 30px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { flex: 1 },
})``;

export const ContainerEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitleEmpty = styled.Text`
  font-size: 16px;
  font-family: ${(props) =>
    props.param === 'android' ? 'Exo Regular' : 'Exo'};
  color: #444;
  margin-left: 5px;
`;
