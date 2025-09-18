import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from '../../components/Container';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import AuthHeader from '../../components/AuthHeader';
import LineBreak from '../../components/LineBreak';
import CodeInput from '../../components/CodeField';
import AppButton from '../../components/AppButton';
import { AppImages } from '../../assets/images';
import Octicons from 'react-native-vector-icons/Octicons';
import AppText from '../../components/AppText';

const EmailVerification = () => {
  const nav = useNavigation();

  return (
    <Container
      style={{
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1),
      }}
    >
      <AuthHeader title={'Email'} subTitle={'Verification'} />
      <LineBreak space={5} />
      <CodeInput />
      <TouchableOpacity>
        <AppText
          title={'Resend on 02:39'}
          textColor={AppColors.GRAY}
          textSize={1.6}
          textAlignment={'right'}
        />
      </TouchableOpacity>
      <LineBreak space={5} />
      <AppButton
        title={'Verify Email'}
        textSize={2}
        handlePress={() => nav.navigate('NewPassword')}
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

export default EmailVerification;
