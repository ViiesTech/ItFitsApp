/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ImageBackground } from 'react-native';
import { AppImages } from './../../assets/images/index';
import LineBreak from '../../components/LineBreak';
import AppText from '../../components/AppText';
import { AppColors } from '../../utils';
import AppButton from '../../components/AppButton';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const nav = useNavigation();
  return (
    <ImageBackground
      source={AppImages.splash_bg}
      style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
    >
      <AppText
        title={'IT FITS'}
        textSize={4.5}
        textColor={AppColors.WHITE}
        textFontWeight
      />
      <AppText
        title={'Adding Moments of Styles'}
        textSize={2}
        textColor={AppColors.WHITE}
      />
      <LineBreak space={5} />
      <AppButton
        title={'Lets start'}
        bgColor={AppColors.GREEN}
        btnWidth={40}
        justifyContent="center"
        textFontWeight={false}
        elevation={4}
        handlePress={() => nav.navigate('OnBoarding')}
      />
      <LineBreak space={12} />
    </ImageBackground>
  );
};

export default Splash;
