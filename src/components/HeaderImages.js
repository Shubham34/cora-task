import React,{useState,useEffect} from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
const medImgOne = require('../images/med-1.png');
const medImgTwo = require('../images/med-2.jpeg');
const medImgThree = require('../images/med-3.jpg');
const medImgFour = require('../images/med-4.jpeg');

export default function Index () {

  const imgs = [
    {url: medImgOne},
    {url: medImgTwo},
    {url: medImgThree},
    {url: medImgFour},
  ];

  const [imgdef,setImgDef] = useState(medImgOne);

  return (
    <View>
      <Image source={imgdef} style={styles.mainImage} />
      <FlatList
        data={imgs}
        horizontal={true}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity onPress={() => {setImgDef(item.url)}}>
              <Image source={item.url} style={styles.miniImages} />
            </TouchableOpacity>
          </View>
        )}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  mainImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 10
  },
  miniImages: {
    width: 50,
    height: 50,
    margin: 5
  }
})