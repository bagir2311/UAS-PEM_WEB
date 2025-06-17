import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Halaman Utama
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          <Text style={styles.logoOrange}>CARI</Text>
          <Text style={styles.logoWhite}> PARKIR</Text>
        </Text>
        <View style={styles.menu}>
          <Text style={styles.menuActive}>Home</Text>
          <Text style={styles.menuItem}>Contact</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.centerContent}>
        <Text style={styles.title}>CARIPARKIR AJA</Text>
        <Text style={styles.subtitle}>
          CREATED BY <Text style={styles.author}>JAISY BAGIR</Text>
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pesan')}>
          <Text style={styles.buttonText}>PESAN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Halaman Pesan
function PesanScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.signupContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>{"< Kmbali"}</Text>
      </TouchableOpacity>
      <Text style={styles.signupTitle}>Sign Up to InsideBox</Text>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>E-mail</Text>
        <TextInput
          style={styles.inputField}
          placeholder="masukan gmail anda"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.inputField}
          placeholder="********"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or sign up with</Text>
      <View style={styles.socialRow}>
        <View style={styles.socialIcon}><Text>📘</Text></View>
        <View style={styles.socialIcon}><Text>🟦</Text></View>
        <View style={styles.socialIcon}><Text>🍏</Text></View>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.signinText}>
          Have an account? <Text style={styles.signinLink}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// Halaman Daftar
function DaftarScreen({ navigation }) {
  return (
    <View style={styles.signupContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>{"< Kembali"}</Text>
      </TouchableOpacity>
      <Text style={styles.signupTitle}>Sign Up to InsideBox</Text>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>E-mail</Text>
        <View style={styles.inputField}>
          <Text style={styles.inputPlaceholder}>example@email.com</Text>
        </View>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.inputField}>
          <Text style={styles.inputPlaceholder}>********</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or sign up with</Text>
      <View style={styles.socialRow}>
        <View style={styles.socialIcon}><Text>📘</Text></View>
        <View style={styles.socialIcon}><Text>🟦</Text></View>
        <View style={styles.socialIcon}><Text>🍏</Text></View>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.signinText}>
          Have an account? <Text style={styles.signinLink}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pesan" component={PesanScreen} />
        <Stack.Screen name="Daftar" component={DaftarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#222',
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  logoOrange: {
    color: 'orange',
  },
  logoWhite: {
    color: '#fff',
  },
  menu: {
    flexDirection: 'row',
    marginTop: 10,
  },
  menuActive: {
    color: 'orange',
    marginRight: 20,
    fontWeight: 'bold',
  },
  menuItem: {
    color: '#fff',
    marginRight: 20,
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  author: {
    color: 'orange',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
  position: 'absolute',
  top: 40,         // Jarak dari atas layar
  left: 20,        // Jarak dari kiri layar
  backgroundColor: '#eee',
  paddingVertical: 6,
  paddingHorizontal: 16,
  borderRadius: 6,
  zIndex: 1,       // Supaya di atas konten lain
},
  backButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  signupTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputBox: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
  inputPlaceholder: {
    color: '#aaa',
  },
  signupButton: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },
  signinText: {
    textAlign: 'center',
    color: '#666',
  },
  signinLink: {
    color: 'orange',
    fontWeight: 'bold',
  },
});