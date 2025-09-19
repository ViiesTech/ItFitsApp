/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import Container from '../../../components/Container';
import { AppColors, responsiveWidth } from '../../../utils';
import AuthHeader from '../../../components/AuthHeader';
import LineBreak from '../../../components/LineBreak';
import AppTextInput from '../../../components/AppTextInput';
import { AppImages } from '../../../assets/images';
import AppButton from '../../../components/AppButton';
import { useNavigation } from '@react-navigation/native';

const AddNewCard = () => {
      const nav = useNavigation();

  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Add New Card'}
          isChange={true}
          centerTextFontBold={true}
        />
        <LineBreak space={2} />

        <AppTextInput
          label={'Card holder name'}
          inputPlaceHolder={''}
          borderBottomWidth={1}
          borderBottomColor={AppColors.LIGHTGRAY}
        />
        <LineBreak space={2} />
        <AppTextInput
          label={'Card number'}
          inputPlaceHolder={''}
          borderBottomWidth={1}
          borderBottomColor={AppColors.LIGHTGRAY}
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
            label={'Date'}
            inputPlaceHolder={''}
            borderBottomWidth={1}
            inputWidth={42}
            borderBottomColor={AppColors.LIGHTGRAY}
          />
          <AppTextInput
            label={'CVV'}
            inputPlaceHolder={''}
            borderBottomWidth={1}
            inputWidth={42}
            borderBottomColor={AppColors.LIGHTGRAY}
          />
        </View>
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

export default AddNewCard;
