import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getItemById } from '../app/services/prods'
import { createItem } from '../app/services/cart'

const Details = ({route}) => {
  const [prods, setProds] = useState([]);
  useEffect(() => {
    getItemById(route.params.id).then((res) => {
      setProds(res);
    });
  }, []);

  const addToCart = () => {
    createItem(prods);
  }

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
    <TouchableOpacity onPress={addToCart}><Text style={styles.agregar}>Agregar al carrito</Text></TouchableOpacity>
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
  }, agregar: {
    paddingBottom: 5,
    marginTop: 2,
    marginBottom: 5,
    textAlign: "center",
    color: "rgb(80, 28, 17)",
    backgroundColor: "rgb(21, 134, 158)",
  }
})