import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const EmptyItem = (props) => {
  const { text } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
  },
  title: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default EmptyItem;
