import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-paper';
const App = () => {
  const data = [
    {
      id: 0,
      title: 'Xiaomi Mi True Wireless Earbuds',
      imgURL:
        'https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg',
      price: '₺134,77',
      inStock: true,
    },
    {
      id: 1,
      title: 'General Mobile GM 20',
      imgURL:
        'https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg',
      price: '₺1.810,21',
      inStock: true,
    },
    {
      id: 2,
      title: 'Philips 58PUS8505/62 The One',
      imgURL:
        'https://m.media-amazon.com/images/I/71zLCzJcXaL._AC._SR360,460.jpg',
      price: '₺6.992,25',
      inStock: false,
    },
    {
      id: 3,
      title: 'LG 49UM7100PLB Ultra HD 4K',
      imgURL:
        'https://m.media-amazon.com/images/I/71gAldY8eGL._AC._SR360,460.jpg',
      price: '₺4.614,38',
      inStock: true,
    },
    {
      id: 4,
      title: 'Samsung Galaxy M31 SM-M315F',
      imgURL:
        'https://m.media-amazon.com/images/I/71mUIp9oCXL._AC._SR360,460.jpg',
      price: '₺2.995,80',
      inStock: true,
    },
    {
      id: 5,
      title: 'Apple AirPods Series 2',
      imgURL:
        'https://m.media-amazon.com/images/I/51XanmiXw0L._AC._SR360,460.jpg',
      price: '₺1.299,00',
      inStock: true,
    },
    {
      id: 6,
      title: 'Lenovo Tab M10 Plus',
      imgURL:
        'https://m.media-amazon.com/images/I/81JR-A35D0L._AC._SR360,460.jpg',
      price: '₺2.496,50',
      inStock: false,
    },
    {
      id: 7,
      title: 'Xiaomi Redmi 20000 Mah',
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/41vVdTukkgL._AC_SX522_.jpg',
      price: '₺134,70',
      inStock: false,
    },
    {
      id: 8,
      title: 'Xiaomi Mijia Smart Home 360',
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/31G-rIrW9zL._AC_UL320_SR226,320_.jpg',
      price: '₺269,73',
      inStock: true,
    },
    {
      id: 9,
      title: 'Xiaomi Mi Box S 4K Ultra HD',
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/31sNKUGwNUL._AC_.jpg',
      price: '₺478,53',
      inStock: true,
    },
    {
      id: 10,
      title: 'Haylou Solar LS-5 Smartwatch',
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/51kfZ4W9YSL._AC_SX522_.jpg',
      price: '₺296,00',
      inStock: true,
    },
  ];

  const handleSearch = () => {
    console.log('search');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={styles.header}>PATIKASTORE</Text>
          <View style={styles.searchAreaView}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              onChangeText={queryText => handleSearch(queryText)}
              placeholder="Search"
              style={styles.searchArea}
            />
          </View>
        </View>

        <FlatList
          numColumns={2}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <Image source={{uri: item.imgURL}} style={styles.coverImage} />
              <Text style={styles.itemName}>{item.title}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Text style={styles.itemStock}>
                {item.inStock === true ? '' : 'STOKTA YOK'}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    flex: 0.5,
    margin: 10,
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#EAEAEA',
  },
  itemName: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemPrice: {
    marginTop: 5,
    fontSize: 12,
    color: '#B2B2B2',
  },
  itemStock: {
    marginTop: 5,
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
  },
  searchArea: {
    margin: 15,
    height: 45,
  },
  header: {
    color: '#5C2E7E',
    fontSize: 40,
    margin: 5,
  },
  searchAreaView: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  coverImage: {
    height: 150,
    borderRadius: 8,
  },
});

export default App;
