import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/redux/slices/userSlice'; // Make sure the path to your slice is correct
import { RootState } from '@/redux/store'; // Import RootState to type the selector


const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);  // State for the modal visibility
  const [logoutMessageVisible, setLogoutMessageVisible] = useState(false);  // State for showing the logout message

  // Function to handle logout
  const handleLogout = () => {
    setModalVisible(true); // Show the custom modal
  };

  // Function to confirm logout
  const confirmLogout = () => {
    setModalVisible(false);  // Hide the modal
    setLogoutMessageVisible(true);  // Show the "Logged Out" message

    // After 3 seconds, hide the "Logged Out" message
    setTimeout(() => {
      setLogoutMessageVisible(false);  // Hide the "Logged Out" message
      // Optionally, clear session or authentication tokens here
    }, 3000);
  };

  // Function to cancel logout
  const cancelLogout = () => {
    setModalVisible(false);  // Hide the modal
  };

  return (
    <View style={styles.container}>
      {/* Show "Logged Out" message if logoutMessageVisible is true */}
      {logoutMessageVisible && (
        <View style={styles.logoutMessageContainer}>
          <Text style={styles.logoutMessage}>You have been logged out.</Text>
        </View>
      )}

      {/* User Info Section */}
      <LinearGradient
        colors={['#295568', '#6BC1C5']}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.userInfo}
      >
        <Image
          source={require('@/assets/images/Pratish Poojary Photo.jpg')}  // Ensure the path is correct
          style={styles.avatar}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <TouchableOpacity onPress={() => router.push('/View activities')}>
            <View style={styles.activitiesRow}>
              <Text style={styles.viewActivities}>View activities</Text>
              <MaterialIcons name="keyboard-arrow-right" size={16} style={styles.arrowIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Favorites and Buy history buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push('/Favorites')}
        >
          <FontAwesome5 name="star" size={24} color="#000" />
          <Text style={styles.actionText}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push('/Buy history')}
        >
          <FontAwesome5 name="book" size={24} color="#000" />
          <Text style={styles.actionText}>Buy History</Text>
        </TouchableOpacity>
      </View>

      {/* Edit Profile */}
      <TouchableOpacity 
        style={styles.profileOption}
        onPress={() => router.push('/Edit profile')}
      >
        <View style={styles.optionRow}>
          <FontAwesome5 name="user" size={20} color="black" />
          <Text style={styles.optionText}>Edit Profile</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>

      {/* Settings */}
      <TouchableOpacity 
        style={styles.profileOption}
        onPress={() => router.push('/Settings')}
      >
        <View style={styles.optionRow}>
          <FontAwesome5 name="cog" size={20} color="black" />
          <Text style={styles.optionText}>Settings</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity 
        style={styles.profileOption}
        onPress={handleLogout}
      >
        <View style={styles.optionRow}>
          <FontAwesome5 name="sign-out-alt" size={20} color="black" />
          <Text style={styles.optionText}>Logout</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>

      {/* Custom Modal for Logout Confirmation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Logout</Text>
            <Text style={styles.modalMessage}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtons}>
              <Pressable style={styles.modalButton} onPress={cancelLogout}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </Pressable>
              <Pressable style={[styles.modalButton, styles.confirmButton]} onPress={confirmLogout}>
                <Text style={styles.modalButtonText}>Logout</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* App Info Section */}
      <Text style={styles.versionText}>v16.11.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logoutMessageContainer: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  logoutMessage: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  userInfo: {
    borderRadius: 20,
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  userEmail: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  activitiesRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewActivities: {
    fontSize: 14,
    color: '#2C5871',
    textDecorationLine: 'underline',
  },
  arrowIcon: {
    marginLeft: 5,
  },

  // Favorites and Buy history buttons
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  actionText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
  },

  // Edit profile, settings, and logout buttons
  profileOption: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
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

  // Custom Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 14,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#FF6347',
  },
  
  // App info text style
  versionText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
});

export default Profile;
