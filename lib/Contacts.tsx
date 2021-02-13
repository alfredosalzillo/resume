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
  type: string,
  value: string,
  link?: string,
}
const Contact: React.FC<ContactProps> = ({ type, value, link }) => (
  <View style={styles.container}>
    <Text style={styles.type}>{type}</Text>
    <Link src={link} style={styles.contact}>{value}</Link>
  </View>
);

const Contacts: React.FC = () => (
  <View style={styles.container}>
    <Title>Contacts</Title>
    <Contact
      type="email"
      value="alfredosalzillo@gmail.com"
      link="mailto:alfredosalzillo@gmail.com"
    />
    <Contact
      type="mobile phone"
      value="+39 3450774012"
      link="tel:+393450774012"
    />
    <Contact
      type="linkedin"
      value="@alfredosalzillo"
      link="https://www.linkedin.com/in/alfredosalzillo/"
    />
  </View>
);

export default Contacts;
