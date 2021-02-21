import React from 'react';
import ReactPDF, { Document } from '@react-pdf/renderer';
import Resume, { registerFonts } from '../src/Resume';

registerFonts('./public');

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
