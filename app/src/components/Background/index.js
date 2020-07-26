import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#C6D745', '#FFF'],
  locations: [0, 0.9],
})`
  flex: 1;
`;
