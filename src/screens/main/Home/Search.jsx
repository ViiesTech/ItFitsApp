import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Container from '../../../components/Container';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import AuthHeader from '../../../components/AuthHeader';
import AppTextInput from '../../../components/AppTextInput';
import AppText from '../../../components/AppText';
import LineBreak from '../../../components/LineBreak';
import Octicons from 'react-native-vector-icons/Octicons';

const Search = () => {
  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Search'}
          isChange={true}
          centerTextFontBold={true}
        />
        <AppTextInput
          inputPlaceHolder={'Find what you are looking for'}
          borderBottomWidth={1}
          placeholderTextColor={AppColors.BLACK}
        />
        <LineBreak space={2} />
        <AppText
          title={'Recent Searches'}
          textColor={AppColors.BLACK}
          textSize={2}
          textFontWeight
          textAlignment={'center'}
        />

        <LineBreak space={4} />

        <View style={{ gap: responsiveHeight(2) }}>
          <TouchableOpacity>
            <AppTextInput
              inputPlaceHolder={'Hand bag'}
              borderBottomWidth={1}
              placeholderTextColor={AppColors.BLACK}
              inputWidth={80}
              editable={false}
              rightIcon={
                <Octicons
                  name={'arrow-right'}
                  size={responsiveFontSize(3)}
                  color={AppColors.BLACK}
                />
              }
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AppTextInput
              inputPlaceHolder={'Clutches'}
              borderBottomWidth={1}
              placeholderTextColor={AppColors.BLACK}
              inputWidth={80}
              editable={false}
              rightIcon={
                <Octicons
                  name={'arrow-right'}
                  size={responsiveFontSize(3)}
                  color={AppColors.BLACK}
                />
              }
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AppTextInput
              inputPlaceHolder={'Women watches'}
              borderBottomWidth={1}
              placeholderTextColor={AppColors.BLACK}
              inputWidth={80}
              editable={false}
              rightIcon={
                <Octicons
                  name={'arrow-right'}
                  size={responsiveFontSize(3)}
                  color={AppColors.BLACK}
                />
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Search;
