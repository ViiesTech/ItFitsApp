/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { AppColors, responsiveHeight, responsiveWidth } from '../../utils';
import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import { AppImages } from '../../assets/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import LineBreak from '../../components/LineBreak';

const OnBoarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    {
      key: 1,
      title: 'Meet Your Style Buddy!',
      text: 'Create your funky avatar & let it try outfits for you',
      image: AppImages.onboarding_one,
    },
    {
      key: 2,
      title: 'Try Before You Buy!',
      text: 'Check how dresses look on your avatar in 360° view.',
      image: AppImages.onboarding_two,
    },
    {
      key: 3,
      title: 'Style. Share. Slay',
      text: 'Shop your favorite looks, share with friends & unlock rewards!',
      image: AppImages.onboarding_three,
    },
  ];

  const renderItem = ({ item }) => (
    <View>
      <LineBreak space={10} />
      <Image
        source={item.image}
        style={{
          height: responsiveHeight(35),
          width: responsiveWidth(100),
          resizeMode: 'contain',
        }}
      />
      <LineBreak space={10} />
      <View>
        <View
          style={{
            backgroundColor: AppColors.GREEN,
            elevation: 5,
            paddingVertical: responsiveHeight(1.5),
          }}
        >
          <AppText
            title={item.title}
            textColor={AppColors.LIGHTGRAY}
            textSize={2}
            textFontWeight
            textAlignment={'center'}
          />
        </View>
        <View style={{ padding: 20 }}>
          <AppText
            title={item.text}
            textColor={AppColors.GRAY}
            textSize={2}
            textwidth={55}
            textAlignment={'center'}
          />
        </View>
      </View>
    </View>
  );

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      sliderRef.current?.goToSlide(currentIndex + 1, true);
    }
  };

  const handleDone = () => {
    navigation.replace('Welcome');
  };

  const renderCustomButtons = () => {
    if (currentIndex !== 2) {
      return (
        <View
          style={{
            alignItems: 'flex-end',
            margin: responsiveWidth(5),
          }}
        >
          <TouchableOpacity onPress={handleNext}>
            <AppText
              title={'Skip'}
              textSize={2}
              textColor={AppColors.lightBlue}
              textDecorationLine="underline"
            />
          </TouchableOpacity>
        </View>
      );
    }

    if (currentIndex === 2) {
      return (
        <View
          style={{
            alignItems: 'flex-end',
            margin: responsiveWidth(5),
          }}
        >
          <TouchableOpacity onPress={handleDone}>
            <AppText
              title={'Skip'}
              textSize={2}
              textColor={AppColors.lightBlue}
              textDecorationLine="underline"
            />
          </TouchableOpacity>
        </View>
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {renderCustomButtons()}
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={renderItem}
        onSlideChange={index => setCurrentIndex(index)}
        showNextButton={false}
        showSkipButton={false}
        showDoneButton={false}
        dotStyle={{ display: 'none' }}
      />
    </SafeAreaView>
  );
};

export default OnBoarding;
