import React from 'react'
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import GridItem from '../components/GridItem'
import { CATEGORIES } from '../data/categories'

const Home = ({ navigation }) => {
  return (
    <View>
        <FlatList 
        data={CATEGORIES}
        renderItem={({item}) => <GridItem item={item} navigation={navigation}/>}
        keyExtractor={(item) => item.id}
        ></FlatList>
    </View>
  )
}

export default Home

