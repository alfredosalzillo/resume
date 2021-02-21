import { PDFViewer, Document } from '@react-pdf/renderer';
import React from 'react';
import './App.css';
import Resume, { registerFonts } from './Resume';

registerFonts()

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
