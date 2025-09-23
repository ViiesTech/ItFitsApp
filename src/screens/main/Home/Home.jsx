/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import Container from '../../../components/Container';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import { AppImages } from '../../../assets/images';
import AppText from '../../../components/AppText';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import SVGXml from './../../../components/SVGXML';
import { AppIcons } from '../../../assets/icons';
import LineBreak from '../../../components/LineBreak';
import AppTextInput from '../../../components/AppTextInput';
import ProductCard from '../../../components/ProductCard';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { id: 1, title: 'Hoodies', src: AppImages.hoddie },
  { id: 2, title: 'Shorts', src: AppImages.short },
  { id: 3, title: 'Shoes', src: AppImages.shoe },
  { id: 4, title: 'Bag', src: AppImages.bag },
  { id: 5, title: 'Accessories', src: AppImages.accessories },
];

const topSell = [
  {
    id: 1,
    title: 'Mens Harrington Jacket',
    price: '$148.00',
    src: AppImages.top_sell_two,
  },
  {
    id: 2,
    title: 'Mens Harrington Jacket',
    price: '$55.00',
    offPrice: '$100.97',
    src: AppImages.top_sell_one,
  },
  {
    id: 3,
    title: 'Mens Harrington Jacket',
    price: '$148.00',
    src: AppImages.top_sell_two,
  },
];

const Home = () => {
  const nav = useNavigation();
  const [addFav, setAddFav] = useState([]);
  const [addFavTopSell, setAddFavTopSell] = useState([]);

  const toggleFavorite = (id: number) => {
    if (addFav.includes(id)) {
      // remove if already in favorites
      setAddFav(addFav.filter(favId => favId !== id));
    } else {
      // add if not in favorites
      setAddFav([...addFav, id]);
    }
  };

  const topSellToggleFavorite = (id: number) => {
    if (addFavTopSell.includes(id)) {
      // remove if already in favorites
      setAddFavTopSell(addFavTopSell.filter(favId => favId !== id));
    } else {
      // add if not in favorites
      setAddFavTopSell([...addFavTopSell, id]);
    }
  };

  return (
    <Container style={{ paddingHorizontal: responsiveWidth(4) }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          source={AppImages.image}
          style={{
            width: responsiveHeight(5.5),
            height: responsiveHeight(5.5),
            borderRadius: 100,
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: AppColors.lightGray,
            paddingHorizontal: responsiveWidth(4),
            paddingVertical: responsiveHeight(1),
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 100,
            gap: 5,
          }}
        >
          <AppText title={'Men'} textColor={AppColors.BLACK} textSize={1.8} />
          <Entypo
            name="chevron-down"
            size={responsiveFontSize(3)}
            color={AppColors.GRAY}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: AppColors.lightBlue,
            width: responsiveHeight(5.5),
            height: responsiveHeight(5.5),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}
        >
          <SVGXml icon={AppIcons.bag} width={20} height={20} />
        </TouchableOpacity>
      </View>

      <LineBreak space={2} />

      <TouchableOpacity onPress={() => nav.navigate('Search')}>
        <AppTextInput
          inputPlaceHolder={'Search'}
          borderBottomWidth={1}
          editable={false}
          placeholderTextColor={AppColors.BLACK}
          logo={
            <Feather
              name="search"
              size={responsiveFontSize(3)}
              color={AppColors.GRAY}
            />
          }
        />
      </TouchableOpacity>
      <LineBreak space={1} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <AppText
          title={'Categories'}
          textColor={AppColors.BLACK}
          textSize={1.8}
          textFontWeight
        />
        <TouchableOpacity onPress={() => nav.navigate('ShopCategories')}>
          <AppText
            title={'See All'}
            textColor={AppColors.GRAY}
            textSize={1.8}
          />
        </TouchableOpacity>
      </View>

      <LineBreak space={2} />

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: responsiveWidth(5) }}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Image
              source={item.src}
              style={{
                width: responsiveHeight(6.5),
                height: responsiveHeight(6.5),
                borderWidth: item.id == 1 ? 1 : 0,
                borderRadius: 100,
              }}
            />
            <LineBreak space={1} />
            <AppText
              title={item.title}
              textColor={AppColors.BLACK}
              textSize={1.6}
            />
          </TouchableOpacity>
        )}
      />

      <LineBreak space={3} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <AppText
          title={'Top Selling'}
          textColor={AppColors.BLACK}
          textSize={1.8}
          textFontWeight
        />
        <TouchableOpacity>
          <AppText
            title={'See All'}
            textColor={AppColors.GRAY}
            textSize={1.8}
          />
        </TouchableOpacity>
      </View>

      <LineBreak space={2} />

      <FlatList
        data={topSell}
        horizontal
        contentContainerStyle={{ gap: responsiveWidth(3) }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            price={item.price}
            imageSrc={item.src}
            offPrice={item.offPrice}
            cardOnPress={() => nav.navigate('HomeDetails')}
            addFavOnPress={() => topSellToggleFavorite(item.id)}
            isFav={addFavTopSell?.includes(item.id)}
          />
        )}
      />

      <LineBreak space={3} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <AppText
          title={'New In'}
          textColor={AppColors.lightBlue}
          textSize={1.8}
          textFontWeight
        />
        <TouchableOpacity>
          <AppText
            title={'See All'}
            textColor={AppColors.GRAY}
            textSize={1.8}
          />
        </TouchableOpacity>
      </View>

      <LineBreak space={2} />

      <FlatList
        data={topSell}
        horizontal
        contentContainerStyle={{ gap: responsiveWidth(3) }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            price={item.price}
            imageSrc={item.src}
            offPrice={item.offPrice}
            cardOnPress={() => nav.navigate('HomeDetails')}
            addFavOnPress={() => toggleFavorite(item.id)}
            isFav={addFav?.includes(item.id)}
          />
        )}
      />
    </Container>
  );
};

export default Home;
