import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  degree: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  date: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
  },
});

const Education: React.FC = () => (
  <View style={styles.container}>
    <Title>Education</Title>
    <Text style={styles.school}>Federico II, University of Naples</Text>
    <Text style={styles.degree}>Degree course in computer science</Text>
    <Text style={styles.date}>2012 - In progress</Text>
  </View>
);

export default Education;