import React, {useState} from 'react';
import {FlatList, Text} from 'react-native';
import SuggestionListLayout from './SuggestionListLayout';
import EmptyItem from '../EmptyItem/EmptyItem';
import Separator from '../Separator/Separator';
import SuggestionItem from './SuggestionItem';

// const API = 'https://yts.mx/api/v2/list_movies.json?limit=5';

const VideoSuggestion = (props) => {

  console.log('props', props)
  const [videoList, setVideoList] = useState([
    {
      key: '0',
      title: 'Item',
    },
    {
      key: '1',
      title: 'Item',
    },
  ]);

  return (
    <SuggestionListLayout title="Suggested Videos">
      <FlatList
        data={videoList}
        ListEmptyComponent={() => <EmptyItem text="NO DATA" />}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({item}) => <SuggestionItem title={item.title} />}
      />
    </SuggestionListLayout>
  );
};

export default VideoSuggestion;
