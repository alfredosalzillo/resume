import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
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
    color="primary"
    style={styles.title}
  >
    {children}
  </Typography>
);

export default Title;
