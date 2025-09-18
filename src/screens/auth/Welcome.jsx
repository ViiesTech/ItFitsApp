/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, View } from 'react-native';
import { AppColors, responsiveHeight, responsiveWidth } from '../../utils';
import AppText from '../../components/AppText';
import Container from '../../components/Container';
import { AppImages } from '../../assets/images';
import LineBreak from '../../components/LineBreak';
import AppButton from '../../components/AppButton';
import SVGXml from '../../components/SVGXML';
import { AppIcons } from './../../assets/icons/index';
import Seperator from '../../components/Seperator';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const nav = useNavigation();
  return (
    <Container>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Image
          source={AppImages.shirt_left}
          style={{ width: responsiveWidth(30), height: responsiveHeight(20) }}
        />
        <View>
          <AppText
            title={'Welcome'}
            textColor={AppColors.BLACK}
            textSize={4}
            textwidth={40}
            textAlignment={'center'}
          />
        </View>
      </View>
      <LineBreak space={1} />
      <View
        style={{
          backgroundColor: AppColors.GREEN,
          elevation: 5,
          paddingVertical: responsiveHeight(0.5),
        }}
      >
        <AppText
          title={'ITFITS'}
          textColor={AppColors.WHITE}
          textSize={4}
          textFontWeight
          textAlignment={'center'}
        />
      </View>

      <LineBreak space={5} />

      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AppButton
          title={'Continue With Apple'}
          textSize={2}
          bgColor={AppColors.lightestBlue}
          textColor={AppColors.BLACK}
          borderWidth={1}
          borderColor={AppColors.BLUE}
          rightIcon={<View />}
          leftIcon={<SVGXml icon={AppIcons.apple} width={20} height={20} />}
        />
        <LineBreak space={2} />
        <AppButton
          title={'Continue With Google'}
          textSize={2}
          bgColor={AppColors.lightestBlue}
          textColor={AppColors.BLACK}
          borderWidth={1}
          borderColor={AppColors.BLUE}
          rightIcon={<View />}
          leftIcon={<SVGXml icon={AppIcons.google} width={20} height={20} />}
        />
        <LineBreak space={2} />
        <AppButton
          title={'Continue With Facebook'}
          textSize={2}
          bgColor={AppColors.lightestBlue}
          textColor={AppColors.BLACK}
          borderWidth={1}
          borderColor={AppColors.BLUE}
          rightIcon={<View />}
          leftIcon={<SVGXml icon={AppIcons.facebook} width={20} height={20} />}
        />

        <LineBreak space={2} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Seperator width={40} />
          <AppText title={'OR'} textColor={AppColors.GRAY} textSize={1.8} />
          <Seperator width={40} />
        </View>
        <LineBreak space={2} />
        <AppButton
          title={'Continue With Email'}
          textSize={2}
          handlePress={() => nav.navigate('EnterEmail')}
          btn_bg={AppImages.btn_bg}
          textColor={AppColors.WHITE}
          rightIcon={<View />}
          leftIcon={<SVGXml icon={AppIcons.email} width={20} height={20} />}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Image
          source={AppImages.shirt_right}
          style={{ width: responsiveWidth(28), height: responsiveHeight(20) }}
        />
      </View>
    </Container>
  );
};

export default Welcome;
