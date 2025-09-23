/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
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
import AppButton from '../../components/AppButton';
import { AppImages } from '../../assets/images';
import { AppIcons } from '../../assets/icons';
import SVGXml from '../../components/SVGXML';
import AppTextInput from '../../components/AppTextInput';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

const FillYourDetails = () => {
  const nav = useNavigation();
  const [isSelectedTab, setIsSelectedTab] = useState('men');
  return (
    <Container
      style={{
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1),
      }}
    >
      <AuthHeader title={'Fill Your'} subTitle={'Details'} />
      <LineBreak space={5} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <AppButton
          title={'Mens'}
          textSize={2}
          handlePress={() => setIsSelectedTab('men')}
          bgColor={isSelectedTab === 'women' ? AppColors.lightestBlue : null}
          textColor={isSelectedTab === 'women' ? AppColors.BLACK : AppColors.WHITE}
          borderWidth={isSelectedTab === 'women' ? 1 : 0}
          btn_bg={isSelectedTab === 'women' ? null : AppImages.btn_bg}
          borderColor={isSelectedTab === 'women' ? AppColors.lightBlue : null}
          textFontWeight={true}
          justifyContent={'center'}
          gap={responsiveWidth(3)}
          btnWidth={42}
          leftIcon={<SVGXml icon={AppIcons.male} width={20} height={20} />}
        />
        <AppButton
          title={'Womens'}
          textSize={2}
          bgColor={isSelectedTab === 'men' ? AppColors.lightestBlue : AppColors.lightestBlue}
          handlePress={() => setIsSelectedTab('women')}
          borderWidth={isSelectedTab === 'men' ? 1 : 0}
          borderColor={isSelectedTab === 'men' ? AppColors.lightBlue : null}
          textFontWeight={true}
          btn_bg={isSelectedTab === 'men' ? null : AppImages.btn_bg}
          textColor={isSelectedTab === 'men' ? AppColors.BLACK : AppColors.WHITE}
          justifyContent={'center'}
          gap={responsiveWidth(3)}
          btnWidth={42}
          leftIcon={<SVGXml icon={AppIcons.female} width={20} height={20} />}
        />
      </View>

      <LineBreak space={3} />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AppTextInput
          inputPlaceHolder={''}
          borderBottomWidth={1}
          borderBottomColor={AppColors.LIGHTGRAY}
          inputWidth={42}
          label={'First Name'}
        />
        <AppTextInput
          inputPlaceHolder={''}
          borderBottomWidth={1}
          borderBottomColor={AppColors.LIGHTGRAY}
          inputWidth={42}
          label={'Last Name'}
        />
      </View>
      <LineBreak space={3} />

      <AppTextInput
        inputPlaceHolder={''}
        borderBottomWidth={1}
        borderBottomColor={AppColors.LIGHTGRAY}
        label={'Birthday'}
      />

      <LineBreak space={3} />

      <AppTextInput
        inputPlaceHolder={''}
        borderBottomWidth={1}
        borderBottomColor={AppColors.LIGHTGRAY}
        label={'Phone'}
      />
      <LineBreak space={3} />

      <AppTextInput
        inputPlaceHolder={''}
        borderBottomWidth={1}
        borderBottomColor={AppColors.LIGHTGRAY}
        label={'Address line 1'}
      />
      <LineBreak space={3} />

      <AppTextInput
        inputPlaceHolder={''}
        borderBottomWidth={1}
        borderBottomColor={AppColors.LIGHTGRAY}
        label={'Address line 2 (Optional)'}
      />
      <LineBreak space={3} />

      <AppTextInput
        inputPlaceHolder={''}
        borderBottomWidth={1}
        borderBottomColor={AppColors.LIGHTGRAY}
        label={'City'}
      />

      <LineBreak space={3} />

      <AppButton
        title={'Create Your Avatar'}
        textSize={2}
        handlePress={() => nav.navigate('UploadAvatar')}
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

export default FillYourDetails;
