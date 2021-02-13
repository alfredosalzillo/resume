import React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Lato Bold',
  },
  subtitle: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
  },
});

export type HeaderProps = {
  name: string,
  subtitle: string,
  link: string,
}
const Header: React.FC<HeaderProps> = ({
  name,
  subtitle,
  link,
}) => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link
        style={styles.link}
        src={link}
      >
        {link}
      </Link>
    </View>
  </View>
);

export default Header;
