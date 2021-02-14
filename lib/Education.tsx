import React from 'react';
import { View } from '@react-pdf/renderer';
import Typography from './Typography';

type EducationProps = {
  school: string,
  degree: string,
  date: string,
}
const Education: React.FC<EducationProps> = ({
  school,
  degree,
  date,
}) => (
  <View>
    <Typography variant="h3">{school}</Typography>
    <Typography variant="body">{degree}</Typography>
    <Typography variant="emphasis">{date}</Typography>
  </View>
)

export default Education;
