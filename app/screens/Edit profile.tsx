import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/redux/slices/userSlice'; // Make sure the path to your slice is correct
import { RootState } from '@/redux/store'; // Import RootState to type the selector
import { MaterialIcons } from '@expo/vector-icons'; // Import the back icon

const EditProfile: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // Fetch the current user data from Redux store
  const user = useSelector((state: RootState) => state.user);

  // Initialize the form state with the current user data
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [location, setLocation] = useState(user.location);

  // Save button handler to dispatch the updated data to the Redux store
  const handleSave = () => {
    dispatch(setUser({ name, email, location }));
    console.log('Profile updated:', { name, email, location });
    router.back(); // Navigate back to the previous page
  };

  // Cancel button to just navigate back without saving changes
  const handleCancel = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      {/* Avatar and form fields */}
      <View style={styles.avatarContainer}>
        <Image
          source={require('@/assets/images/Pratish Poojary Photo.jpg')} // Ensure the path is correct
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.changeAvatarButton}>
          <Text style={styles.changeAvatarText}>Change Avatar</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
          <Text style={[styles.buttonText, styles.cancelButtonText]}>Cancel</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    marginTop:27,
    marginLeft:7,
  },
  headerTitle: {
    fontSize: 23,
    marginLeft:15,
    marginTop:25,
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,  // Takes up available space to center title
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  changeAvatarButton: {
    backgroundColor: '#10365B',
    padding: 10,
    borderRadius: 10,
  },
  changeAvatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    marginLeft:15,
    marginRight:15,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    marginEnd:15,
    marginStart:15,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
  },
  saveButton: {
    backgroundColor: '#10365B',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButtonText: {
    color: '#000', // Black color for Cancel button text
  },
  saveButtonText: {
    color: '#fff', // White color for Save button text
  },
});

export default EditProfile;
