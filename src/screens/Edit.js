import { AuthErrorCodes } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getItems, createItem, deleteItem, updateItem } from "../app/services/prods";

const Edit = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [itemSelected, setItemSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerDelete = () => {
    deleteItem(itemSelected.id);
    setItemSelected({});
    setModalVisible(false);
    getItems().then((res) => {
      setProds(res);
    });
  };

  const addProd = () => {
    createItem({
      category: category,
      name: name,
      description: description,
      weight: weight,
      price: price,
    });
    getItems().then((res) => {
      setProds(res);
    });
  };

  const [prods, setProds] = useState([]);
  useEffect(() => {
    getItems().then((res) => {
      setProds(res);
      console.log(res);
    });
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  const editProd = () => {
    updateItem(itemSelected.id, {
      category: category,
      name: name,
      description: description,
      weight: weight,
      price: price,
    })
  }

  return (
    <>
      <View>
        <Text> productos ya cargados </Text>
        <FlatList
          data={prods}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setItemSelected(item);
                setModalVisible(true);
              }}
            >
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        <Modal visible={modalVisible} animationType="slide" transparent="true">
          <View style={styles.modalView}>
            <TouchableOpacity onPress={onHandlerDelete}>
              borrar
            </TouchableOpacity>
            <TouchableOpacity onPress={editProd}>
              editar
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal}>
              volver
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

      <View>
        <Text>
          <TextInput
            placeholder="category"
            onChange={(text) => setCategory(text.target.value)}
          />
          <TextInput
            placeholder="name"
            onChange={(text) => setName(text.target.value)}
          />
          <TextInput
            placeholder="description"
            onChange={(text) => setDescription(text.target.value)}
          />
          <TextInput
            placeholder="weight"
            onChange={(text) => setWeight(text.target.value)}
          />
          <TextInput
            placeholder="price"
            onChange={(text) => setPrice(text.target.value)}
          />
          <TouchableOpacity onPress={addProd}>
            Agregar producto
          </TouchableOpacity>
        </Text>
      </View>
    </>
  );
};

export default Edit;

const styles = StyleSheet.create({
  modalView: {
    width: 200,
    height: 100,
    borderRadius: 25,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: "rgb(21, 134, 158)",
    color: "rgb(80, 28, 17)",
    flexDirection: "row",
    justifyContent: "space-around",
  }, item: {
      paddingBottom: 5,
      marginTop: 2,
      marginBottom: 5,
      textAlign: "center",
      color: "rgb(21, 134, 158)",
      backgroundColor: "rgb(80, 28, 17)",
    }
});
