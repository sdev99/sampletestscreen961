import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

type Item = {
  id: string;
  text: string;
};

type Props = {
  data: Item[];
};

const Width = Dimensions.get('screen').width;
const NewsSection: React.FC<Props> = ({ data }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {data.map(item => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardText}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default NewsSection;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },

  card: {
    width: Width * 0.7,
    minHeight: 78,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginRight: 20,
    justifyContent: 'center',
    borderColor: '#d3d5ddff',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  cardText: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 24,
    color: '#000',
  },
});
