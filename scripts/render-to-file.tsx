import React from 'react';
import ReactPDF, { Document } from '@react-pdf/renderer';
import Resume, { registerFonts } from '@/Resume';

registerFonts('./public');

ReactPDF.renderToFile(
  <Document
    author="Alfredo Salzillo"
    keywords="awesome, resume, developer, react"
    subject="The resume of Alfredo Salzillo"
    title="@alfredosalzillo/resume"
  >
    <Resume />
  </Document>,
  `./build/alfredo-salzillo-resume.pdf`,
).then(() => console.log('resume created successfully'))
