import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import GridItem from '../components/GridItem'
import { getItems } from '../app/services/category'

const Home = ({ navigation }) => {
  const [prods, setProds] = useState([]);
  useEffect(() => {
    getItems().then((res) => {
      setProds(res);
      console.log(res);
    });
  }, []);

  return (
    <>
    <View>
      <FlatList
      data={prods}
      renderItem={({item}) => <GridItem item={item} navigation={navigation}/>}
      keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
    </>
    )
}

export default Home

