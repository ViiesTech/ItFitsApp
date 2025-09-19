/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import Container from '../../../components/Container';
import { AppColors, responsiveWidth } from '../../../utils';
import AuthHeader from '../../../components/AuthHeader';
import LineBreak from '../../../components/LineBreak';
import AppTextInput from '../../../components/AppTextInput';
import AppButton from '../../../components/AppButton';
import { AppImages } from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';

const AddAddress = () => {
  const nav = useNavigation();

  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Address'}
          isChange={true}
          centerTextFontBold={true}
        />
        <LineBreak space={2} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <AppTextInput
            label={'First Name'}
            inputPlaceHolder={''}
            borderBottomWidth={1}
            inputWidth={42}
            borderBottomColor={AppColors.LIGHTGRAY}
          />
          <AppTextInput
            label={'Last Name'}
            inputPlaceHolder={''}
            borderBottomWidth={1}
            inputWidth={42}
            borderBottomColor={AppColors.LIGHTGRAY}
          />
        </View>
        <LineBreak space={2} />
        <AppTextInput
          label={'Birthday'}
          inputPlaceHolder={''}
          borderBottomWidth={1}
          borderBottomColor={AppColors.LIGHTGRAY}
        />
        <LineBreak space={2} />
        <AppTextInput
          label={'Phone'}
          inputPlaceHolder={''}
          borderBottomWidth={1}
          borderBottomColor={AppColors.LIGHTGRAY}
        />
        <LineBreak space={2} />
        <AppTextInput
          label={'Address line 1'}
          inputPlaceHolder={''}
          borderBottomWidth={1}
          borderBottomColor={AppColors.LIGHTGRAY}
        />
        <LineBreak space={2} />
        <AppTextInput
          label={'Address line 2 (Optional)'}
          inputPlaceHolder={''}
          borderBottomWidth={1}
          borderBottomColor={AppColors.LIGHTGRAY}
        />
        <LineBreak space={2} />
        <AppTextInput
          label={'City'}
          inputPlaceHolder={''}
          borderBottomWidth={1}
          borderBottomColor={AppColors.LIGHTGRAY}
        />
        <LineBreak space={2} />

        <AppButton
          title={'Save Information'}
          textSize={2}
          handlePress={() => nav.goBack()}
          btn_bg={AppImages.btn_bg}
          textColor={AppColors.WHITE}
          justifyContent={'center'}
        />
      </View>
    </Container>
  );
};

export default AddAddress;
