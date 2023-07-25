import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import Typography from './Typography';

const styles = StyleSheet.create({
  root: {
    paddingTop: 5,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
  },
  itemContent: {
    flex: 1,
  },
});

const List: React.FC<React.PropsWithChildren> = ({ children }) => (
  <View style={styles.root}>
    {children}
  </View>
);

export const Item: React.FC<React.PropsWithChildren> = ({ children }) => (
  <View style={styles.item}>
    <Typography variant="body" style={styles.bulletPoint}>• </Typography>
    <Typography variant="body" style={styles.itemContent}>{children}</Typography>
  </View>
);

export default List;
