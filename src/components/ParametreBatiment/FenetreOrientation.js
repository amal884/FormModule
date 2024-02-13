// src/components/GestionPart.js
import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import { TextInput, Button, Menu, Provider } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

export default function FenetreOrientation({ control, handleSubmit, formState: { errors } }) {

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Surface de la fenetre"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.surfaceFenetre}
          />
        )}
        name="surfaceFenetre"
      />
      {errors.surfaceFenetre && <Text>This field is required.</Text>}


      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Pont Thermique (m)"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.pontThermique}
          />
        )}
        name="pontThermique"
      />
      {errors.pontThermique && <Text>This field is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Surface Mur Moins Fenetre"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.surfaceMurMoinsFenetre}
          />
        )}
        name="surfaceMurMoinsFenetre"
      />
      {errors.surfaceMurMoinsFenetre && <Text>This field is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Unclinaison de la fenetre"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.unclinaisonFenetre}
          />
        )}
        name="unclinaisonFenetre"
      />
      {errors.unclinaisonFenetre && <Text>This field is required.</Text>}


      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Orientation de la fenetre"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.orientationFenetre}
          />
        )}
        name="orientationFenetre"
      />
      {errors.orientationFenetre && <Text>This field is required.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginBottom: 10,
    },
  });
  
  