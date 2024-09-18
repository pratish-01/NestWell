import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient'; // Ensure to install expo-linear-gradient package

const AboutUs: React.FC = () => {
  return (
    <LinearGradient
      colors={['#ffffff', '#f5f5f5']}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View animation="fadeInDown" duration={1000} style={styles.header}>
          <Text style={styles.title}>About Us</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" duration={1000} delay={500} style={styles.card}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.text}>
            At NestWell, our mission is to ensure the highest quality of food safety and environmental sustainability. We are dedicated to leveraging advanced technology to provide accurate, real-time data on pesticide usage and other critical factors affecting food quality.
          </Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" duration={1000} delay={1000} style={styles.card}>
          <Text style={styles.sectionTitle}>How Our System Works</Text>
          <Text style={styles.text}>
            Our innovative system focuses on detecting and managing the use of organophosphate-based chemical pesticides, which are known for their potential health risks. We utilize a combination of cutting-edge sensors and robust cloud technology to deliver precise and reliable information to our users.
          </Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" duration={1000} delay={1500} style={styles.card}>
          <Text style={styles.sectionTitle}>Sensors Used</Text>
          <Text style={styles.text}>
            - <Text style={styles.bold}>DHT11 Sensor:</Text> Measures temperature and humidity, providing crucial data for understanding environmental conditions that affect pesticide efficacy and crop health.
          </Text>
          <Text style={styles.text}>
            - <Text style={styles.bold}>NPK Sensor:</Text> Analyzes soil nutrients (Nitrogen, Phosphorus, and Potassium), helping us assess soil quality and the impact of pesticides on nutrient levels.
          </Text>
          <Text style={styles.text}>
            - <Text style={styles.bold}>pH Meter:</Text> Measures soil pH levels, which is essential for evaluating soil acidity and the potential effects of pesticide application on soil chemistry.
          </Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" duration={1000} delay={2000} style={styles.card}>
          <Text style={styles.sectionTitle}>AWS IoT Integration</Text>
          <Text style={styles.text}>
            Our system integrates with AWS IoT to securely collect, process, and store data from our sensors. AWS IoT allows us to manage devices remotely, ensure data accuracy, and scale our solution as needed to meet the demands of our users.
          </Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" duration={1000} delay={2500} style={styles.card}>
          <Text style={styles.sectionTitle}>Blockchain Technology</Text>
          <Text style={styles.text}>
            We utilize EOSIO blockchain technology to ensure the authenticity and transparency of our data. By recording sensor data and pesticide usage on a decentralized ledger, we provide users with verifiable information that cannot be tampered with. This builds trust and ensures the integrity of the data we deliver.
          </Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" duration={1000} delay={3000} style={styles.card}>
          <Text style={styles.sectionTitle}>Benefits of Our Mobile App</Text>
          <Text style={styles.text}>
            Our mobile app offers numerous benefits:
          </Text>
          <Text style={styles.text}>
            - <Text style={styles.bold}>Real-Time Monitoring:</Text> Get instant updates on environmental conditions and pesticide usage.
          </Text>
          <Text style={styles.text}>
            - <Text style={styles.bold}>Enhanced Food Safety:</Text> Ensure the quality and safety of the food you consume with accurate data on pesticide levels.
          </Text>
          <Text style={styles.text}>
            - <Text style={styles.bold}>Transparency and Trust:</Text> Access verifiable data recorded on the blockchain, providing peace of mind about the authenticity of the information.
          </Text>
          <Text style={styles.text}>
            - <Text style={styles.bold}>User-Friendly Interface:</Text> Our intuitive app design makes it easy to access and understand the data you need.
          </Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" duration={1000} delay={3500} style={styles.card}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.text}>
            If you have any questions or feedback, please reach out to us at [Your Contact Information]. We are here to support you and ensure you have the best experience with our technology.
          </Text>
        </Animatable.View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensure ScrollView takes up enough space
    padding: 20,
  },
  background: {
    flex: 1,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#10365B',
    marginVertical: 20,
    
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5, // For shadow effect on Android
    shadowColor: '#000', // For shadow effect on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#10365B',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default AboutUs;
