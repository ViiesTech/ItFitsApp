/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import Container from '../../../components/Container';
import AuthHeader from '../../../components/AuthHeader';
import { AppColors, responsiveHeight, responsiveWidth } from '../../../utils';
import SVGXml from '../../../components/SVGXML';
import { AppIcons } from '../../../assets/icons';
import AppText from '../../../components/AppText';
import { AppImages } from '../../../assets/images';
import ProductCard from '../../../components/ProductCard';
import LineBreak from '../../../components/LineBreak';

const topSell = [
  {
    id: 1,
    title: 'Mens Harrington Jacket',
    price: '$148.00',
    src: AppImages.top_sell_two,
  },
  {
    id: 2,
    title: 'Mens Harrington Jacket',
    price: '$55.00',
    offPrice: '$100.97',
    src: AppImages.top_sell_one,
  },
  {
    id: 3,
    title: 'Mens Harrington Jacket',
    price: '$148.00',
    src: AppImages.top_sell_two,
  },
];

const SelectedCategorie = () => {
  return (
    <Container style={{ paddingHorizontal: responsiveWidth(4) }}>
      <AuthHeader
        centerText={'Hoodies'}
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
      <AppText
        title={'Hoodies (240)'}
        textColor={AppColors.BLACK}
        textSize={1.8}
      />
      <LineBreak space={1} />
      <FlatList
        data={topSell}
        numColumns={2}
        ItemSeparatorComponent={<LineBreak space={1} />}
        columnWrapperStyle={{ gap: responsiveHeight(1) }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            price={item.price}
            imageSrc={item.src}
            offPrice={item.offPrice}
          />
        )}
      />
    </Container>
  );
};

export default SelectedCategorie;
