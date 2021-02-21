import ReactPDF, { StyleSheet } from '@react-pdf/renderer';
import { Theme, useTheme } from './theme';

type MakeStylesFactory = (theme: Theme) => ReactPDF.Styles

export const makeStyles = (factory: MakeStylesFactory) => (): ReactPDF.Styles => {
  const theme = useTheme();
  return StyleSheet.create(factory(theme));
}
