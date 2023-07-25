import React from 'react';
import ReactPDF, { Document } from '@react-pdf/renderer';
import Resume from '@/Resume';
import { registerFonts } from '@/fonts/lato';

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
