import React from 'react';
import ReactPDF, { Document, Font} from '@react-pdf/renderer';
import Resume from './lib/Resume';

Font.register( {
  family: 'Open Sans',
  // @ts-ignore
  src: `./fonts/fonts/Open_Sans/OpenSans-Regular.ttf`,
});
Font.register( {
  family: 'Lato',
  // @ts-ignore
  src: `./fonts/fonts/Lato/Lato-Regular.ttf`,
});
Font.register( {
  family: 'Lato Italic',
  // @ts-ignore
  src: `./fonts/fonts/Lato/Lato-Italic.ttf`,
});
Font.register( {
  family: 'Lato Bold',
  // @ts-ignore
  src: `./fonts/fonts/Lato/Lato-Bold.ttf`,
});

ReactPDF.render(
  <Document
    author="Luke Skywalker"
    keywords="awesome, resume, start wars"
    subject="The resume of Luke Skywalker"
    title="Resume"
  >
    <Resume />
  </Document>,
  `./resume.pdf`,
);
