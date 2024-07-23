import React, { useState, useRef} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import RNPickerSelect from 'react-native-picker-select';

const countryFlags = [
  { label: 'India', value: 'IN' },
  { label: 'United States', value: 'US' },
  { label: 'Canada', value: 'CA' },
  { label: 'United Kingdom', value: 'GB' },
  { label: 'Europe', value: 'EU' },
  { label: 'Australia', value: 'AU' },
];


const FlagPicker = ({ onCountryChange,defaultSelectedCountry }) => {
const [selectedCountry, setSelectedCountry] = useState(defaultSelectedCountry);
const pickerRef = useRef(null);

const handleCountryChange = (value) => {
  setSelectedCountry(value);
  onCountryChange(value)
};

  const [pickerVisible, setPickerVisible] = useState(false);

  const togglePicker = () => {
    setPickerVisible(!pickerVisible); // Toggle picker visibility
  };
  return (
    <View style={styles.container}>
      <CountryFlag isoCode={selectedCountry} style={styles.flag} />
        <RNPickerSelect
          ref={pickerRef}
          onValueChange={handleCountryChange}
          items={countryFlags.map(country => ({ label: country.label, value: country.value }))}
          value={selectedCountry}
          style={pickerSelectStyles}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {
    width: 50,
    height: 30,
    marginRight: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginBottom: 20,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    marginBottom: 20,
  },
});

export default FlagPicker;
