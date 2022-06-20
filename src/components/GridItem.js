import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const GridItem = ({item, navigation}) => {
  return (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('Breads')}>
          <Text style={styles.item}>{item.title}</Text>
        </TouchableOpacity>    
    </View>
  )
}

export default GridItem

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