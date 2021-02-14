import React from 'react';
import { Link, StyleSheet, Text, View } from '@react-pdf/renderer';
import List, { Item } from './List';
import Title from './Title';
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
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

type ProjectProps = {
  title: string,
  description: string,
  link?: string,
}
const Project: React.FC<ProjectProps> = ({ title, description, link }) => (
  <View style={styles.entryContainer}>
    <View style={styles.headerContainer}>
      <View style={styles.leftColumn}>
        <Link src={link} style={styles.title}>{title}</Link>
        <Text style={styles.details}>{description}</Text>
      </View>
    </View>
  </View>
)

const Projects: React.FC = () => (
  <View style={styles.container}>
    <Title>PROJECTS</Title>
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
  </View>
)


export default Projects;
