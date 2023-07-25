import { View } from '@react-pdf/renderer';
import React from 'react';
import { makeStyles } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: `1 solid ${theme.palette.primary.main}`,
    paddingTop: 5,
  },
}))

const Footer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const styles = useStyles();
  return (
    <View style={styles.root}>{children}</View>
  );
}

export default Footer;
