// scanner.tsx
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useRouter } from 'expo-router'; // Use router for navigation
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window'); // Get device width for styling

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const router = useRouter(); // To handle navigation

  // Request permission to access the camera
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Camera permission is required to scan QR codes.');
      }
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    Alert.alert('QR Code Scanned!', `Type: ${type}\nData: ${data}`, [
      {
        text: 'Show Result',
        onPress: () => {
          router.push({
            pathname: '/result',
            params: { data }, // Pass the scanned data to the result screen
          });
        },
      },
    ]);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.loadingText}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.errorText}>Camera permission denied.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {/* Overlay for scanning box */}
      <View style={styles.overlay}>
        <View style={styles.scanBox} />
      </View>

      {/* Instruction text */}
      <View style={styles.instructionContainer}>
        <Ionicons name="scan-outline" size={48} color="#0E7AFE" />
        <Text style={styles.instructionText}>Align the QR code within the frame</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanBox: {
    width: width * 0.7,
    height: width * 0.7,
    borderWidth: 3,
    borderColor: '#0E7AFE',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  instructionContainer: {
    position: 'absolute',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
});
