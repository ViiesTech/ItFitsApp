/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { AppColors, responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils'
import AppText from './AppText';
import LineBreak from './LineBreak';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Prop = {
    title?: any,
    price?: any,
    imageSrc?: any,
    offPrice?: any,
    cardOnPress?: any,
    addFavOnPress?:any,
    isFav?:any,
}

const ProductCard = ({ title, price, imageSrc, offPrice, cardOnPress, addFavOnPress, isFav }: Prop) => {
    return (
        <TouchableOpacity onPress={cardOnPress} style={{ backgroundColor: AppColors.cardColor, position: 'relative', borderRadius: 10, width: responsiveWidth(45), paddingVertical: responsiveHeight(2) }}>
            <View style={{ position: 'absolute', right: 0, zIndex: 999, top: responsiveHeight(1), alignItems: 'flex-end', paddingHorizontal: responsiveWidth(4) }}>
                <TouchableOpacity onPress={addFavOnPress}>
                    <FontAwesome
                        name={isFav ? "heart" : "heart-o"}
                        size={responsiveFontSize(3)}
                        color={isFav ? AppColors.red : AppColors.BLACK}
                    />
                </TouchableOpacity>
            </View>
            <Image source={imageSrc} style={{ width: responsiveWidth(40), height: responsiveHeight(22), alignSelf: 'center' }} resizeMode='contain' />
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