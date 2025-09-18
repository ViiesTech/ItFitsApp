import React from 'react';
import { View } from 'react-native';
import Container from '../../components/Container';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import AuthHeader from '../../components/AuthHeader';
import LineBreak from '../../components/LineBreak';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import { useNavigation } from '@react-navigation/native';
import { AppImages } from '../../assets/images';
import Octicons from 'react-native-vector-icons/Octicons';

const ForgotPassword = () => {
  const nav = useNavigation();

  return (
    <Container
      style={{
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1),
      }}
    >
      <AuthHeader title={'Forgot your'} subTitle={'Password'} />
      <LineBreak space={5} />
      <AppTextInput
        inputPlaceHolder={'Linhjohns@gmail.com'}
        borderBottomWidth={1}
        label={'Email Address or Phone Number'}
      />
      <LineBreak space={5} />
      <AppButton
        title={'Send Code'}
        textSize={2}
        handlePress={() => nav.navigate('EmailVerification')}
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
    </Container>
  );
};

export default ForgotPassword;
