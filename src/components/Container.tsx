/* eslint-disable react-native/no-inline-styles */
import React, { ReactNode } from "react";
import {
    ImageStyle,
    ScrollView,
    StyleProp,
    TextStyle,
    ViewStyle,
    ViewStyle as RNViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppColors } from "../utils";

type Prop = {
    children: ReactNode;
    style?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
};

const Container = ({ children, style }: Prop) => {
    return (
        <SafeAreaView
            style={[{ flex: 1, backgroundColor: AppColors.WHITE }, style]}
        >
            <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
        </SafeAreaView>
    );
};

export default Container;
