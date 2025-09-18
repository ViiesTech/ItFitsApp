/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '../../components/Container';
import AuthHeader from '../../components/AuthHeader';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import { AppImages } from '../../assets/images';
import LineBreak from '../../components/LineBreak';
import SVGXml from '../../components/SVGXML';
import { AppIcons } from '../../assets/icons';
import AppButton from '../../components/AppButton';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: 1, image: AppImages.user },
  { id: 2, image: AppImages.image },
  { id: 3, image: AppImages.image },
  { id: 4, image: AppImages.image },
  { id: 5, image: AppImages.image },
  { id: 6, image: AppImages.image },
  { id: 7, image: AppImages.image },
  { id: 8, image: AppImages.image },
  { id: 9, image: AppImages.image },
  { id: 10, image: AppImages.image },
  { id: 11, image: AppImages.image },
  { id: 12, image: AppImages.image },
  { id: 13, image: AppImages.image },
  { id: 14, image: AppImages.image },
  { id: 15, image: AppImages.image },
  { id: 16, image: AppImages.image },
  { id: 17, image: AppImages.image },
  { id: 18, image: AppImages.image },
  { id: 20, image: AppImages.image },
];

const Gallery = () => {
  const nav = useNavigation();
  return (
    <Container
      style={{
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1),
      }}
    >
      <AuthHeader isChange={true} centerText="Recents" />

      <FlatList
        data={data}
        numColumns={3}
        ItemSeparatorComponent={<LineBreak space={1} />}
        ListFooterComponent={
          <>
            <LineBreak space={2} />
            <AppButton
              title={'Continue'}
              textSize={2}
              handlePress={() => nav.navigate('ChooseYourAvatar')}
              btn_bg={AppImages.btn_bg}
              textColor={AppColors.WHITE}
              leftIcon={<View />}
              rightIcon={
                <Octicons
                  name={'arrow-right'}
                  size={responsiveFontSize(3)}
                  color={AppColors.WHITE}
                />
              }
            />
          </>
        }
        columnWrapperStyle={{
          gap: responsiveWidth(2),
          paddingLeft: responsiveWidth(0.5),
        }}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ImageBackground
              source={item.image}
              imageStyle={{ borderRadius: 15 }}
              style={{
                width: responsiveWidth(29),
                height: responsiveHeight(14),
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                paddingHorizontal: responsiveWidth(2),
                paddingVertical: responsiveHeight(1),
              }}
            >
              {item.id == 1 && (
                <SVGXml icon={AppIcons.correct} width={15} height={15} />
              )}
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default Gallery;
