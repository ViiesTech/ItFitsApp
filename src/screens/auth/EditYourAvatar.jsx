/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { AppImages } from '../../assets/images';
import { AppColors, responsiveHeight, responsiveWidth } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '../../components/AuthHeader';
import LineBreak from '../../components/LineBreak';
import AppText from '../../components/AppText';
import SVGXml from '../../components/SVGXML';
import { AppIcons } from '../../assets/icons';

const filterData = [
  { id: 1, title: 'Hair' },
  { id: 2, title: 'Face' },
  { id: 3, title: 'Eye' },
  { id: 4, title: 'Eyewear' },
  { id: 5, title: 'Lips' },
  { id: 6, title: 'Skintone' },
];

const faceFilter = [
  { id: 1, src: AppIcons.face_avatar },
  { id: 2, src: AppIcons.face_avatar },
  { id: 3, src: AppIcons.face_avatar },
  { id: 4, src: AppIcons.face_avatar },
  { id: 5, src: AppIcons.face_avatar },
  { id: 6, src: AppIcons.face_avatar },
  { id: 7, src: AppIcons.face_avatar },
  { id: 8, src: AppIcons.face_avatar },
  { id: 9, src: AppIcons.face_avatar },
  { id: 10, src: AppIcons.face_avatar },
  { id: 11, src: AppIcons.face_avatar },
  { id: 12, src: AppIcons.face_avatar },
  { id: 13, src: AppIcons.face_avatar },
  { id: 14, src: AppIcons.face_avatar },
  { id: 15, src: AppIcons.face_avatar },
];

const EditYourAvatar = () => {
    const [selectedTab, setSelectedTab] = useState({id: 1});

  return (
    <ImageBackground source={AppImages.edit_avatar_bg} style={{ flex: 1 }}>
      <SafeAreaView style={{ position: 'relative' }}>
        <View
          style={{
            paddingHorizontal: responsiveWidth(4),
          }}
        >
          <AuthHeader
            isChange={true}
            centerText="Edit Your Avatar"
            isWhite={true}
          />

          <LineBreak space={15} />
          <Image
            source={AppImages.avatar_face}
            style={{
              alignSelf: 'center',
              width: responsiveHeight(30),
              height: responsiveHeight(30),
            }}
            resizeMode="contain"
          />
        </View>

        <LineBreak space={5} />

        <View
          style={{
            backgroundColor: AppColors.WHITE,
            height: responsiveHeight(40),
            paddingVertical: responsiveHeight(2),
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}
        >
          <FlatList
            data={filterData}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: responsiveWidth(7),
              paddingHorizontal: responsiveWidth(4),
            }}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setSelectedTab({id: item.id})}>
                <AppText
                  title={item.title}
                  textColor={
                    selectedTab.id == item.id ? AppColors.lightBlue : AppColors.GRAY
                  }
                  textSize={2}
                  textFontWeight
                />
              </TouchableOpacity>
            )}
          />

          <FlatList
            data={faceFilter}
            contentContainerStyle={{
              gap: responsiveWidth(2),
              alignSelf: 'center',
            }}
            numColumns={5}
            columnWrapperStyle={{ gap: responsiveWidth(2) }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: AppColors.GRAY,
                  borderRadius: 10,
                  width: responsiveHeight(7.8),
                  height: responsiveHeight(7.8),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <SVGXml icon={item.src} width={40} height={40} />
              </TouchableOpacity>
            )}
          />

          <LineBreak space={4} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EditYourAvatar;
