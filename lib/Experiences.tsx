import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 15,
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato',
    fontStyle: 'italic',
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
});

type ExperienceEntryProps = {
  company: string,
  details: string,
  position: string,
  date: string,
}
const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
 company,
 details,
 position,
 date,
}) => {
  const title = `${company} | ${position}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <List>
        {details.map((detail, i) => (
          <Item key={i} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

const experienceData = [
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
      'Developed a customized reporting solution for the identification of a critical iusses in banking processes,' +
      ' optimized for client side processing, using Angular 5 and Devextreme UI library.',
      'Developed Restful HEATOS services for the implementation of a survey platform, developer using Spring 5.',
      'Developed a web application for a survey platform using React.',
      'Managed installation of DWH infrastructures such Oracle DB, SAS, JBoss.',
      'Managed a team for the maintenance and evolution reporting solution for a Telco using SAS technologies',
    ],
    position: 'Full stack and DWH developer',
  },
];

const Experiences: React.FC = () => (
  <View style={styles.container}>
    <Title>Experience</Title>
    {experienceData.map(({ company, date, details, position }) => (
      <ExperienceEntry
        key={company + position}
        company={company}
        date={date}
        details={details}
        position={position}
      />
    ))}
  </View>
);

export default Experiences;
