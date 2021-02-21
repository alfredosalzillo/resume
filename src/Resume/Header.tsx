import React from 'react';
import { Link, View } from '@react-pdf/renderer';
import Typography from './Typography';
import { makeStyles } from './styles';

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.primary.main,
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
  subtitle: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: theme.palette.text,
    textDecoration: 'none',
    alignSelf: 'flex-end',
  },
}))

export type HeaderProps = {
  title: string,
  subtitle: string,
  link: string,
}
const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  link,
}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.detailColumn}>
        <Typography variant="h1" color="primary">{title}</Typography>
        <Typography variant="subtitle">{subtitle}</Typography>
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
};

export default Header;
