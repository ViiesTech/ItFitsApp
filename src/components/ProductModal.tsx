/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Modal, View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { AppColors, responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import AppText from './AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import LineBreak from './LineBreak';

// const data = [
//     { id: 1, title: 'S' },
//     { id: 2, title: 'M' },
//     { id: 3, title: 'L' },
//     { id: 4, title: 'XL' },
//     { id: 5, title: '2XL' },
// ]

type Prop = {
    title?: any,
    data?: any,
    visible?: any,
    setVisible?: any,
    isColorModal?: any,
    selected?:any,
    setSelected?:any,
}

const ProductModal = ({ title, data, visible, setVisible, isColorModal = false, selected, setSelected }: Prop) => {

    return (
        <ScrollView style={styles.container}>
            <Modal
                visible={visible}
                transparent={true} // makes background transparent
                animationType="slide" // can be "none", "slide", "fade"
                onRequestClose={() => setVisible(false)} // required for Android back button
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View />
                            <AppText
                                title={title}
                                textColor={AppColors.BLACK}
                                textSize={3}
                                textFontWeight
                            />
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Ionicons
                                    name="close"
                                    size={responsiveFontSize(3.5)}
                                    color={AppColors.BLACK}
                                />
                            </TouchableOpacity>
                        </View>
                        <LineBreak space={2} />

                        <FlatList
                            data={data}
                            ItemSeparatorComponent={<LineBreak space={1} />}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: selected.id == item.id ? AppColors.GREEN : AppColors.cardColor,
                                        paddingHorizontal: responsiveWidth(6),
                                        paddingVertical: responsiveHeight(1.5),
                                        borderRadius: 10,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                    onPress={() => setSelected({id: item.id})}
                                    >
                                    <AppText
                                        title={item.title}
                                        textColor={selected.id == item.id ? AppColors.WHITE : AppColors.BLACK}
                                        textSize={2}
                                        textFontWeight
                                    />
                                    <View style={{ flexDirection: 'row', gap: responsiveWidth(4), alignItems: 'center' }}>
                                        {isColorModal && <View style={{
                                            width: 15, height: 15,
                                            backgroundColor: item?.color,
                                            borderRadius: 100,
                                            borderWidth: selected.id == item.id ? 1 : 0,
                                            borderColor: AppColors.WHITE,
                                        }} />}
                                        {selected.id == item.id &&
                                            <Feather
                                                name="check"
                                                size={responsiveFontSize(2.5)}
                                                color={AppColors.WHITE}
                                            />
                                        }
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)", // backdrop effect
    },
    modalView: {
        width: responsiveWidth(100),
        height: responsiveHeight(40),
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(2),
        backgroundColor: "white",
        elevation: 5,
    },
});

export default ProductModal