// src/components/GestionPart.js
import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import { TextInput, Button, Menu, Provider } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import RNPickerSelect from 'react-native-picker-select';

export default function GestionPart({ control, handleSubmit, formState: { errors } }) {
  const getCurrentYear = () => new Date().getFullYear();
  // Generate an array of years from the current year to 60 years back
const generateYearOptions = () => {
  const currentYear = getCurrentYear();
  const years = [];
  for (let year = currentYear; year >= currentYear - 60; year--) {
    years.push({ label: `${year}`, value: year });
  }
  return years;
};

const yearOptions = generateYearOptions();

  const onSubmit = data=> console.log(data);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Adresse"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.adresse}
          />
        )}
        name="adresse"
      />
      {errors.adresse && <Text>This field is required.</Text>}
                       {/* Altitude */}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Altitude"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.altitude}
          />
        )}
        name="altitude"
      />
      {errors.altitude && <Text>This field is required.</Text>}

                                   {/* Departement */}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Departement"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.departement}
          />
        )}
        name="departement"
      />
      {errors.departement && <Text>This field is required.</Text>} 

                                   {/* Type d'habitation */}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Type d'habitation"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.departement}
          />
        )}
        name="habitation"
      />
      {errors.habitation && <Text>This field is required.</Text>}  
    
      {/* Assuming departement is fetched and set outside the form for simplicity */}
      {/* <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { value } }) => (
          <TextInput
            label="Département"
            mode="outlined"
            value={value}
            style={styles.input}
            disabled // This field will be automatically filled
          />
        )}
        name="departement"
      /> */}
      

<Controller
        control={control}
        name="typeDossier"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
            <View style={[styles.input, { justifyContent: 'center' }]}>
  <RNPickerSelect
    onValueChange={onChange}
    items={[
      { label: 'Vente', value: 'Vente' },
      { label: 'Location', value: 'Location' },
      { label: 'Neuf', value: 'Neuf' },
    ]}
    style={{
      ...pickerSelectStyles,
      inputIOS: {
        ...pickerSelectStyles.inputIOS,
        marginTop: 8, // Adjust if necessary to vertically center
      },
      inputAndroid: {
        ...pickerSelectStyles.inputAndroid,
        marginTop: 8, // Adjust if necessary to vertically center
      },
      iconContainer: {
        top: '50%',
        right: 12,
        transform: [{ translateY: -10 }], // Adjust based on actual icon size
      },
    }}
    value={value}
    useNativeAndroidPickerStyle={false}
    placeholder={{ label: 'Type de dossier', value: null }}
  />
</View>
        )}
      />
     {errors.typeDossier && <Text style={styles.errorText}>This field is required.</Text>}


     <Controller
        control={control}
        name="anneeConstruction"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.input}>
            <RNPickerSelect
              onValueChange={onChange}
              items={yearOptions}
              style={pickerSelectStyles}
              value={value}
              useNativeAndroidPickerStyle={false} // Use this to customize the picker style on Android
              placeholder={{ label: 'Annee de Construction', value: null }}
            />
          </View>
        )}
      />
      {errors.anneeConstruction && <Text style={styles.errorText}>This field is required.</Text>}
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
  
  // Customize the appearance of the picker
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 1,
      color: 'black',
      paddingRight: 30, // To ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      marginBottom: 10,
      borderWidth: 4,
      borderWidth: 0.5,
      padding: 10,
      borderColor: 'gray',
      borderRadius: 3,
      color: 'black',
      // To ensure the text is never behind the icon
    },
  });