import React from 'react';
import ReactPDF, { StyleSheet, Text } from '@react-pdf/renderer'

const mergeStyles = (...styles: Array<ReactPDF.Style | ReactPDF.Style[]>) => styles
  .reduce((acc: ReactPDF.Style[], style) => {
    if (Array.isArray(style)) {
      return [...acc, ...style];
    }
    if (!style) {
      return acc;
    }
    return [...acc, style];
  }, [] as ReactPDF.Style[]);

const styles = StyleSheet.create({
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
  }
});

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'subtitle' | 'body' | 'emphasis';
export type TypographyProps = {
  variant?: TypographyVariant,
  italic?: boolean,
} & ReactPDF.TextProps;

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  style,
  ...props
}) => (
  <Text
    {...props}
    style={mergeStyles(styles[variant], style)}
  />
)

export default Typography;
