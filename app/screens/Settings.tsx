import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Settings: React.FC = () => {
  const router = useRouter();  // Initialize the router
  const [modalVisible, setModalVisible] = useState<string | null>(null); // State for the selected option

  // Function to show the modal for a specific option
  const showModal = (option: string) => {
    setModalVisible(option);
  };

  // Function to hide the modal
  const hideModal = () => {
    setModalVisible(null);
  };

  // Function to handle confirmation
  const handleConfirm = () => {
    if (modalVisible) {
      router.push(`./yes-or-no`); // Navigate based on the selected option
      hideModal(); // Hide the modal after confirming
    }
  };

  return (
    <View style={styles.container}>

      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Notification */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => showModal('Notification')}
      >
        <View style={styles.optionRow}>
          <FontAwesome5 name="bell" size={20} color="black" />
          <Text style={styles.optionText}>Notification</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>

      {/* Location access */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => showModal('LocationAccess')}
      >
        <View style={styles.optionRow}>
          <FontAwesome5 name="location-arrow" size={20} color="black" />
          <Text style={styles.optionText}>Location access</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>

      {/* Save login info */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => showModal('SaveLoginInfo')}
      >
        <View style={styles.optionRow}>
          <FontAwesome5 name="key" size={20} color="black" />
          <Text style={styles.optionText}>Save Login info</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>

      {/* Custom Modals for Each Setting */}
      {['Notification', 'LocationAccess', 'SaveLoginInfo'].map(option => (
        <Modal
          key={option}
          animationType="slide"
          transparent={true}
          visible={modalVisible === option}
          onRequestClose={hideModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Confirm {option}</Text>
              <Text style={styles.modalMessage}>Are you sure you want to proceed with {option}?</Text>
              <View style={styles.modalButtons}>
                <Pressable style={[styles.modalButton, styles.cancelButton]} onPress={hideModal}>
                  <Text style={styles.modalButtonText}>No</Text>
                </Pressable>
                <Pressable style={[styles.modalButton, styles.confirmButton]} onPress={handleConfirm}>
                  <Text style={styles.modalButtonText}>Yes</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      ))}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10365B',
    padding: 17,
    marginBottom: 20,
    justifyContent: 'space-between',  // Space items between each other
  },
  backButton: {
    marginTop: 27,
    marginLeft: 7,
  },
  headerTitle: {
    fontSize: 23,
    marginLeft: 15,
    marginTop: 25,
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,  // Takes up available space to center title
  },
  option: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginEnd:15,
    marginStart:15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#FF4D4D',
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default Settings;