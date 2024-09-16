import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/redux/slices/userSlice'; // Make sure the path to your slice is correct
import { RootState } from '@/redux/store'; // Import RootState to type the selector

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
    padding: 20,
    backgroundColor: '#f5f5f5',
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
