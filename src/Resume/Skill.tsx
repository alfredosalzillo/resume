import React from 'react';
import List, { Item } from './List';
import { View, StyleSheet } from '@react-pdf/renderer';
import Typography from './Typography';

const styles = StyleSheet.create({
  root: {
    marginBottom: 15
  },
  container: {
    paddingTop: 5,
  },
});

type WeightedSkill = {
  name: string,
  weight: number,
}
type SkillCloudProps = {
  name: string,
  skills: WeightedSkill[],
}

export const SkillCloud: React.FC<SkillCloudProps> = ({ name, skills }) => (
  <View style={styles.root}>
    <Typography variant="h3">{name}</Typography>
    <View style={styles.container}>
      <Typography variant="body">
        {skills.map(({ name, weight }) => (
          <React.Fragment key={name}>
            <Typography
              variant="body"
              style={{
                fontSize: weight + 2,
              }}
            >
              {name}
            </Typography>
            {' '}
          </React.Fragment>
        ))}
      </Typography>
    </View>
  </View>
);
type SkillEntryProps = {
  name: string,
  skills: string[],
}
export const SkillEntry: React.FC<SkillEntryProps> = ({ name, skills }) => (
  <View>
    <Typography variant="h3">{name}</Typography>
    <List>
      {skills.map((skill) => (
        <Item key={skill}>{skill}</Item>
      ))}
    </List>
  </View>
);


const Skill = {
  Entry: SkillEntry,
  Cloud: SkillCloud,
}
export default Skill;
