/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import Container from '../../../components/Container';
import AuthHeader from '../../../components/AuthHeader';
import { AppColors, responsiveHeight, responsiveWidth } from '../../../utils';
import AppText from '../../../components/AppText';
import LineBreak from '../../../components/LineBreak';
import { AppImages } from '../../../assets/images';
import StarRating from 'react-native-star-rating-widget';
import AppTextInput from '../../../components/AppTextInput';
import AppButton from '../../../components/AppButton';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: 1, title: 'Beatiful' },
  { id: 2, title: 'Love it !!!' },
  { id: 3, title: '😍😍😍' },
  { id: 4, title: 'Fast Delivery' },
];

const Rating = () => {
  const [rating, setRating] = useState(0);
  const nav = useNavigation();

  return (
    <Container>
      <LineBreak space={1} />
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader centerText={''} isChange={true} centerTextFontBold={true} />
      </View>
      <AppText
        title={'Rating'}
        textColor={AppColors.BLACK}
        textSize={5}
        textFontWeight
        textAlignment={'center'}
      />
      <AppText
        title={'Pink Dress'}
        textColor={AppColors.GRAY}
        textSize={2}
        textAlignment={'center'}
      />
      <LineBreak space={1} />
      <Image source={AppImages.watch} style={{ alignSelf: 'center' }} />
      <LineBreak space={2} />
      <View style={{ alignItems: 'center' }}>
        <StarRating rating={rating} onChange={setRating} />
      </View>
      <LineBreak space={2} />
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: responsiveWidth(5),
          gap: responsiveWidth(5),
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              paddingHorizontal: responsiveWidth(5),
              paddingVertical: responsiveHeight(1),
              borderRadius: 10,
              backgroundColor: '#EEEDE7',
            }}
          >
            <AppText
              title={item.title}
              textColor={AppColors.BLACK}
              textSize={2}
            />
          </TouchableOpacity>
        )}
      />
      <LineBreak space={3} />

      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AppTextInput
          borderBottomWidth={1}
          inputPlaceHolder={'Comment rating'}
          borderBottomColor={AppColors.GRAY}
          placeholderTextColor={AppColors.GRAY}
        />
        <LineBreak space={2} />
        <AppButton
          title={'Submit'}
          textSize={2}
          handlePress={() => nav.navigate('Main')}
          btn_bg={AppImages.btn_bg}
          textColor={AppColors.WHITE}
          justifyContent={'center'}
        />
      </View>
    </Container>
  );
};

export default Rating;
