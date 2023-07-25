import React from 'react';
import ReactPDF, { Text } from '@react-pdf/renderer'
import { makeStyles } from './styles';

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: 24,
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  h2: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 14,
  },
  h3: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 10,
  },
  subtitle: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  body: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  emphasis: {
    fontFamily: 'Lato',
    fontSize: 10,
    fontStyle: 'italic',
  },
  primary: {
    color: theme.palette.primary.main,
  },
  inherit: {},
}))

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'subtitle' | 'body' | 'emphasis';
export type TypographyColor = 'primary' | 'inherit';
export type TypographyProps = React.PropsWithChildren<{
  variant?: TypographyVariant,
  color?: TypographyColor,
  italic?: boolean,
} & ReactPDF.TextProps>;

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = 'inherit',
  style= {},
  ...props
}) => {
  const styles = useStyles();
  return (
    <Text
      {...props}
      style={[{ ...styles[color], ...styles[variant] }, style].flat()}
    />
  );
}

export default Typography;
