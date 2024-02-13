// ParametreBatiment.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Surface from '../components/ParametreBatiment/Surface';
import Mur from '../components/ParametreBatiment/Mur'; // Replace with your actual file path
import Plafond from '../components/ParametreBatiment/Plafond';
import Plancher from '../components/ParametreBatiment/Plancher';
import FenetreOrientation from '../components/ParametreBatiment/FenetreOrientation';
import FenetreDescription from '../components/ParametreBatiment/FenetreDescription';
import Portes from '../components/ParametreBatiment/Portes';
import Choufage from '../components/ParametreBatiment/Choufage'

export default function ParametreBatimentPart({ control, formState }) {
  return (
    <View>
      <Text style={styles.subtitle}>Surface</Text>
      <Surface control={control} formState={formState} />

      <Text style={styles.subtitle}>Mur</Text>
      <Mur control={control} formState={formState} />

      <Text style={styles.subtitle}>Plafond</Text>
      <Plafond control={control} formState={formState} />

      <Text style={styles.subtitle}>Plancher</Text>
      <Plancher control={control} formState={formState} />

      <Text style={styles.subtitle}>Fenetre Orientation</Text>
      <FenetreOrientation control={control} formState={formState} />

      <Text style={styles.subtitle}>Fenetre Description</Text>
      <FenetreDescription control={control} formState={formState} />


      <Text style={styles.subtitle}>Portes</Text>
      <Portes control={control} formState={formState} />


      <Text style={styles.subtitle}>Chouffage</Text>
      <Choufage control={control} formState={formState} />
       

      
    </View>
  );
}

// You'll need to define styles for subtitles as well
const styles = StyleSheet.create({
    // ... other styles ...
    subtitle: {
      fontSize: 18, // Slightly smaller than your title's 22
      fontWeight: '600', // Less bold than the title's 'bold'
      marginTop: 16,
      marginBottom: 8,
      textAlign: 'left', // or 'center' based on your design
      color: '#333', // A darker shade for high contrast, adjust as needed
      paddingHorizontal: 10, // Depending on your layout, may need adjustment
    },
    // ... other styles ...
  });
  