/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppColors, responsiveFontSize } from '../utils';
import LineBreak from './LineBreak';
import AppText from './AppText';
import { useNavigation } from '@react-navigation/native';

type Prop = {
    title?: any,
    subTitle?: any,
    hideGoBack?: any,
    isChange?: any,
    centerText?: any,
    isWhite?: any,
    centerTextFontBold?:any,
    rightIcon?:any,
}

const AuthHeader = ({ title, subTitle, hideGoBack = true, isChange, centerText, centerTextFontBold, isWhite, rightIcon }: Prop) => {
    const nav = useNavigation();
    return (
        <View>
            {hideGoBack && (
                <View style={isChange ? { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } : null}>
                    <TouchableOpacity onPress={() => nav.goBack()}>
                        <Ionicons
                            name="arrow-back"
                            size={responsiveFontSize(3)}
                            color={isWhite ? AppColors.WHITE : AppColors.GRAY} />
                    </TouchableOpacity>
                    <AppText
                        title={centerText}
                        textColor={isWhite ? AppColors.WHITE : AppColors.BLACK}
                        textSize={2.5}
                        textFontWeight={centerTextFontBold}
                    />
                    {!isChange || rightIcon ? rightIcon : <View />}
                </View>
            )}
            {hideGoBack && <LineBreak space={2} />}
            {title && <AppText
                title={title}
                textColor={AppColors.BLACK}
                textSize={4.5}
                textAlignment={'center'}
            />}
            {subTitle && <AppText
                title={subTitle}
                textColor={AppColors.GREEN}
                textSize={4.5}
                textFontWeight
                textAlignment={'center'}
            />}
        </View>
    );
};

export default AuthHeader;