/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, FlatList, Image } from 'react-native';
import Container from '../../../components/Container';
import AuthHeader from '../../../components/AuthHeader';
import { AppColors, responsiveHeight, responsiveWidth } from '../../../utils';
import SVGXml from '../../../components/SVGXML';
import { AppIcons } from '../../../assets/icons';
import { AppImages } from '../../../assets/images';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppText';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { id: 1, title: 'Hoodies', src: AppImages.hoddie },
  { id: 2, title: 'Shorts', src: AppImages.short },
  { id: 3, title: 'Shoes', src: AppImages.shoe },
  { id: 4, title: 'Bag', src: AppImages.bag },
  { id: 5, title: 'Accessories', src: AppImages.accessories },
];

const ShopCategories = () => {
  const nav = useNavigation();
  return (
    <Container style={{ paddingHorizontal: responsiveWidth(4) }}>
      <AuthHeader
        centerText={'Shop by Categories'}
        isChange={true}
        centerTextFontBold={true}
        rightIcon={
          <TouchableOpacity
            style={{
              backgroundColor: AppColors.lightBlue,
              width: responsiveHeight(5.5),
              height: responsiveHeight(5.5),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
            }}
          >
            <SVGXml icon={AppIcons.bag} width={20} height={20} />
          </TouchableOpacity>
        }
      />
      <FlatList
        data={categories}
        ItemSeparatorComponent={<LineBreak space={1.5} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: AppColors.cardColor,
              borderRadius: 10,
              gap: responsiveWidth(2),
              paddingHorizontal: responsiveWidth(4),
              paddingVertical: responsiveHeight(1),
              alignItems: 'center',
            }}
            onPress={() => nav.navigate('SelectedCategorie')}
          >
            <Image
              source={item.src}
              style={{
                width: responsiveHeight(6),
                height: responsiveHeight(6),
                borderRadius: 100,
              }}
            />
            <LineBreak space={1} />
            <AppText
              title={item.title}
              textColor={AppColors.BLACK}
              textSize={2}
            />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default ShopCategories;
