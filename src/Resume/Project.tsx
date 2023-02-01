import React from 'react';
import { Link, View } from '@react-pdf/renderer';
import Typography from './Typography';
import { makeStyles } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 10,
  },
  title: {
    color: theme.palette.text,
    textDecoration: 'none',
  },
}))

type ProjectProps = {
  title: string,
  description: string,
  link?: string,
}
const Project: React.FC<ProjectProps> = ({ title, description, link }) => {
  const styles = useStyles()
  return (
    <View style={styles.root}>
      <Link src={link!} style={styles.title}>
        <Typography variant="h3">{title}</Typography>
      </Link>
      <Typography variant="body">{description}</Typography>
    </View>
  );
}

export default Project;
