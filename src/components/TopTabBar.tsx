/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import AppText from './AppText'
import { AppColors } from '../utils'

type Prop = {
    tab1OnPress: any,
    tab2OnPress: any,
    selectedTab?: string,
}

const TopTabBar = ({ tab1OnPress, tab2OnPress, selectedTab }: Prop) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity onPress={tab1OnPress}>
                <AppText
                    title={'My Cart'}
                    textColor={selectedTab === 'my_cart' ? AppColors.BLACK : AppColors.LIGHTGRAY}
                    textSize={2.2}
                    borderBottomWidth={1}
                    borderBottomColor={selectedTab === 'my_cart' ? AppColors.BLACK : AppColors.LIGHTGRAY}
                    textwidth={50}
                    textAlignment={'center'}
                    paddingBottom={2}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={tab2OnPress}>
                <AppText
                    title={'Whitelist'}
                    textColor={selectedTab === 'whitelist' ? AppColors.BLACK : AppColors.LIGHTGRAY}
                    textSize={2.2}
                    borderBottomWidth={1}
                    borderBottomColor={selectedTab === 'whitelist' ? AppColors.BLACK : AppColors.LIGHTGRAY}
                    textwidth={50}
                    textAlignment={'center'}
                    paddingBottom={2}
                />
            </TouchableOpacity>
        </View>
    )
}

export default TopTabBar