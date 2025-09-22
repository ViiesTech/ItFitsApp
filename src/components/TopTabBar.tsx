/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import AppText from './AppText'
import { AppColors } from '../utils'

type Prop = {
    tab1Title?: any,
    tab1OnPress?: any,
    tab2OnPress?: any,
    tab2Title?: any,
    selectedTab?: string,
}

const TopTabBar = ({ tab1OnPress, tab2OnPress, selectedTab, tab1Title, tab2Title }: Prop) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity onPress={tab1OnPress}>
                <AppText
                    title={tab1Title}
                    textColor={selectedTab === tab1Title ? AppColors.BLACK : AppColors.LIGHTGRAY}
                    textSize={2.2}
                    borderBottomWidth={1}
                    borderBottomColor={selectedTab === tab1Title ? AppColors.BLACK : AppColors.LIGHTGRAY}
                    textwidth={50}
                    textAlignment={'center'}
                    paddingBottom={2}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={tab2OnPress}>
                <AppText
                    title={tab2Title}
                    textColor={selectedTab === tab2Title ? AppColors.BLACK : AppColors.LIGHTGRAY}
                    textSize={2.2}
                    borderBottomWidth={1}
                    borderBottomColor={selectedTab === tab2Title ? AppColors.BLACK : AppColors.LIGHTGRAY}
                    textwidth={50}
                    textAlignment={'center'}
                    paddingBottom={2}
                />
            </TouchableOpacity>
        </View>
    )
}

export default TopTabBar