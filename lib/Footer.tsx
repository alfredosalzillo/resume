import { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  root: {
    borderTop: '1 solid black',
    paddingTop: 5,
  },
});

const Footer: React.FC = ({ children }) => (
  <View style={styles.root}>{children}</View>
)

export default Footer;
