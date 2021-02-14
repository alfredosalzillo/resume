import { StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  root: {
    fontSize: 12,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
    paddingTop: 10,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
  },
});

const Footer: React.FC = ({ children }) => (
  <Text style={styles.root}>{children}</Text>
)

export default Footer;
