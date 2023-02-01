import React from 'react';
import { View, Text, Link } from '@react-pdf/renderer';
import { makeStyles } from './styles';


const useStyles = makeStyles((theme) => ({
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
    color: theme.palette.text,
    textDecoration: 'none',
  },
}))

type ContactProps = {
  label: string,
  value: string,
  link?: string,
}
const Contact: React.FC<ContactProps> = ({ label, value, link }) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{label}</Text>
      <Link src={link!} style={styles.contact}><Text>{value}</Text></Link>
    </View>
  );
};

export default Contact;
