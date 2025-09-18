/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TextInput } from 'react-native';
import { AppColors, responsiveHeight, responsiveWidth } from '../utils';
import AppText from './AppText';

type props = {
  logo?: any;
  inputPlaceHolder?: any;
  inputBgColour?: any;
  inputWidth?: number;
  containerBg?: any;
  rightIcon?: any;
  secureTextEntry?: any;
  placeholderTextColor?: any;
  inputHeight?: any;
  textAlignVertical?: any;
  placeholderTextfontWeight?: any;
  multiline?: any;
  value?: any;
  onChangeText?: any;
  borderRadius?: any;
  borderBottomWidth?: any;
  borderBottomColor?: any;
  label?: any;
};
const AppTextInput = ({
  logo,
  secureTextEntry,
  inputPlaceHolder,
  inputWidth = 60,
  containerBg,
  rightIcon,
  placeholderTextColor,
  inputHeight,
  textAlignVertical,
  placeholderTextfontWeight,
  multiline,
  value,
  onChangeText,
  borderRadius,
  borderBottomWidth,
  borderBottomColor,
  label,
}: props) => {
  return (
    <View>
      {label ? (<View style={{ paddingHorizontal: responsiveWidth(2) }}> <AppText
        title={label}
        textColor={AppColors.GRAY}
        textSize={1.8}
      /></View>) : null}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: containerBg,
          paddingHorizontal: responsiveWidth(2),
          paddingVertical: borderBottomWidth ? 0 : 5,
          borderRadius: borderRadius ? borderRadius : 12,
          alignItems: 'center',
          gap: 10,
          borderWidth: borderBottomWidth ? 0 : 1,
          borderBottomWidth: borderBottomWidth,
          borderBottomColor: borderBottomColor,
          borderColor: AppColors.BLACK,
        }}>
        {logo}

        <TextInput
          placeholder={inputPlaceHolder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : AppColors.BLACK
          }
          style={{
            width: responsiveWidth(inputWidth),
            color: AppColors.BLACK,
            height: inputHeight ? responsiveHeight(inputHeight) : null,
            fontWeight: placeholderTextfontWeight
              ? placeholderTextfontWeight
              : null,
          }}
          secureTextEntry={secureTextEntry}
          textAlignVertical={textAlignVertical}
          multiline={multiline}
        />

        {rightIcon}
      </View>
    </View>
  );
};

export default AppTextInput;
