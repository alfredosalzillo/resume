import React from 'react';
import { Link, StyleSheet, View } from '@react-pdf/renderer';
import Typography from './Typography';

const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
  },
  title: {
    color: 'black',
    textDecoration: 'none',
  },
});

type ProjectProps = {
  title: string,
  description: string,
  link?: string,
}
const Project: React.FC<ProjectProps> = ({ title, description, link }) => (
  <View style={styles.root}>
    <Link src={link} style={styles.title}>
      <Typography variant="h3">{title}</Typography>
    </Link>
    <Typography variant="body">{description}</Typography>
  </View>
)

export default Project;
