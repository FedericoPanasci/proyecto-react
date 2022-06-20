import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BREADS } from '../data/breads'

const Breads = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={BREADS}
        renderItem={({item}) => 
          <TouchableOpacity onPress={
          () => navigation.navigate('Details', {id: item.id})}>
            <Text style={styles.item}>
              {item.name}
            </Text>
          </TouchableOpacity>}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Breads

const styles = StyleSheet.create({
  item: {
    paddingBottom: 5,
    marginTop: 2,
    marginBottom: 5,
    textAlign: 'center',
    color:'rgb(21, 134, 158)',
    backgroundColor:'rgb(80, 28, 17)'
  }
})