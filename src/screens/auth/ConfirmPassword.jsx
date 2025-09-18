import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Container from '../../components/Container';
import AuthHeader from '../../components/AuthHeader';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import LineBreak from '../../components/LineBreak';
import AppTextInput from '../../components/AppTextInput';
import { useNavigation } from '@react-navigation/native';
import { AppImages } from '../../assets/images';
import AppButton from '../../components/AppButton';
import Octicons from 'react-native-vector-icons/Octicons';
import AppText from '../../components/AppText';

const ConfirmPassword = () => {
  const nav = useNavigation();
  return (
    <Container
      style={{
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1),
      }}
    >
      <AuthHeader title={'Confirm your'} subTitle={'Password'} />
      <LineBreak space={5} />
      <AppTextInput
        inputPlaceHolder={'*********'}
        borderBottomWidth={1}
        label={'Password'}
      />
      <LineBreak space={1} />

      <TouchableOpacity
        style={{ paddingHorizontal: responsiveWidth(2) }}
        onPress={() => nav.navigate('ForgotPassword')}
      >
        <AppText
          title={'Forgot password'}
          textColor={AppColors.red}
          textSize={1.6}
          textFontWeight
        />
      </TouchableOpacity>

      <LineBreak space={5} />
      <AppButton
        title={'CONTINUE'}
        textSize={2}
        handlePress={() => nav.navigate('FillYourDetails')}
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

export default ConfirmPassword;
