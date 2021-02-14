import React from 'react';
import Title from './Title';
import List, { Item } from './List';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10,
  },
});

type WeightedSkill = {
  name: string,
  weight: number,
}
type SkillCloudProps = {
  name: string,
  skills: WeightedSkill,
}

const SkillCloud: React.FC<SkillCloudProps> = ({ name, skills }) => (
  <View style={{ marginBottom: 15 }}>
    <Text style={styles.title}>{name}</Text>
    <Text>
      {skills.map(({ name, weight }) => (
        <React.Fragment key={name}>
          <Text
            style={{
              fontFamily: 'Lato',
              fontSize: weight + 2,
            }}
          >
            {name}
          </Text>
          {' '}
        </React.Fragment>
      ))}
    </Text>
  </View>
);
type SkillEntryProps = {
  name: string,
  skills: string[],
}
const SkillEntry: React.FC<SkillEntryProps> = ({ name, skills }) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <List>
      {skills.map((skill) => (
        <Item key={skill}>{skill}</Item>
      ))}
    </List>
  </View>
);

const Skills: React.FC = () => (
  <View style={{ marginBottom: 10 }}>
    <Title>Programming Skills</Title>
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
  </View>
);

export default Skills;
