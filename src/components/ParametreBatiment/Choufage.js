// src/components/GestionPart.js
import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import { TextInput, Button, Menu, Provider } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

const Choufage = ({ control, handleSubmit, formState: { errors } })=> {
 return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nature de l'installation"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.natureInstallation}
          />
        )}
        name="natureInstallation"
      />
      {errors.natureInstallation && <Text>This field is required.</Text>}


      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nembre d'installation identique pour les meubles complets"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.NembreInstallationIdentiq}
          />
        )}
        name="NembreInstallationIdentiq"
      />
      {errors.NembreInstallationIdentiq && <Text>This field is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Equipement d'interuitance"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.equipementInteruitance}
          />
        )}
        name="equipementInteruitance"
      />
      {errors.equipementInteruitance && <Text>This field is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Generateur"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.generateur}
          />
        )}
        name="generateur"
      />
      {errors.generateur && <Text>This field is required.</Text>}


      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Annee d'installation du generateur"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.anneeInstallationGenerateur}
          />
        )}
        name="anneeInstallationGenerateur"
      />
      {errors.anneeInstallationGenerateur && <Text>This field is required.</Text>}
    </View>
  );
};
export default Choufage;

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
  
  