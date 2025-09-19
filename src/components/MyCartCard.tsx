/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { AppColors, responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils'
import AppText from './AppText'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LineBreak from './LineBreak';

const MyCartCard = ({ item, whitelist, buttonOnPress, orderDetail }: any) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                gap: responsiveWidth(3),
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: AppColors.LIGHTGRAY,
                paddingVertical: responsiveHeight(1),
            }}
        >
            {/* Product Image */}
            <Image
                source={item.image}
                style={{
                    width: responsiveWidth(25),
                    height: responsiveHeight(14),
                }}
            />

            {/* Right Side Content */}
            <View style={{ flex: 1 }}>
                {/* Header Row: Name + Close Button */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <AppText
                        title={item.name}
                        textColor={AppColors.BLACK}
                        textSize={2.3}
                    />
                    <TouchableOpacity>
                        <Ionicons
                            name="close"
                            size={responsiveFontSize(3.5)}
                            color={AppColors.GRAY}
                        />
                    </TouchableOpacity>
                </View>

                <LineBreak space={1} />
                <AppText
                    title={`Size: ${item.size}`}
                    textColor={AppColors.GRAY}
                    textSize={2}
                />
                <LineBreak space={0.2} />
                <AppText
                    title={`Color: ${item.color}`}
                    textColor={AppColors.GRAY}
                    textSize={2}
                />
                <LineBreak space={1} />

                {/* Footer Row: Price + Move to Cart */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <AppText
                        title={item.price}
                        textColor={AppColors.BLACK}
                        textSize={2.3}
                        textFontWeight
                    />
                    {!orderDetail && <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            paddingHorizontal: responsiveWidth(2),
                            paddingVertical: responsiveHeight(0.5),
                            borderRadius: 10,
                        }}
                        onPress={buttonOnPress}
                    >
                        <AppText
                            title={whitelist ? "Move to Cart" : "Move Whitelist"}
                            textColor={AppColors.BLACK}
                            textSize={1.8}
                        />
                    </TouchableOpacity>}
                </View>
            </View>
        </View>
    )
}

export default MyCartCard