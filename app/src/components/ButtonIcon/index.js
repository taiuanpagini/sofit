import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Text } from './styles';

export default function ButtonIcon({ children, loading, icon, ...rest }) {
  const [device] = useState(Platform.OS);
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <>
          <Icon name={icon} color="#FFF" size={20} />
          <Text param={device}>{children}</Text>
        </>
      )}
    </Container>
  );
}

ButtonIcon.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
};

ButtonIcon.defaultProps = {
  children: '',
  icon: '',
  title: '',
};
