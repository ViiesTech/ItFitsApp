/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { AppColors, responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils'
import AppText from './AppText'
import Entypo from 'react-native-vector-icons/Entypo';

type Prop = {
    title?: any,
    centerContent?: any,
    cardOnPress?: any,
}

const DropdownCard = ({ title, centerContent, cardOnPress }: Prop) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: AppColors.lightGray,
                width: responsiveWidth(44),
                paddingVertical: responsiveHeight(2),
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 8,
                justifyContent: 'space-between',
                paddingHorizontal: responsiveWidth(5),
            }}
            onPress={cardOnPress}
        >
            <AppText title={title} textColor={AppColors.BLACK} textSize={1.8} />
            <AppText title={centerContent} textColor={AppColors.BLACK} textSize={1.8} />
            <Entypo
                name="chevron-down"
                size={responsiveFontSize(3)}
                color={AppColors.GRAY}
            />
        </TouchableOpacity>
    )
}

export default DropdownCard