import React, { useState, useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import FlagPicker from './FlagPicker';

const TextInputWithFlag = ({ onInputChange, onCountryChange, defaultInputValue, defaultSelectedCountry, inputStyle}) => {
  // State to hold the input value
  const [inputValue, setInputValue] = useState(defaultInputValue);
  const [selectedCountry, setSelectedCountry] = useState(defaultSelectedCountry);
  const [currencySymbol, setCurrencySymbol] = useState(getCurrencySymbol(selectedCountry));

  const handleInputChange = (text) => {
    setInputValue(text);
    // Call the parent callback with updated input value
    onInputChange(text);
  };

  const handleCountryChange = (country) => {
    onCountryChange(country);
    setCurrencySymbol(getCurrencySymbol(country));
    console.log()
  };

  function getCurrencySymbol(countryCode) {
    switch (countryCode) {
      case 'IN':
        return '\u20B9'; // Indian Rupee (₹)
      case 'US':
        return '$'; // US Dollar ($)
      case 'GB':
        return '£'; // British Pound (£)
      case 'FR':
        return '€'; // Euro (€)
      case 'CA': 
        return 'C$' 
      case 'AU':
        return 'A$'  
      case 'EU': 
        return '€'    
      default:
        return ''; // Default to empty string for unknown countries
    }
  }

  return (
    <View style = {inputStyle}>
      <TextInput 
        style = {{fontSize:30 }}
        value={currencySymbol}
        keyboardType="numeric" 
      />
      <TextInput 
        style = {{fontSize:30 }}
        value={inputValue.toString()}
        onChangeText={handleInputChange}
        keyboardType="numeric" 
      />
      <FlagPicker onCountryChange={handleCountryChange} defaultSelectedCountry={selectedCountry} />
    </View>
  );
};

export default TextInputWithFlag;