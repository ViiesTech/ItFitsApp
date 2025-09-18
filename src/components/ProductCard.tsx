/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { AppColors, responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils'
import AppText from './AppText';
import LineBreak from './LineBreak';
import Feather from 'react-native-vector-icons/Feather';

type Prop = {
    title?: any,
    price?: any,
    imageSrc?: any,
    offPrice?: any,
}

const ProductCard = ({ title, price, imageSrc, offPrice }: Prop) => {
    return (
        <TouchableOpacity style={{ backgroundColor: AppColors.cardColor, borderRadius: 10, width: responsiveWidth(50), paddingVertical: responsiveHeight(2) }}>
            <View style={{ alignItems: 'flex-end', paddingHorizontal: responsiveWidth(4) }}>
                <TouchableOpacity>
                    <Feather
                        name="heart"
                        size={responsiveFontSize(3)}
                        color={AppColors.BLACK}
                    />
                </TouchableOpacity>
            </View>
            <Image source={imageSrc} style={{ width: responsiveWidth(40), height: responsiveHeight(25), alignSelf: 'center' }} />
            <LineBreak space={1} />
            <View style={{ paddingHorizontal: responsiveWidth(4) }}>
                <AppText
                    title={title}
                    textColor={AppColors.BLACK}
                    textSize={1.8}
                />
                <LineBreak space={0.5} />
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(2) }}>
                    <AppText
                        title={price}
                        textColor={AppColors.BLACK}
                        textSize={1.8}
                    />
                    <AppText
                        title={offPrice}
                        textColor={AppColors.GRAY}
                        textSize={1.8}
                        textDecorationLine={'line-through'}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProductCard;