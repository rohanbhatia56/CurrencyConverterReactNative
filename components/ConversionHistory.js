// HomeScreen.js
import React, {useState, useCallback, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import {getDbOpenConnection, getCurrencyHistory} from './database'; // Adjust the path as per your project structure
const getDatafromDB = async () => {
    const db = await getDbOpenConnection();
    return await getCurrencyHistory(db);
};

export default function ConversionHistory({ onSelected }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("history componet mounted")
        getDatafromDB().then(res => {
            console.log("history componet data featch from db")
            res.forEach((transaction, index) => {
                transaction.prop = index;
            });
            setData(res)
        });
    },[]);  
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onSelected(item.amount,item.currency) }>
                <View style={styles.item}>
                    <Text style={styles.text}>{item.amount}</Text>
                    <CountryFlag isoCode={item.currency} size={20} />
                </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  }
});
