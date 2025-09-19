/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { AppImages } from '../../../assets/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColors, responsiveWidth } from '../../../utils';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppText';
import AppButton from '../../../components/AppButton';
import { useNavigation } from '@react-navigation/native';

const TryOutFit = () => {
  const nav = useNavigation();
  return (
    <ImageBackground source={AppImages.try_outfit} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, paddingHorizontal: responsiveWidth(4) }}>
        <LineBreak space={2} />
        <TouchableOpacity onPress={() => nav.goBack()}>
          <AppText
            title={'Cancel'}
            textColor={AppColors.WHITE}
            textSize={2.3}
          />
        </TouchableOpacity>

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <AppButton
            btn_bg={AppImages.btn_bg}
            title={'$148'}
            textFontWeight={true}
            handlePress={() => nav.navigate('Cart')}
            rightIcon={
              <AppText
                title={'Add to Cart'}
                textColor={AppColors.WHITE}
                textSize={2}
              />
            }
          />
        </View>
        <LineBreak space={2} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default TryOutFit;
