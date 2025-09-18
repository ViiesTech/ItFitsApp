/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { AppColors, responsiveHeight, responsiveWidth } from '../utils'

type Prop = {
    width: any,
}

const Seperator = ({width}: Prop) => {
    return (
       <View style={{width: responsiveWidth(width), height: responsiveHeight(0.1), backgroundColor: AppColors.LIGHTGRAY}} />
    );
};

export default Seperator;