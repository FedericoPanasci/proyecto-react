import { Modal, StyleSheet, View } from "react-native"

const ModalMio = () => {
  return (
    <Modal visible={true} animationType='slide'>
        <View style={styles.modalContainer}>
            titulooo
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'black',
        opacity: 0.5

    }
})
export default ModalMio