import { PDFViewer, Document } from '@react-pdf/renderer';
import React from 'react';

import { registerFonts } from './fonts/lato';

import './App.css';
import Resume from './Resume';

registerFonts(process.env.PUBLIC_URL)

const App = ()  => (
  <div className="App">
    <PDFViewer className="App-resume-container">
      <Document
        author="Alfredo Salzillo"
        keywords="awesome, resume, developer, react"
        subject="The resume of Alfredo Salzillo"
        title="@alfredosalzillo/resume"
      >
        <Resume size="A4"/>
      </Document>
    </PDFViewer>
  </div>
)

export default App;
