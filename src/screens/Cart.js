import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppContext } from "../app/Provider";
import { deleteItem, getItems } from "../app/services/cart";

const Cart = () => {
  const [itemSelected, setItemSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [state, setState] = useContext(AppContext);

  function sumProds() {
    let suma = 0;
    state.map((p) => (suma += parseInt(p.price)));
    return suma;
  }

  const onHandlerDelete = () => {
    deleteItem(itemSelected.id);
    setItemSelected({});
    setModalVisible(false);
    getItems().then((res) => {
      setProds(res);
      setState(res);
    });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    getItems().then((res) => {
      setProds(res);
      console.log('render cart');
    });
  }, []);
  console.log(state);

  return (
    <>
      <View>
        <FlatList
          data={state}
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
        <Modal visible={modalVisible} animationType="slide" transparent="false">
        <View style={styles.modalView}>
          <TouchableOpacity onPress={onHandlerDelete}>
            <Text>
              borrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeModal}>
            <Text>
              volver
            </Text>
          </TouchableOpacity>
        </View>
        </Modal>
        <Text style={styles.total} key={"total"}>
          Total: ${sumProds()}
        </Text>
      </View>
    </>
  );
};

export default Cart;

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
  },
  item: {
    paddingBottom: 5,
    marginTop: 2,
    marginBottom: 5,
    textAlign: "center",
    color: "rgb(21, 134, 158)",
    backgroundColor: "rgb(80, 28, 17)",
  },
  total: {
    paddingBottom: 5,
    marginTop: 2,
    marginBottom: 5,
    textAlign: "center",
    color: "rgb(80, 28, 17)",
    backgroundColor: "rgb(21, 134, 158)",
  }
});
