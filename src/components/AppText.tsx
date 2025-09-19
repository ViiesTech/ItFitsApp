/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Text } from 'react-native'
import { AppColors, responsiveFontSize, responsiveHeight, responsiveWidth } from './../utils/index';

type textProps = {
  title?: any
  textSize?: Number,
  textColor?: any,
  textFontWeight?: boolean,
  textAlignment?: String,
  textwidth?: number,
  borderBottomWidth?: any,
  borderBottomColor?: any,
  paddingBottom?: any,
  textDecorationLine?: any,
  textTransform?: any,
}

const AppText = ({ title, textSize, textColor, textTransform, textDecorationLine, textFontWeight, textAlignment, textwidth, borderBottomWidth, borderBottomColor, paddingBottom }: textProps) => {
  return (
    <Text style={
      {
        width: textwidth ? responsiveWidth(textwidth) : null,
        fontSize: textSize ? responsiveFontSize(textSize) : responsiveFontSize(1.4),
        fontWeight: textFontWeight ? "bold" : "regular",
        color: textColor ? textColor : AppColors.BLACK,
        textAlign: textAlignment ? textAlignment : null,
        textDecorationLine: textDecorationLine,
        alignSelf: textAlignment ? textAlignment : null,
        borderBottomWidth: borderBottomWidth ? borderBottomWidth : 0,
        borderBottomColor: borderBottomColor ? borderBottomColor : 0,
        paddingBottom: paddingBottom ? responsiveHeight(paddingBottom) : 0,
        textTransform: textTransform,
      }}>{title}</Text>
  )
}

export default AppText