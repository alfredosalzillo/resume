import React from 'react';
import ReactPDF, { Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import Header from './Header';
import Education from './Education';
import Experience  from './Experience';
import { SkillCloud, SkillEntry } from './Skill';
import Contact from './Contact';
import Project  from './Project';
import Section from './Section';
import Footer from './Footer';

const experiences = [
  {
    company: 'Together Price',
    date: 'September 2019 - Today',
    details: [
      'Migrated the React progressive web app to typescript.',
      'Implemented continues delivery using jenkins.',
      'Developed a custom solution to use micro-frontends architecture in the web application.',
      'Developed a dashboard for managing active-mq queue messages using React with material-ui and express.',
    ],
    position: 'Lead front-end developer',
  },
  {
    company: 'ProgettoPA',
    date: 'October 2018 - September 2019',
    details: [
      'Developed a custom solution for a micro-frontends multi-technologies architecture using react and angular.',
      'Implemented continuous integration and continuous delivery on openshift.',
    ],
    position: 'Full stack developer',
  },
  {
    company: 'Lutech SPA',
    date: 'October 2015 - October 2018',
    details: [
      'Developed a customized reporting solution for the identification of a critical issues in banking processes,' +
      ' optimized for client side processing, using Angular 5 and Devextreme UI library.',
      'Developed Restful HEATOS services for the implementation of a survey platform, developer using Spring 5.',
      'Developed a web application for a survey platform using React.',
      'Managed installation of DWH infrastructures such Oracle DB, SAS, JBoss.',
      'Managed a team for the maintenance and evolution reporting solution for a Telco using SAS technologies',
    ],
    position: 'Full stack and DWH developer',
  },
];

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
  },
  rightColumn: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 30,
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
        <Section title="EDUCATION">
          <Education
            school="Federico II, University of Naples"
            degree="Degree course in computer science"
            date="2012 - In progress"
          />
        </Section>
        <Section title="PROGRAMMING SKILLS">
          <SkillCloud
            name="Languages"
            skills={[
              { name: 'Java', weight: 7 },
              { name: 'Javascript', weight: 10 },
              { name: 'Typescript', weight: 10 },
              { name: 'Go', weight: 6 },
              { name: 'Dart', weight: 6 },
              { name: 'Bash', weight: 8 },
              { name: 'SAS', weight: 9 },
              { name: 'CSS', weight: 8 },
              { name: 'HTML5', weight: 9 },
            ]}
          />
          <SkillCloud
            name="Framework and Technologies"
            skills={[
              { name: 'React', weight: 10 },
              { name: 'Spring', weight: 6 },
              { name: 'Hibernate', weight: 6 },
              { name: 'Git', weight: 7 },
              { name: 'Angular', weight: 7 },
              { name: 'Node', weight: 9 },
              { name: 'Deno', weight: 8 },
              { name: 'Express', weight: 7 },
              { name: 'Github', weight: 6 },
              { name: 'JSS', weight: 7 },
              { name: 'material-ui', weight: 8 },
              { name: 'webpack', weight: 6 },
              { name: 'rollup', weight: 7 },
              { name: 'capacitor', weight: 6 },
              { name: 'AWS', weight: 6 },
              { name: 'Google Cloud', weight: 7 },
              { name: 'Serverless', weight: 7 },
              { name: 'Firebase', weight: 7 },
            ]}
          />
          <SkillEntry
            name="Certifications"
            skills={[
              'Java 8',
              'SAS Base',
              'SAS Advanced',
            ]}
          />
        </Section>
        <Section title="CONTACTS">
          <Contact
            label="email"
            value="alfredosalzillo@gmail.com"
            link="mailto:alfredosalzillo@gmail.com"
          />
          <Contact
            label="mobile phone"
            value="+39 3450774012"
            link="tel:+393450774012"
          />
          <Contact
            label="linkedin"
            value="@alfredosalzillo"
            link="https://www.linkedin.com/in/alfredosalzillo/"
          />
        </Section>
      </View>
      <View style={styles.rightColumn}>
        <Section title="EXPERIENCES">
          {experiences.map(({ company, date, details, position }) => (
            <Experience
              key={company + position}
              company={company}
              date={date}
              details={details}
              position={position}
            />
          ))}
        </Section>
        <Section title="PROJECTS">
          <Project
            title="rollup-plugin-multi-input"
            link="https://github.com/alfredosalzillo/rollup-plugin-multi-input"
            description={
              "A plugin for the rollup bundler useful to build modular libraries."
            }
          />
          <Project
            title="http-to"
            link="https://github.com/alfredosalzillo/http-to"
            description={
              "A small app to convert http request to javascript or dart code.\nDeveloped using web-components."
            }
          />
          <Project
            title="Menulime"
            link="https://menulime.com/"
            description={
              "Developed a digital menu progressive web app." +
              "\nThe app provide a customizable digital menu for restaurant, bar, barber shop, etc..." +
              "\nThe PWA also be used to receive and manage orders, generate QRCodes and print the menu." +
              "\nThe PWA is developer using React, material-ui with a NodeJS backend using Restful NestJS and it's deployed" +
              " on google cloud."
            }
          />
        </Section>
      </View>
    </View>
    <Footer>This IS the developer you are looking for</Footer>
  </Page>
);

export default Resume;
