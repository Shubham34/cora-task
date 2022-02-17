import React,{useState,useEffect} from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
const medImgOne = require('../images/med-1.png');
const medImgTwo = require('../images/med-2.jpeg');
const medImgThree = require('../images/med-3.jpg');
const medImgFour = require('../images/med-4.jpeg');

export default function Index () {

  const imgs = [
    {
      url: medImgOne,
      name: 'Product name one',
      mrp: ' 98 Rs ',
      price: '80 Rs ',
      off: ' 20% off '
    },
    {
      url: medImgTwo,
      name: 'Product name two',
      mrp: ' 128 Rs ',
      price: '100 Rs ',
      off: ' 20% off '
    },
    {
      url: medImgThree,
      name: 'Product name three',
      mrp: ' 248 Rs ',
      price: '200 Rs ',
      off: ' 20% off '
    },
    {
      url: medImgFour,
      name: 'Product name four',
      mrp: ' 18 Rs ',
      price: '12 Rs ',
      off: ' 20% off '
    },
  ];

  const [imgdef,setImgDef] = useState(medImgOne);

  return (
    <View style={styles.mainContent}>
      <FlatList
        data={imgs}
        horizontal={true}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity onPress={() => {setImgDef(item.url)}}>
              <View style={styles.mainProductContent}>
                <Image source={item.url} style={styles.miniImages} />
                <Text>
                  {item.name}
                </Text>
                <Text style={styles.priceMrp}>
                  MRP  
                  <Text style={styles.priceMrpCut}> {item.mrp} </Text>
                  <Text style={styles.greenDiscountPercent}>
                      {item.off}
                  </Text>
                </Text>
                <Text style={styles.priceDisc}>
                  {item.price}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent:{
    backgroundColor: 'white',
    marginTop: 20
  },
  mainProductContent: {
    margin: 10
  },  
  mainImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 10
  },
  miniImages: {
    width: 200,
    height: 200,
    margin: 5
  },
  priceMrp: {
   fontSize: 10,
   marginTop: 5
  },
  priceMrpCut:{
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize: 10,
    textAlignVertical: "center"
  },
  priceDisc: {
    color: 'green'
  },
  greenDiscountPercent: {
    color: 'green'
  }
})