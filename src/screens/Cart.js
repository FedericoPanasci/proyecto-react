import React, { useContext, useState } from "react";
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
import { createItem } from "../app/services/orders";

const Cart = () => {
  const [itemSelected, setItemSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [state, setState] = useContext(AppContext);

  function allDeleteCart(){
    getItems().then((res) => {
      res.map(r => deleteItem(r.id))
    })
  } 

  const addOrder = () => {
    createItem({ items: state.items, user: state.user, total: sumProds() });
    setState({...state, items: []})
    alert("Se realizo su compra con exito, muchas gracias por elegirnos");
    allDeleteCart()
  };

  function sumProds() {
    let suma = 0;
    state.items.map((p) => (suma += parseInt(p.price)));
    return suma;
  }

  const onHandlerDelete = () => {
    deleteItem(itemSelected.id);
    setItemSelected({});
    setModalVisible(false);
    getItems().then((res) => {
      setState({ ...state, items: res });
    });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View>
        <FlatList
          data={state.items}
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
              <Text>borrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal}>
              <Text>volver</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Text style={styles.total} key={"total"}>
          Total: ${sumProds()}
        </Text>
        <TouchableOpacity onPress={addOrder}>
          <Text>Realizar compra</Text>
        </TouchableOpacity>
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
  },
});
