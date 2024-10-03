import React from 'react';
import ReactPDF, { Link, Page, View, Text } from '@react-pdf/renderer';
import Header from './Header';
import Education from './Education';
import Experience  from './Experience';
import { SkillCloud, SkillEntry } from './Skill';
import Contact from './Contact';
import Project  from './Project';
import Section from './Section';
import Footer from './Footer';
import Typography from './Typography';
import { makeStyles } from './styles';

const experiences = [
  {
    company: 'Treedom',
    date: 'November 2021 - March 2024',
    details: [
      'Progressibely migrated the angularjs/vue app to React SSR using Next.',
      'Improved i18n management using lokalize.',
      'Improved the main website performances score from F to a A.',
      'Decreased the main website co2 consumption from an average of 2g for page to 0.50g for page.',
      'Decreased the main website loading time from an average of 10seconds to less than 3seconds.',
    ],
    position: 'Senior front-end developer',
  },
  {
    company: 'Together Price',
    date: 'September 2019 - October 2021',
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
      'Developed a web application for a survey platform using React.',
    ],
    position: 'Developer',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
    backgroundColor: theme.palette.background,
    color: theme.palette.text,
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
  link: {
    color: theme.palette.text,
    textDecoration: 'none',
    fontWeight: 'bold',
  },
}))


const Resume: React.FC<ReactPDF.PageProps> = (props) => {
  const styles = useStyles();
  return (
    <Page {...props} style={styles.root}>
      <Header
        title="Alfredo Salzillo"
        subtitle="Senior frontend developer"
        link="https://github.com/alfredosalzillo"
      />
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Section title="CONTACTS">
            <Contact
              label="email"
              value="alfredosalzillo93@gmail.com"
              link="mailto:alfredosalzillo93@gmail.com"
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
          <Section title="EDUCATION">
            <Education
              school="Federico II, University of Naples"
              degree="Degree course in computer science"
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
                { name: 'Next', weight: 7 },
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
                { name: 'Googling', weight: 10 },
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
                'A plugin for the rollup bundler useful to build modular libraries.'
              }
            />
            <Project
              title="http-to"
              link="https://github.com/alfredosalzillo/http-to"
              description={
                'A small app to convert http request to javascript or dart code.\nDeveloped using web-components.'
              }
            />
            <Project
              title="blobs-dead-or-alive"
              link="https://dev.to/alfredosalzillo/a-game-of-blobs-dead-or-alive-2alj"
              description={
                'A game of blobs...'
              }
            />
          </Section>
        </View>
      </View>
      <Footer>
        <Typography variant="body" style={{ fontSize: 9, marginTop: 5 }}>
          This resume is built with
          {' '}
          <Link
            src="https://github.com/alfredosalzillo/resume"
            style={styles.link}
          >
            <Text>
              https://github.com/alfredosalzillo/resume
            </Text>
          </Link>
          .
        </Typography>
      </Footer>
    </Page>
  );
};

export default Resume;
