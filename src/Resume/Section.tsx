import React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

type SectionProps = React.PropsWithChildren<{
  title: React.ReactNode,
}>
const Section: React.FC<SectionProps> = ({
   children,
   title,
 }) => (
  <View style={styles.container}>
    <Title>{title}</Title>
    {children}
  </View>
);

export default Section;
