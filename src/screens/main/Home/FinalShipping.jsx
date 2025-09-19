import React from 'react';
import { View, Text } from 'react-native';
import Container from '../../../components/Container';
import AuthHeader from '../../../components/AuthHeader';
import { responsiveWidth } from '../../../utils';

const FinalShipping = () => {
  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Shipping'}
          isChange={true}
          centerTextFontBold={true}
        />
        <Text>FinalShipping</Text>
      </View>
    </Container>
  );
};

export default FinalShipping;
