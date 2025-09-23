/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Container from '../../components/Container';
import LineBreak from '../../components/LineBreak';
import AuthHeader from '../../components/AuthHeader';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Seperator from '../../components/Seperator';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';
import Octicons from 'react-native-vector-icons/Octicons';
import { AppImages } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

const UploadAvatar = () => {
  const nav = useNavigation();
  const [selectedImage, setSelectedImage] = useState('');

  const handleOpenImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setSelectedImage(image.path);
    });
  };

  return (
    <Container
      style={{
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1),
      }}
    >
      <AuthHeader title={'Upload your'} subTitle={'Picture'} />
      <LineBreak space={2} />
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            width: responsiveHeight(15),
            height: responsiveHeight(15),
            backgroundColor: AppColors.LIGHTGRAY,
            borderRadius: 100,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={{
                position: 'absolute',
                width: responsiveHeight(15),
                height: responsiveHeight(15),
                borderRadius: 100,
              }}
            />
          )}
          {!selectedImage && (
            <Feather
              name={'upload'}
              size={responsiveFontSize(3.5)}
              color={AppColors.BLACK}
            />
          )}
          <View
            style={{
              position: 'absolute',
              bottom: 3,
              right: 5,
              borderWidth: 3,
              borderColor: AppColors.WHITE,
              borderRadius: 100,
            }}
          >
            <TouchableOpacity
              style={{
                width: 28,
                height: 28,
                borderRadius: 100,
                backgroundColor: AppColors.lightBlue,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => handleOpenImagePicker()}
            >
              <FontAwesome
                name={'pencil'}
                size={responsiveFontSize(1.8)}
                color={AppColors.WHITE}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <LineBreak space={5} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Seperator width={40} />
        <AppText title={'OR'} textColor={AppColors.GRAY} textSize={1.8} />
        <Seperator width={40} />
      </View>

      <LineBreak space={5} />

      <AuthHeader
        title={'Create your'}
        subTitle={'Avatar'}
        hideGoBack={false}
      />

      <LineBreak space={2} />

      <AppButton
        title={'Lets Create'}
        textSize={2}
        handlePress={() => nav.navigate('Gallery')}
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
    </Container>
  );
};

export default UploadAvatar;
