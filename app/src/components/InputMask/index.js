import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInputMask } from 'react-native-masked-text';

import { StyleSheet } from 'react-native';
import { Container } from './styles';

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Exo',
    fontSize: 14,
    color: '#444',
    marginLeft: 20,
  },
});

function InputMask({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={25} color="rgba(0,0,0,0.6)" />}
      <TextInputMask
        type="money"
        options={{
          precision: 0,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        {...rest}
        ref={ref}
        style={styles.textStyle}
        placeholderTextColor="#444"
      />
    </Container>
  );
}

InputMask.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

InputMask.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(InputMask);
