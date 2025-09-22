/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import Container from '../../../components/Container';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import AuthHeader from '../../../components/AuthHeader';
import Feather from 'react-native-vector-icons/Feather';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppText';
import AppTextInput from '../../../components/AppTextInput';

const PersonalInformation = () => {
  return (
    <Container style={{ paddingHorizontal: responsiveWidth(4) }}>
      <AuthHeader
        centerText={'Personal Info'}
        isChange={true}
        centerTextFontBold={true}
      />
      <LineBreak space={1} />
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: AppColors.GREEN,
            width: 70,
            height: 70,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Feather
            name={'user'}
            size={responsiveFontSize(4.5)}
            color={AppColors.WHITE}
          />
        </View>
        <LineBreak space={1} />
        <AppText
          title={'Hi, Emelia'}
          textColor={AppColors.GRAY}
          textSize={2}
          textAlignment={'center'}
        />
      </View>
      <LineBreak space={5} />
      <View
        style={{
          flexDirection: 'row',
          gap: responsiveWidth(2),
          alignItems: 'center',
        }}
      >
        <AppTextInput
          label={'First Name'}
          borderBottomWidth={1}
          borderBottomColor={AppColors.GRAY}
          placeholderTextfontWeight={'bold'}
          inputWidth={42}
          inputPlaceHolder={'Emelia'}
        />
        <AppTextInput
          label={'Last Name'}
          borderBottomWidth={1}
          borderBottomColor={AppColors.GRAY}
          placeholderTextfontWeight={'bold'}
          inputWidth={42}
          inputPlaceHolder={'Johns'}
        />
      </View>

      <LineBreak space={2} />

      <View style={{ gap: responsiveHeight(2) }}>
        <AppTextInput
          label={'Birthday'}
          borderBottomWidth={1}
          borderBottomColor={AppColors.GRAY}
          placeholderTextfontWeight={'bold'}
          inputPlaceHolder={'04-24-2021'}
        />
        <AppTextInput
          label={'Phone'}
          borderBottomWidth={1}
          borderBottomColor={AppColors.GRAY}
          placeholderTextfontWeight={'bold'}
          inputPlaceHolder={'(513) 360-2196'}
        />
        <AppTextInput
          label={'Address 1'}
          borderBottomWidth={1}
          borderBottomColor={AppColors.GRAY}
          placeholderTextfontWeight={'bold'}
          inputPlaceHolder={'135 Osoha Drive'}
        />
        <AppTextInput
          label={'Address 2'}
          borderBottomWidth={1}
          borderBottomColor={AppColors.GRAY}
          placeholderTextfontWeight={'bold'}
          inputPlaceHolder={'1577 Honem Plaza'}
        />
        <AppTextInput
          label={'City'}
          borderBottomWidth={1}
          borderBottomColor={AppColors.GRAY}
          placeholderTextfontWeight={'bold'}
          inputPlaceHolder={'Daveru'}
        />
      </View>
    </Container>
  );
};

export default PersonalInformation;
