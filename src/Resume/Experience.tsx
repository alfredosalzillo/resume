import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import List, { Item } from './List';
import Typography from './Typography';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 15,
  },
  entryContainer: {
    marginBottom: 10,
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
});

type ExperienceProps = {
  company: string,
  details: string[],
  position: string,
  date: string,
}
const Experience: React.FC<ExperienceProps> = ({
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
          <Typography variant="h3">{title}</Typography>
        </View>
        <View style={styles.rightColumn}>
          <Typography variant="emphasis">{date}</Typography>
        </View>
      </View>
      <List>
        {details.map((detail, i) => (
          <Item key={i}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

export default Experience;
