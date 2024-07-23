import React,{useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar,View, Text, TouchableOpacity } from 'react-native';
import ConversionHistory from './components/ConversionHistory';
import CurrentConverter from './components/CurrencyConverter';
const App = () => {
  const [showConversion, setShowConversion] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [conversionDetails, setConversionDetails] = useState({ amount: 0.0, currency: 'IN' });

  const handlePress = (text) => {
    switch(text){
      case 'Conversion': { 
        setShowConversion(true)
        setShowHistory(false)
          return
      }
      case 'History': {
        setShowConversion(false)
        setShowHistory(true)
         return
      }
    }
  };

  const handleItemSelectionFromHistory = (amount,currency) => {
    setConversionDetails({ amount: amount, currency: currency })
    setShowConversion(true)
    setShowHistory(false)
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
   
      {showConversion && (
        <CurrentConverter conversionDetails={conversionDetails}/>
      )}

      {showHistory && (
        <ConversionHistory onSelected={handleItemSelectionFromHistory}/>
      )}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => handlePress('Conversion')}>
          <Text style={styles.footerText}>Conversion</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('History')}>
          <Text style={styles.footerText}>History</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#c8e6c9',
  },
  footerText: {
    fontSize: 18,
    color: '#000',
  },
});

export default App;
