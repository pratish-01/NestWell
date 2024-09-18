import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Menu = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <ScrollView>
        {/* Support and Rate Us Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/Menuscreens/Support')} // Add route to Support page
          >
            <FontAwesome5 name="paper-plane" size={24} color="#2d4379" />
            <Text style={styles.cardText}>Report problems</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/Menuscreens/Rate Us')} // Add route to Rate Us page
          >
            <MaterialIcons name="rate-review" size={24} color="#2d4379" />
            <Text style={styles.cardText}>Rate Us</Text>
          </TouchableOpacity>
        </View>

        {/* Check for Updates */}
        <TouchableOpacity
          style={styles.updateButton}
          onPress={() => router.push('./CheckForUpdates')} // Add route to Check for Updates page
        >
          <FontAwesome5 name="clock" size={24} color="#2d4379" />
          <Text style={styles.updateText}>Check for updates</Text>
          <Text style={styles.versionText}>v16.11.0</Text>
        </TouchableOpacity>

        {/* Partners Information */}
        <Text style={styles.sectionHeader}>Partners information</Text>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/Menuscreens/Nearest Outlets')} // Add route to Nearest Outlets page
        >
          <MaterialIcons name="store" size={24} color="#2d4379" />
          <Text style={styles.menuText}>Nearest outlets</Text>
          <Ionicons name="chevron-forward" size={24} color="#2d4379" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/Menuscreens/Product Sources')} // Add route to Product Sources page
        >
          <FontAwesome5 name="shopping-cart" size={24} color="#2d4379" />
          <Text style={styles.menuText}>Product sources</Text>
          <Ionicons name="chevron-forward" size={24} color="#2d4379" style={styles.arrowIcon} />
        </TouchableOpacity>

        {/* Other Information */}
        <Text style={styles.sectionHeader}>Other information</Text>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/Menuscreens/Share the App')} // Add route to Share the App page
        >
          <Ionicons name="share-social" size={24} color="#2d4379" />
          <Text style={styles.menuText}>Share the app</Text>
          <Ionicons name="chevron-forward" size={24} color="#2d4379" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/Menuscreens/Account Privacy')} // Add route to Account Privacy page
        >
          <MaterialIcons name="privacy-tip" size={24} color="#2d4379" />
          <Text style={styles.menuText}>Account privacy</Text>
          <Ionicons name="chevron-forward" size={24} color="#2d4379" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/Menuscreens/About Us')} // Add route to About Us page
        >
          <Ionicons name="information-circle" size={24} color="#2d4379" />
          <Text style={styles.menuText}>About us</Text>
          <Ionicons name="chevron-forward" size={24} color="#2d4379" style={styles.arrowIcon} />
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  card: {
    width: '45%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 5,
    // Drop shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    // Drop shadow for Android
    elevation: 5,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
  updateButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  updateText: {
    fontSize: 16,
    color: '#000',
  },
  versionText: {
    fontSize: 12,
    color: '#666',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
});

export default Menu;
