import React, {useState, useCallback, useEffect} from 'react';
import { StyleSheet, View, FlatList,Text,TouchableOpacity } from 'react-native';
import {getDbOpenConnection, createTable, insertCurrencyConversion} from './database'; // Adjust the path as per your project structure
import { populateCurrencyConversion } from './CurrencyHelper';
import TextInputWithFlag from './TextInputWithFlag';

const CurrentConverter = ({conversionDetails}) => {

  const loadData = useCallback(async () => {
    try {
      const db = await getDbOpenConnection();
      await createTable(db);
    } catch (error) {
      console.log(`In load data error: ${error}`);
    }
  }, []);
 
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState(conversionDetails.amount);
  const [defaultCountry, setDefaultCountry] = useState(conversionDetails.currency);

  useEffect(() => {
    // We want to run once when we come first time on screen to create table
    loadData();
    if(conversionDetails.amount>0){
        const convertedData = populateCurrencyConversion(defaultCountry, conversionDetails.amount);
        setData(convertedData);
    }
  }, []);

  const handleCountryChange = (country) => {
    setDefaultCountry(country)
  }

  const handleInputChange = (text) => {
    setInputValue(text)
  };

  const handleInsert = async () => {
    const db = await getDbOpenConnection();
    try {
      const insertId = await insertCurrencyConversion(db,defaultCountry, inputValue);
      console.log(`Inserted conversion with ID: ${insertId}`);
    } catch (error) {
      console.error('Error inserting conversion:', error);
    }
  };

  const convert = () => {
    const convertedData = populateCurrencyConversion(defaultCountry, inputValue);
    setData(convertedData);
    handleInsert()
  };

  return (
    <View style={styles.container}> 
      <Text style={styles.header}>Currency Converter</Text>
      <TextInputWithFlag
        inputStyle={styles.input}
        onInputChange={handleInputChange} 
        onCountryChange={handleCountryChange}
        defaultInputValue={inputValue}
        defaultSelectedCountry={defaultCountry}
      />
      <TouchableOpacity style={styles.button}  onPress={convert}>
        <Text style={styles.text}>Convert</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.type}</Text>
            <Text style={styles.text}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    marginBottom : 5,
    textAlign: 'center',
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 10,
  },
  input: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#4BCFFA',
    borderRadius: 10, // Adjust this value for roundness
    paddingHorizontal: 20, // Adjust spacing on the left and right sides
    paddingVertical: 10,
    marginHorizontal: 10,

  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#A0D6B4',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontSize: 18,
  }
});

export default CurrentConverter;
