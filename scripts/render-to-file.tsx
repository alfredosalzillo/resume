import React from 'react';
import ReactPDF, { Document } from '@react-pdf/renderer';
import Resume from '@/Resume';
import { registerFonts } from '@/fonts/lato';
import data from "@/data.json";

registerFonts('./public');

ReactPDF.renderToFile(
  <Document
    author={data.author.name}
    subject={`The resume of ${data.author.name}`}
    title={`${data.author.name} resume`}
  >
    <Resume
      size="A4"
      data={data}
    />
  </Document>,
  `./build/alfredo-salzillo-resume.pdf`,
).then(() => console.log('resume created successfully'))
