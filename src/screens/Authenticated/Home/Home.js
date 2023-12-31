import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ElectionCard from '../../../components/Home/ElectionCard';
import {hp} from '../../../../utils/Constants';
import HomeHeader from '../../../components/Home/HomeHeader';
import Header from '../../../components/GlobalComponent/Header';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={Array.from({length: 5})}
        style={styles.flatlist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <ElectionCard />}
        ItemSeparatorComponent={<View style={{height: hp(2.5)}} />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatlist: {
    paddingTop: hp(3),
  },
});
