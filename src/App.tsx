import { PDFViewer, Document } from '@react-pdf/renderer';
import React from 'react';

import { registerFonts } from './fonts/lato';

import './App.css';
import Resume from './Resume';
import data from './data.json';

registerFonts(new URL(import.meta.env.BASE_URL, import.meta.url).toString())

const App = ()  => (
  <div className="App">
    <PDFViewer className="App-resume-container">
      <Document
        author={data.author.name}
        subject={`The resume of ${data.author.name}`}
        title={`${data.author.name} resume`}
      >
        <Resume
          size="A4"
          data={data}
        />
      </Document>
    </PDFViewer>
  </div>
)

export default App;
