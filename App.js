/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import HeaderImages from './src/components/HeaderImages';
import ProductName from './src/components/ProductName';
import ProductDesc from './src/components/ProductDesc';
import Price from './src/components/Price';
import Delivery from './src/components/Delivery';
import CancelPolity from './src/components/CancellationPolicy';
import RefundPolicy from './src/components/RefundPolicy';
import SimilarProducts from './src/components/SimilarProducts';
import InView from 'react-native-component-inview';

import ButtonOrange from './src/components/Button';

function App () {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isInView, setIsInView] = useState(false);
  const [isVisP,setIsVisP] = useState(false);
  const [isVisCP,setIsVisCP] = useState(false);
  const [isVisRP,setIsVisRP] = useState(false);
  const [isVisSP,setIsVisSP] = useState(false);

  const checkVisible = (isVisible:boolean) => {
    if (isVisible){
      setIsInView(isVisible)
    } else {
      setIsInView(isVisible)
    }
  }

  const checkVisSP = (isVisible:boolean) => {
    if (isVisible){
      setIsVisSP(isVisible)
    } else {
      setIsVisSP(isVisible)
    }
  }

  const checkVisCP = (isVisible:boolean) => {
    if (isVisible){
      setIsVisCP(isVisible)
    } else {
      setIsVisCP(isVisible)
    }
  }

  const checkVisRP = (isVisible:boolean) => {
    if (isVisible){
      setIsVisRP(isVisible)
    } else {
      setIsVisRP(isVisible)
    }
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
          <View>
            <ProductName />
          </View>
        <HeaderImages />
        <View>

          <Price />

          <Text style={styles.head}>Product Description</Text>
          <ProductDesc />

          <InView collapsable={false} onChange={(isVisible) => checkVisible(isVisible)}>
            <ButtonOrange text={'Add to cart'} />
          </InView>

          <Delivery />

          <InView collapsable={false} onChange={(isVisible) => checkVisCP(isVisible)}>
            <Text style={styles.head}>Cancellation Policy</Text>
            <CancelPolity />
          </InView>
          
          <InView collapsable={false} onChange={(isVisible) => checkVisRP(isVisible)}>
            <Text style={styles.head}>Refund Policy</Text>
            <RefundPolicy />
          </InView>
          
          <InView collapsable={false} onChange={(isVisible) => checkVisSP(isVisible)}>
            <Text style={styles.head}>Items bought with this product</Text>
            <SimilarProducts />
          </InView>
          
        </View>
      </ScrollView>

      { !isInView && !isVisSP && !isVisCP && !isVisRP &&
        <View style={{marginTop: -80, backgroundColor: 'white'}}>
          <ButtonOrange text={'Add to cart'} />
        </View>
      }
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  head: {
    fontSize: 18,
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 20,
    marginStart: 20,
    paddingBottom: 5
  },
});

export default App;
