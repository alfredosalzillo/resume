import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';
import Typography from './Typography';

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});

const Title: React.FC = ({ children }) => (
  <Typography
    variant="h2"
    style={styles.title}
  >
    {children}
  </Typography>
);

export default Title;
