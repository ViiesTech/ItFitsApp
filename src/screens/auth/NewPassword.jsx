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
import { AppImages } from '../../assets/images';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

const NewPassword = () => {
  const nav = useNavigation();

  return (
    <Container
      style={{
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1),
      }}
    >
      <AuthHeader title={'Enter your'} subTitle={'Password'} />
      <LineBreak space={5} />
      <View>
        <AppTextInput
          inputPlaceHolder={'*********'}
          borderBottomWidth={1}
          label={'New Password'}
        />
        <LineBreak space={2} />
        <AppTextInput
          inputPlaceHolder={'*********'}
          borderBottomWidth={1}
          label={'Confirm New Password'}
        />
      </View>
      <LineBreak space={3} />
      <AppButton
        title={'Confirm New Password'}
        textSize={2}
        handlePress={() => nav.navigate('EnterEmail')}
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

export default NewPassword;
