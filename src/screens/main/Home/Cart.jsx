/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import Container from '../../../components/Container';
import AuthHeader from '../../../components/AuthHeader';
import { AppColors, responsiveFontSize, responsiveWidth } from '../../../utils';
import LineBreak from '../../../components/LineBreak';
import TopTabBar from '../../../components/TopTabBar';
import { AppImages } from '../../../assets/images';
import MyCartCard from '../../../components/MyCartCard';
import { useNavigation } from '@react-navigation/native';
import AppButton from '../../../components/AppButton';
import Octicons from 'react-native-vector-icons/Octicons';

const data = [
  {
    id: 1,
    image: AppImages.image,
    name: 'Panic Beg x 1',
    size: 'L',
    color: 'Brown',
    price: '$230',
  },
  {
    id: 2,
    image: AppImages.image,
    name: 'Panic Beg x 1',
    size: 'L',
    color: 'Brown',
    price: '$230',
  },
];

const Cart = () => {
  const [selectedTab, setSelectedTab] = useState('my_cart');
  const nav = useNavigation();

  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Cart'}
          isChange={true}
          centerTextFontBold={true}
        />
      </View>

      <LineBreak space={2} />

      <TopTabBar
        tab1OnPress={() => setSelectedTab('my_cart')}
        tab2OnPress={() => setSelectedTab('whitelist')}
        selectedTab={selectedTab}
      />

      <LineBreak space={2} />

      {selectedTab === 'my_cart' && (
        <FlatList
          data={data}
          contentContainerStyle={{ paddingHorizontal: responsiveWidth(4) }}
          renderItem={({ item }) => (
            <MyCartCard item={item} buttonOnPress={() => {}} />
          )}
        />
      )}

      {selectedTab === 'whitelist' && (
        <FlatList
          data={data}
          contentContainerStyle={{ paddingHorizontal: responsiveWidth(4) }}
          renderItem={({ item }) => (
            <MyCartCard
              item={item}
              buttonOnPress={() => nav.navigate('OrderDetail')}
              whitelist={'whitelist'}
            />
          )}
        />
      )}

      <LineBreak space={2} />

      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AppButton
          title={'CHECKOUT • $460'}
          textSize={2}
          handlePress={() => nav.navigate('OrderDetail')}
          btn_bg={AppImages.btn_bg}
          textColor={AppColors.WHITE}
          leftIcon={<View />}
          rightIcon={
            <Octicons
              name={'arrow-right'}
              size={responsiveFontSize(3)}
              color={AppColors.WHITE}
            />
          }
        />
      </View>
    </Container>
  );
};

export default Cart;
