import React from 'react';
import { View, StyleSheet, Text, Link } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  type: {
    fontFamily: 'Lato',
    fontSize: 8,
  },
  contact: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
  },
});

type ContactProps = {
  label: string,
  value: string,
  link?: string,
}
const Contact: React.FC<ContactProps> = ({ label, value, link }) => (
  <View style={styles.container}>
    <Text style={styles.type}>{label}</Text>
    <Link src={link} style={styles.contact}>{value}</Link>
  </View>
);

export default Contact;
