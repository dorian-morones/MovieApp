import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const SuggestionListLayout = (props) => {
  const { title, children} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default SuggestionListLayout;
