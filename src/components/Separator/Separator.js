import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Separator = (props) => {
  const {text} = props;
  return (
    <View style={styles.separator}>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 2,
    flex: 1,
    backgroundColor: 'grey',
    marginVertical: 5,
  },
});

export default Separator;
