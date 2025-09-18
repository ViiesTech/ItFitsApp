/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { AppColors, responsiveWidth } from '../utils';
import AppText from './AppText';

type props = {
  title?: any;
  bgColor?: any;
  textColor?: any;
  handlePress?: () => void;
  borderWidth?: any,
  borderColor?: any,
  elevation?: any,
  textFontWeight?: any,
  btnWidth?: any,
  textSize?: any,
  rightIcon?: any,
  leftIcon?: any,
  btn_bg?: any,
  textTransform?: any,
  textwidth?: any,
  justifyContent?: any,
  gap?: any,
};
const AppButton = ({ title, handlePress, btn_bg, gap, justifyContent, textwidth, textTransform, rightIcon, leftIcon, textSize, btnWidth, bgColor, textFontWeight, elevation, textColor, borderWidth, borderColor }: props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
    >
      <ImageBackground source={btn_bg}
        imageStyle={{ borderRadius: 10 }}
        style={{
          backgroundColor: btn_bg ? null : bgColor ? bgColor : AppColors.BTNCOLOURS,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: justifyContent ? justifyContent : 'space-between',
          padding: 15,
          borderRadius: 10,
          gap: gap,
          borderColor: borderColor ? borderColor : null,
          borderWidth: borderWidth ? borderWidth : 0,
          elevation: elevation,
          width: responsiveWidth(btnWidth),
          paddingHorizontal: responsiveWidth(5),
        }}>
        {leftIcon}
        <AppText
          textColor={textColor ? textColor : AppColors.WHITE}
          textSize={textSize ? textSize : 2.4}
          title={title ? title : "Continue"}
          textFontWeight={textFontWeight}
          textTransform={textTransform}
          textwidth={textwidth}
        />
        {rightIcon}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default AppButton;
