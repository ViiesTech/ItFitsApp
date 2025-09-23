/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { View, TouchableOpacity, ImageBackground } from 'react-native'
import { AppColors, responsiveHeight, responsiveWidth } from '../utils';
import AppText from './AppText';
import { AppImages } from '../assets/images';

const QuantityCard = () => {
    const [count, setCount] = useState(1);

    return (
        <TouchableOpacity style={{
            backgroundColor: AppColors.lightGray,
            paddingVertical: responsiveHeight(1),
            paddingHorizontal: responsiveWidth(4),
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <AppText
                title={'Quantity'}
                textColor={AppColors.BLACK}
                textSize={1.8}
            />

            <View style={{ flexDirection: 'row', gap: responsiveWidth(4), alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setCount(count + 1)}>
                    <ImageBackground imageStyle={{ borderRadius: 100 }}
                        source={AppImages.btn_bg}
                        resizeMode='stretch'
                        style={{
                            width: 40, height: 40,
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <AppText
                            title={'+'}
                            textColor={AppColors.WHITE}
                            textSize={3}
                        />
                    </ImageBackground>
                </TouchableOpacity>
                <AppText
                    title={count}
                    textColor={AppColors.BLACK}
                    textSize={1.8}
                />
                <TouchableOpacity onPress={() => setCount(count - 1)}>
                    <ImageBackground imageStyle={{ borderRadius: 100 }}
                        source={AppImages.btn_bg}
                        resizeMode='stretch'
                        style={{
                            width: 40, height: 40,
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <AppText
                            title={'-'}
                            textColor={AppColors.WHITE}
                            textSize={3.5}
                        />
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default QuantityCard;