/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppImages } from '../../assets/images';
import AuthHeader from '../../components/AuthHeader';
import { AppColors, responsiveHeight, responsiveWidth } from '../../utils';
import LineBreak from '../../components/LineBreak';
import AppButton from '../../components/AppButton';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const avatars = [
  { id: '1', src: AppImages.avatar_one },
  { id: '2', src: AppImages.avatar_one },
  { id: '3', src: AppImages.avatar_one },
];

const ChooseYourAvatar = () => {
  const nav = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <ImageBackground source={AppImages.avatar_bg} style={{ flex: 1 }}>
      <SafeAreaView style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          isChange={true}
          centerText="Choose Your Avatar"
          isWhite={true}
        />

        <LineBreak space={15} />

        <FlatList
          data={avatars}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{ alignItems: 'center' }}>
              {/* Spotlight effect */}
              <View>
                <Image
                  source={item.src}
                  style={{
                    width: responsiveWidth(92),
                    height: responsiveHeight(50),
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          )}
        />

        <LineBreak space={6} />

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          {avatars.map((_, index) => (
            <View
              key={index}
              style={[
                {
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: responsiveWidth(1),
                },
                {
                  backgroundColor:
                    activeIndex === index ? 'green' : 'lightgray',
                },
              ]}
            />
          ))}
        </View>
        <LineBreak space={2} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <AppButton
            title={'Edit Avatar'}
            btnWidth={44}
            justifyContent={'center'}
            bgColor={AppColors.WHITE}
            textColor={AppColors.lightBlue}
            handlePress={() => nav.navigate('EditYourAvatar')}
          />
          <AppButton
            title={'Save'}
            btnWidth={44}
            justifyContent={'center'}
            borderWidth={1}
            bgColor={AppColors.lightBlue}
            borderColor={AppColors.WHITE}
            handlePress={() => nav.navigate('Main')}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ChooseYourAvatar;
