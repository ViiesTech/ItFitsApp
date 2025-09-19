/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { AppColors, responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils'
import AppText from './AppText'
import Feather from 'react-native-vector-icons/Feather';
import LineBreak from './LineBreak';
import { AppImages } from '../assets/images';
import SVGXml from './SVGXML';

type Prop = {
    title: any,
    subTitle?: any,
    isSelected: any,
    cardOnPress?: any,
    shippingAddress?: any,
    paymentMethod?: any,
    icon?: any,
}

const MethodCard = ({ title, subTitle, isSelected, cardOnPress, shippingAddress, paymentMethod, icon }: Prop) => {
    return (
        <TouchableOpacity
            onPress={cardOnPress}
            style={{
                borderWidth: isSelected ? 1 : 0,
                borderColor: shippingAddress || paymentMethod ? AppColors.GRAY : AppColors.GREEN,
                borderBottomWidth: 1,
                borderBottomColor: isSelected ? shippingAddress || paymentMethod ? AppColors.GRAY : AppColors.GREEN : AppColors.LIGHTGRAY,
                paddingHorizontal: responsiveWidth(5),
                paddingVertical: responsiveHeight(3),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
            {shippingAddress ? <Image source={AppImages.image} style={{ width: 50, height: 50, borderRadius: 100 }} /> : paymentMethod ? <SVGXml icon={icon} width={20} height={20} /> : <View />}
            <View>
                <AppText
                    title={title}
                    textColor={AppColors.BLACK}
                    textSize={2}
                    textFontWeight
                    textAlignment={'center'}
                />
                {subTitle && <LineBreak space={0.5} />}
                {subTitle && <AppText
                    title={subTitle}
                    textColor={AppColors.LIGHTGRAY}
                    textSize={1.6}
                    textAlignment={'center'}
                    textFontWeight
                />}
            </View>
            <Feather
                name="check"
                size={responsiveFontSize(2.5)}
                color={isSelected ? AppColors.BLACK : AppColors.WHITE}
            />
        </TouchableOpacity>
    )
}

export default MethodCard