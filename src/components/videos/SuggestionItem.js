import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SuggestionItem = (props) => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.cover}
          source={require('../../../assets/backgronund.png')}
        />
        <View style={styles.genreContainer}>
          <Text style={styles.genreText}>Accion</Text>
        </View>
      </View>
      <View style={styles.rigth}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>2007</Text>
        <Text style={styles.score}>5 Estrellas</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  cover: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
  },
  genreContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: 20,
    width: 100,
  },
  genreText: {
    position: 'absolute',
    color: '#fff',
    textAlign: 'center',
  },
  rigth: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    color: '#fff',
    backgroundColor: '#f1c40f',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
  },
  score: {
    color: '#f1c40f',
  },
});

export default SuggestionItem;
