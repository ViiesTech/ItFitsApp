/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Image } from 'react-native'
import { AppColors, responsiveFontSize, responsiveWidth } from '../utils'
import AppText from './AppText'
import LineBreak from './LineBreak'
import { AppImages } from '../assets/images'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ReviewCard = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(4) }}>
                <Image source={AppImages.image} style={{ width: 50, height: 50, borderRadius: 100 }} />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <AppText
                        title={'Alex Morgan'}
                        textColor={AppColors.BLACK}
                        textSize={2}
                        textFontWeight
                    />
                    <View style={{ flexDirection: 'row', gap: responsiveWidth(1.5) }}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <FontAwesome
                                key={index}
                                name="star"
                                size={responsiveFontSize(2)}
                                color={index !== 4 ? AppColors.GREEN : AppColors.LIGHTGRAY}
                            />
                        ))}
                    </View>
                </View>
            </View>
            <LineBreak space={0.5} />
            <AppText
                title={'Gucci transcribes its heritage, creativity, and innovation into a plenitude of collections. From staple items to distinctive accessories.'}
                textColor={AppColors.GRAY}
                textSize={1.8}
            />
            <LineBreak space={0.5} />
            <AppText
                title={'12days ago'}
                textColor={AppColors.BLACK}
                textSize={1.8}
            />
        </View>
    )
}

export default ReviewCard