/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Container from '../../../components/Container';
import AuthHeader from '../../../components/AuthHeader';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import TopTabBar from '../../../components/TopTabBar';
import LineBreak from '../../../components/LineBreak';
import Feather from 'react-native-vector-icons/Feather';
import AppTextInput from '../../../components/AppTextInput';
import Octicons from 'react-native-vector-icons/Octicons';
import AppText from '../../../components/AppText';
import { useNavigation } from '@react-navigation/native';
import { AppImages } from '../../../assets/images';

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState('Settings');
  const nav = useNavigation();

  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Profile'}
          isChange={true}
          centerTextFontBold={true}
        />
      </View>
      <LineBreak space={2} />
      <TopTabBar
        tab1OnPress={() => setSelectedTab('Settings')}
        tab2OnPress={() => setSelectedTab('About')}
        selectedTab={selectedTab}
        tab1Title={'Settings'}
        tab2Title={'About'}
      />

      <LineBreak space={5} />

      {selectedTab === 'Settings' ? (
        <>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: AppColors.GREEN,
                width: 70,
                height: 70,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather
                name={'user'}
                size={responsiveFontSize(4.5)}
                color={AppColors.WHITE}
              />
            </View>
            <LineBreak space={1} />
            <AppText
              title={'Hi, Emelia'}
              textColor={AppColors.GRAY}
              textSize={2}
              textAlignment={'center'}
            />
          </View>
          <LineBreak space={5} />{' '}
        </>
      ) : null}

      {selectedTab === 'Settings' && (
        <View
          style={{
            gap: responsiveHeight(2),
            paddingHorizontal: responsiveWidth(4),
          }}
        >
          <TouchableOpacity onPress={() => nav.navigate('PersonalInformation')}>
            <AppTextInput
              inputPlaceHolder={'Personal infomation'}
              borderBottomWidth={1}
              placeholderTextColor={AppColors.BLACK}
              editable={false}
              inputWidth={80}
              rightIcon={
                <Octicons
                  name={'arrow-right'}
                  size={responsiveFontSize(3)}
                  color={AppColors.GRAY}
                />
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate('Orders')}>
            <AppTextInput
              inputPlaceHolder={'Order'}
              borderBottomWidth={1}
              placeholderTextColor={AppColors.BLACK}
              editable={false}
              inputWidth={80}
              rightIcon={
                <Octicons
                  name={'arrow-right'}
                  size={responsiveFontSize(3)}
                  color={AppColors.GRAY}
                />
              }
            />
          </TouchableOpacity>
        </View>
      )}

      {selectedTab === 'About' && (
        <View>
          <View>
            <Image
              source={AppImages.user}
              style={{
                width: 110,
                height: 110,
                borderRadius: 100,
                alignSelf: 'center',
              }}
            />
            <LineBreak space={1} />
            <AppText
              title={'Hi, Emelia'}
              textColor={AppColors.GRAY}
              textSize={2}
              textAlignment={'center'}
            />
          </View>

          <LineBreak space={5} />

          <View
            style={{
              gap: responsiveHeight(2),
              paddingHorizontal: responsiveWidth(4),
            }}
          >
            <TouchableOpacity onPress={() => nav.navigate('Support')}>
              <AppTextInput
                inputPlaceHolder={'Help & Customer service'}
                borderBottomWidth={1}
                placeholderTextColor={AppColors.BLACK}
                editable={false}
                inputWidth={80}
                rightIcon={
                  <Octicons
                    name={'arrow-right'}
                    size={responsiveFontSize(3)}
                    color={AppColors.GRAY}
                  />
                }
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate('TermsConditions')}>
              <AppTextInput
                inputPlaceHolder={'Terms and Conditions'}
                borderBottomWidth={1}
                placeholderTextColor={AppColors.BLACK}
                editable={false}
                inputWidth={80}
                rightIcon={
                  <Octicons
                    name={'arrow-right'}
                    size={responsiveFontSize(3)}
                    color={AppColors.GRAY}
                  />
                }
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate('PrivacyPolicy')}>
              <AppTextInput
                inputPlaceHolder={'Privacy policy'}
                borderBottomWidth={1}
                placeholderTextColor={AppColors.BLACK}
                editable={false}
                inputWidth={80}
                rightIcon={
                  <Octicons
                    name={'arrow-right'}
                    size={responsiveFontSize(3)}
                    color={AppColors.GRAY}
                  />
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Container>
  );
};

export default Profile;
