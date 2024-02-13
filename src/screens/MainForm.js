// screens/MainForm.js
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import GestionPart from '../components/GestionPart';
import ParametreBatimentPart from '../components/ParametreBatimentPart';
import { useForm } from 'react-hook-form';

export default function MainForm() {
  // Initialize useForm hook here
  const { control, handleSubmit, formState } = useForm();
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.title}>Gestion</Text>
            <GestionPart control={control} handleSubmit={handleSubmit} formState={formState} />
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Parametre du Batiment</Text>
            <ParametreBatimentPart control={control} formState={formState} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});
