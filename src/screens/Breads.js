import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getItems } from "../app/services/prods";

const Breads = ({ navigation }) => {
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
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', {id: item.id})}
            >
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id }
        />
      </View>        
    </>
  );
};

export default Breads;

const styles = StyleSheet.create({
  item: {
    paddingBottom: 5,
    marginTop: 2,
    marginBottom: 5,
    textAlign: "center",
    color: "rgb(21, 134, 158)",
    backgroundColor: "rgb(80, 28, 17)",
  },
});
