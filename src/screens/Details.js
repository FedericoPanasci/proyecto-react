import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BREADS } from '../data/breads'

const Details = ({route}) => {
  const pan = BREADS.find(obj => obj.id === route.params.id)
  return (
    <View style={styles.context}>
      <Text style={styles.item}>
        {pan.name}
      </Text>
      <Text style={styles.item}>
        {pan.price}
      </Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  context: {
    paddingBottom: 5,
    marginTop: 2,
    marginBottom: 5,
    textAlign: 'center',
    backgroundColor:'rgb(80, 28, 17)'
  }, item:{
    color:'rgb(21, 134, 158)' 
  }
})