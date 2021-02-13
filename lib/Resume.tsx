import React from 'react';
import ReactPDF, { Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import Header from './Header';
import Education from './Education';
import Experiences from './Experiences';
import Skills from './Skills';
import Contacts from './Contacts';
import Projects from './Projects';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Lato Bold',
    textAlign: 'center',
    marginTop: 25,
    paddingTop: 10,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
  },
});

const Resume: React.FC<ReactPDF.PageProps> = (props) => (
  <Page {...props} style={styles.page}>
    <Header
      name="Alfredo Salzillo"
      subtitle="Full Stack developer"
      link="https://github.com/alfredosalzillo"
    />
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Education />
        <Skills />
        <Contacts />
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <Experiences />
        <Projects />
      </View>
    </View>
    <Text style={styles.footer}>This IS the developer you are looking for</Text>
  </Page>
);

export default Resume;
