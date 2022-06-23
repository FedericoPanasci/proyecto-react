import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { BREADS } from '../data/breads'
import { getItemById } from '../app/services/prods'

const Details = ({route}) => {
  const [prods, setProds] = useState([]);
  useEffect(() => {
    getItemById(route.params.id).then((res) => {
      setProds(res);
      console.log(res);
    });
  }, []);

  const addToCart = () => {
    alert('Teniente Dan te encargas vos')
  }

  // const pan = BREADS.find(obj => obj.id === route.params.id)
  return (
    <>
    <View style={styles.context}>
      <Text style={styles.item}>
        {prods.name}
      </Text>
      <Text style={styles.item}>
        ${prods.price}
      </Text>
    </View>
    <TouchableOpacity onPress={addToCart}><Text>Agregar al carrito</Text></TouchableOpacity>
    </>
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