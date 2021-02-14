import React from 'react';
import ReactPDF, { Document, Font} from '@react-pdf/renderer';
import Resume from './lib/Resume';

Font.register({
  family: 'Lato',
  fonts: [
    {
      fontStyle: 'normal',
      fontWeight: 'thin',
      src: './fonts/fonts/Lato/Lato-Thin.ttf',
    },
    {
      fontStyle: 'italic',
      fontWeight: 'thin',
      src: './fonts/fonts/Lato/Lato-ThinItalic.ttf',
    },
    {
      fontStyle: 'normal',
      fontWeight: 'light',
      src: './fonts/fonts/Lato/Lato-Light.ttf',
    },
    {
      fontStyle: 'italic',
      fontWeight: 'light',
      src: './fonts/fonts/Lato/Lato-LightItalic.ttf',
    },
    {
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: './fonts/fonts/Lato/Lato-Regular.ttf',
    },
    {
      fontStyle: 'italic',
      fontWeight: 'normal',
      src: './fonts/fonts/Lato/Lato-Italic.ttf',
    },
    {
      fontStyle: 'normal',
      fontWeight: 'bold',
      src: './fonts/fonts/Lato/Lato-Bold.ttf',
    },
    {
      fontStyle: 'italic',
      fontWeight: 'bold',
      src: './fonts/fonts/Lato/Lato-BoldItalic.ttf',
    },
    {
      fontStyle: 'normal',
      fontWeight: 'black',
      src: './fonts/fonts/Lato/Lato-Black.ttf',
    },
    {
      fontStyle: 'italic',
      fontWeight: 'black',
      src: './fonts/fonts/Lato/Lato-BlackItalic.ttf',
    },
  ]
})

ReactPDF.render(
  <Document
    author="Alfredo Salzillo"
    keywords="awesome, resume, developer, react"
    subject="The resume of Alfredo Salzillo"
    title="@alfredosalzillo/resume"
  >
    <Resume />
  </Document>,
  `./resume.pdf`,
);
