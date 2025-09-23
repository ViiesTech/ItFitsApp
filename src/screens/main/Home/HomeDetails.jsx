/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';
import Container from '../../../components/Container';
import AuthHeader from '../../../components/AuthHeader';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import SVGXml from '../../../components/SVGXML';
import { AppIcons } from '../../../assets/icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AppImages } from '../../../assets/images';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppText';
import DropdownCard from '../../../components/DropdownCard';
import QuantityCard from '../../../components/QuantityCard';
import ReviewCard from '../../../components/ReviewCard';
import AppButton from '../../../components/AppButton';
import { useNavigation } from '@react-navigation/native';
import ProductModal from '../../../components/ProductModal';

const productImages = [
  { id: 1, src: AppImages.product_one },
  { id: 2, src: AppImages.product_two },
  { id: 3, src: AppImages.product_one },
  { id: 4, src: AppImages.product_two },
];

const HomeDetails = () => {
  const nav = useNavigation();
  const [isVisibleSizeModal, setIsVisibleSizeModal] = useState(false);
  const [isVisibleColorModal, setIsVisibleColorModal] = useState(false);
  const [isAddFav, setIsAddFav] = useState(false);
  const [selectedSize, setSelectedSize] = useState({ id: 1 });
  const [selectedColor, setSelectedColor] = useState({ id: 1 });

  return (
    <Container style={{ paddingHorizontal: responsiveWidth(4) }}>
      <AuthHeader
        centerText={'Product'}
        isChange={true}
        centerTextFontBold={true}
        rightIcon={
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                backgroundColor: AppColors.cardColor,
                width: responsiveHeight(5.5),
                height: responsiveHeight(5.5),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}
              onPress={() => setIsAddFav(!isAddFav)}
            >
              <FontAwesome
                name={isAddFav ? 'heart' : 'heart-o'}
                size={responsiveFontSize(2.5)}
                color={isAddFav ? AppColors.red : AppColors.BLACK}
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
        }
      />

      <ProductModal
        title={'Size'}
        visible={isVisibleSizeModal}
        setVisible={setIsVisibleSizeModal}
        data={[
          { id: 1, title: 'S' },
          { id: 2, title: 'M' },
          { id: 3, title: 'L' },
          { id: 4, title: 'XL' },
          { id: 5, title: '2XL' },
        ]}
        selected={selectedSize}
        setSelected={setSelectedSize}
      />

      <ProductModal
        title={'Color'}
        visible={isVisibleColorModal}
        setVisible={setIsVisibleColorModal}
        data={[
          { id: 1, title: 'Orange', color: 'orange' },
          { id: 2, title: 'Black', color: 'black' },
          { id: 3, title: 'Red', color: 'red' },
          { id: 4, title: 'Yellow', color: 'yellow' },
          { id: 5, title: 'Blue', color: 'blue' },
        ]}
        isColorModal={true}
        selected={selectedColor}
        setSelected={setSelectedColor}
      />

      <FlatList
        data={productImages}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Image
              source={item.src}
              style={{
                width: responsiveWidth(45),
                height: responsiveHeight(30),
              }}
              resizeMode="contain"
            />
          </View>
        )}
      />

      <LineBreak space={1} />
      <AppText
        title={'Mens Harrington Jacket'}
        textColor={AppColors.BLACK}
        textSize={1.8}
      />
      <LineBreak space={1} />
      <AppText
        title={'$148'}
        textColor={AppColors.lightBlue}
        textSize={1.8}
        textFontWeight
      />

      <LineBreak space={2} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <DropdownCard
          title={'Size'}
          cardOnPress={() => setIsVisibleSizeModal(true)}
          centerContent={
            <AppText
              title={'S'}
              textColor={AppColors.BLACK}
              textSize={1.8}
              textFontWeight
            />
          }
        />
        <DropdownCard
          title={'Color'}
          cardOnPress={() => setIsVisibleColorModal(true)}
          centerContent={
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: AppColors.DARKGRAY,
                borderRadius: 100,
              }}
            />
          }
        />
      </View>
      <LineBreak space={2} />

      <QuantityCard />

      <LineBreak space={2} />

      <TouchableOpacity
        style={{
          backgroundColor: AppColors.lightestBlue,
          paddingVertical: responsiveHeight(2),
          paddingHorizontal: responsiveWidth(4),
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: AppColors.lightBlue,
        }}
        onPress={() => nav.navigate('TryOutFit')}
      >
        <AppText
          title={'Try Outfit'}
          textColor={AppColors.lightBlue}
          textSize={1.8}
          textFontWeight
        />
        <SVGXml icon={AppIcons.question_mark} width={25} height={25} />
      </TouchableOpacity>

      <LineBreak space={2} />

      <AppText
        title={
          '$Built for life and made to last, this full-zip corduroy jacket is part of our Nike Life collection. The spacious fit gives you plenty of room to layer underneath, while the soft corduroy keeps it casual and timeless.'
        }
        textColor={AppColors.GRAY}
        textSize={1.8}
      />

      <LineBreak space={3} />

      <AppText
        title={'Shipping & Returns'}
        textColor={AppColors.BLACK}
        textSize={2}
        textFontWeight
      />
      <LineBreak space={2} />

      <AppText
        title={'Free standard shipping and free 60-day returns'}
        textColor={AppColors.GRAY}
        textSize={1.8}
      />

      <LineBreak space={3} />

      <AppText title={'Reviews'} textColor={AppColors.BLACK} textSize={2} />
      <LineBreak space={2} />

      <AppText
        title={'4.5 Ratings'}
        textColor={AppColors.BLACK}
        textSize={2.4}
        textFontWeight
      />

      <LineBreak space={2} />

      <AppText
        title={'213 Reviews'}
        textColor={AppColors.GRAY}
        textSize={1.8}
      />

      <LineBreak space={2} />

      <ReviewCard />
      <LineBreak space={2} />
      <ReviewCard />

      <LineBreak space={2} />

      <AppButton
        btn_bg={AppImages.btn_bg}
        title={'$148'}
        handlePress={() => nav.navigate('Cart')}
        textFontWeight={true}
        rightIcon={
          <AppText
            title={'Add to Cart'}
            textColor={AppColors.WHITE}
            textSize={2}
          />
        }
      />

      <LineBreak space={2} />
    </Container>
  );
};

export default HomeDetails;
