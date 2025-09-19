import React from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import { AppColors, responsiveHeight, responsiveWidth } from '../utils';
import SVGXml from './SVGXML';
import { AppIcons } from '../assets/icons';
import AppText from './AppText';
import LineBreak from './LineBreak';

type Prop = {
    visible: any,
}

const OrderPlacedModal = ({ visible }: Prop) => {
    return (
        <View style={styles.container}>
            <Modal
                visible={visible}
                transparent
                animationType="slide"
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalBox}>

                        <SVGXml icon={AppIcons.success} width={100} height={100} />
                        <AppText
                            title={'Order Placed'}
                            textColor={AppColors.BLACK}
                            textSize={2.5}
                            textFontWeight
                            textAlignment={'center'}
                        />
                        <AppText
                            title={'Successfully'}
                            textColor={AppColors.BLACK}
                            textSize={3.5}
                            textFontWeight
                            textAlignment={'center'}
                        />
                        <LineBreak space={1} />
                        <AppText
                            title={'You will recieve an email confirmation'}
                            textColor={AppColors.GRAY}
                            textSize={1.6}
                            textAlignment={'center'}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default OrderPlacedModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalBox: {
        width: responsiveWidth(90),
        paddingVertical: responsiveHeight(2),
        backgroundColor: AppColors.WHITE,
        borderRadius: 12,
        alignItems: "center",
        borderWidth: 2,
        borderColor: AppColors.lightBlue,
    },
});