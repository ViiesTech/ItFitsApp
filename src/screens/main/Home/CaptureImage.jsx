/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import Container from '../../../components/Container';
import { AppImages } from '../../../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AppColors, responsiveHeight, responsiveWidth } from '../../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
const CaptureImage = () => {
  const navigation = useNavigation();
  const [flashActive, setFlashActive] = useState(true);
  const [imgCaptured, setImgCaptured] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={imgCaptured ? AppImages.captureBg : AppImages.captureBgGrid}
        style={{ flex: 1, padding: responsiveHeight(2) }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" color={AppColors.WHITE} size={25} />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: '#C4BAAF',
              flexDirection: 'row',
              padding: responsiveHeight(1),
              borderRadius: responsiveHeight(3),
            }}
          >
            <TouchableOpacity
              onPress={() => setFlashActive(true)}
              style={{
                backgroundColor: flashActive ? AppColors.BLACK : null,
                width: responsiveWidth(15),
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                borderRadius: responsiveHeight(2),
              }}
            >
              <Ionicons
                name="flash"
                color={flashActive ? AppColors.WHITE : '#37372D'}
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setFlashActive(false)}
              style={{
                backgroundColor: flashActive ? null : AppColors.BLACK,
                width: responsiveWidth(15),
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                borderRadius: responsiveHeight(2),
              }}
            >
              <FontAwesome5
                name="minus"
                color={flashActive ? '#37372D' : AppColors.WHITE}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          {imgCaptured ? (
            <View
              style={{
                flexDirection: 'row',
                gap: responsiveHeight(5),
                alignSelf: 'center',
                padding: responsiveHeight(1.5),
              }}
            >
              <TouchableOpacity
                onPress={() => setImgCaptured(false)}
                style={{
                  backgroundColor: '#A38474',
                  borderRadius: responsiveHeight(10),
                  height: responsiveHeight(8.5),
                  width: responsiveWidth(18.5),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Entypo name="cross" color="#EEEDE7" size={35} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: AppColors.WHITE,
                  borderRadius: responsiveHeight(10),
                  height: responsiveHeight(8.5),
                  width: responsiveWidth(18.5),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FontAwesome name="send" color="#064A9C" size={25} />
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: responsiveHeight(1.5),
              }}
            >
              <TouchableOpacity
                style={{ borderWidth: 4, borderColor: AppColors.WHITE }}
              >
                <Image
                  source={AppImages.galleryImg}
                  style={{ height: responsiveHeight(5) }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setImgCaptured(true)}
                style={{
                  borderWidth: 8,
                  borderColor: '#99796F',
                  borderRadius: responsiveHeight(5),
                }}
              >
                <View
                  style={{
                    height: responsiveHeight(8),
                    width: responsiveWidth(18),
                    borderRadius: responsiveHeight(5),
                    backgroundColor: AppColors.WHITE,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: AppColors.WHITE,
                  padding: responsiveHeight(2),
                  borderRadius: responsiveHeight(4),
                }}
              >
                <Ionicons
                  name="camera-reverse-outline"
                  color={AppColors.BLACK}
                  size={25}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CaptureImage;
