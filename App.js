// import { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
// import ModalMio from './components/Modal';

import Provider from "./src/app/Provider";
import Navigation from "./src/navigation";

// export default function App() {
//   const data = [
//     {'id': 1, 'name': 'fede'},
//     {'id': 2, 'name': 'javier'},
//     {'id': 3, 'name': 'pochi'},
//     {'id': 4, 'name': 'tenienteDan'}
//   ]
//   const [itemList, setItemList] = useState(data)
//   const [textItem, setTextItem] = useState('')
  
//   const [itemSelected, setItemSelected] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);



//   const add = () => setItemList([...itemList, {id:itemList.length+1, name:textItem}])

//   const onHandlerDelete = () => {
//     setItemList(itemList.filter(item => item.id != itemSelected.id));
//     setItemSelected({})
//     setModalVisible(false);
//   }

//   const onHandlerSelected = () =>{
//     alert('algo');
//   }


//   return (
//     <View style={styles.container}>
//       <View style={styles.viewBtn}>
//       <TextInput style={styles.input} placeholder='escriba aqui' onChangeText={text => setTextItem(text)}
//       value={textItem}/>
//       <TouchableOpacity style={styles.textButton} onPress={add}><Text>+</Text></TouchableOpacity>
//       </View>
      
//       <View>
//         <FlatList 
//           data={itemList}
//           renderItem={({item}) => <TouchableOpacity onPress={() => {
//             setItemSelected(item);
//             setModalVisible(true);
//           }}><Text>{item.name}</Text></TouchableOpacity>}
//           keyExtractor={item => item.id.toString()}
//         />
//         <Modal visible={modalVisible} animationType='slide'>
//           <View>
//             <TouchableOpacity onPress={onHandlerDelete}>borrar</TouchableOpacity>
//           </View>
//         </Modal>

//         {/* <ModalMio>

//         </ModalMio> */}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection:'column',
//     backgroundColor: 'salmon',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }, viewBtn:{
//     flexDirection:'row'
//   },
//   textButton: {
//     color: 'white',
//     fontSize: 12,
//     backgroundColor: 'blue',
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 30,
//     height: 30
//   },
//   input: {
//     borderColor: 'black',
//     borderWidth: 5
//   }
// });


const App = () => <Provider><Navigation/></Provider>
export default App;