import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store'; // Import RootState to type the selector
// import profile from '../app/screens/Profile'

const HeaderComponent: React.FC = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);

  // Loading the custom font
  const [fontsLoaded] = useFonts({
    IrishGrover: require('@/assets/fonts/IrishGrover-Regular.ttf'),
  });

  const handleProfile = () => {
    router.push('../screens/Profile'); // Ensure this matches the exact route name
  };

  if (!fontsLoaded) {
    return null; // Optionally return a loading indicator
  }

  return (
    <View style={styles.container}>
      {/* Icon and Title */}
      <View style={styles.leftSection}>
        <Image
          source={require('@/assets/images/Logo.png')}
          style={styles.avatar}
        />
        <Text style={[styles.title, fontsLoaded && { fontFamily: 'IrishGrover' }]}>
          NESTWELL
        </Text>
      </View>

      {/* User Info */}
      <View style={styles.rightSection}>
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.location}>{user.location}</Text>
        </View>
        <TouchableOpacity onPress={handleProfile}>
          <Image
            source={require('@/assets/images/Pratish Poojary Photo.jpg')}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#10365B',
    paddingTop: 35,
    paddingBottom: 10,
    padding: 12,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  rightSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
  },
  userName: {
    color: 'white',
    fontSize: 13,
  },
  location: {
    color: '#ccc',
    fontSize: 10,
    textAlign: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default HeaderComponent;
