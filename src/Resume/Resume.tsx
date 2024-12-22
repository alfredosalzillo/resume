import React from 'react';
import ReactPDF, { Link, Page, View, Text } from '@react-pdf/renderer';
import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import Project from './Project';
import Section from './Section';
import Footer from './Footer';
import Typography from './Typography';
import { SkillCloud } from "./Skill";
import { makeStyles } from './styles';

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
  main: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 12,
  },
  link: {
    color: theme.palette.text,
    textDecoration: 'none',
    fontWeight: 'bold',
  },
}));


type ResumeExperience = {
  company: string;
  date: string;
  position: string;
  details: string[];
}
type ResumeProject = {
  title: string;
  link: string;
  description: string;
}
type ResumeSkill = {
  name: string;
  weight: number;
}
type ResumeEducation = {
  school: string;
  degree: string;
}
type ResumeContact = {
  value: string;
  link: string;
}
export type ResumeData = {
  project: {
    link: string;
  };
  author: {
    name: string;
    jobTitle: string;
    link: string;
  };
  experiences: ResumeExperience[];
  projects: ResumeProject[];
  education: ResumeEducation;
  skills: ResumeSkill[];
  contacts: ResumeContact[];
};
export type ResumeProps = ReactPDF.PageProps & {
  data: ResumeData;
};
const Resume: React.FC<ResumeProps> = ({ data, ...props }) => {
  const styles = useStyles();
  return (
    <Page {...props} style={styles.root}>
      <Header
        title={data.author.name}
        subtitle={data.author.jobTitle}
        link={data.author.link}
      />
      <View style={styles.container}>
        <View style={styles.main}>
          <Section title="EXPERIENCES">
            {data.experiences.map(({ company, date, details, position }) => (
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
            {data.projects.map(({ title, link, description }) => (
              <Project
                key={title}
                title={title}
                link={link}
                description={description}
              />
            ))}
          </Section>
          <Section title="EDUCATION">
            <Education
              school={data.education.school}
              degree={data.education.degree}
            />
          </Section>
          <Section title="PROGRAMMING SKILLS">
            <SkillCloud
              name="Languages and Framework"
              skills={data.skills}
            />
          </Section>
          <Section title="CONTACTS">
            {data.contacts.map(({ value, link }) => (
              <Contact
                key={value}
                value={value}
                link={link}
              />
            ))}
          </Section>
        </View>
      </View>
      <Footer>
        <Typography variant="body" style={{ fontSize: 9, marginTop: 4 }}>
          This resume is built with
          {' '}
          <Link
            src={data.project.link}
            style={styles.link}
          >
            <Text>
              {data.project.link}
            </Text>
          </Link>
          .
        </Typography>
      </Footer>
    </Page>
  );
};

export default Resume;
