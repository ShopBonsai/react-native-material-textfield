import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Animated } from 'react-native';

import styles from './styles';

export default class Helper extends PureComponent {
  static defaultProps = {
    numberOfLines: 1,
    useText: true,
  };

  static propTypes = {
    style: Animated.Text.propTypes.style,
    useText: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  render() {
    let { children, style, useText, ...props } = this.props;

    if (useText) {
      return (
        <View style={styles.container}>
          {children}
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.text, style]} {...props}>
          {children}
        </Animated.Text>
      </View>
    );
  }
}
