import { View, Text } from 'react-native';
import React from 'react';
import Container from './../../../components/Container';
import AuthHeader from './../../../components/AuthHeader';
import { responsiveHeight, responsiveWidth } from '../../../utils';
import AppText from '../../../components/AppText';

const TermsConditions = () => {
  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Terms & Conditions'}
          isChange={true}
          centerTextFontBold={true}
        />
      </View>
      <View style={{ height: 2, width: '100%', backgroundColor: '#E1E1D9' }} />
      <View style={{ padding: responsiveHeight(2), gap: responsiveHeight(2) }}>
        <AppText
          textSize={1.9}
          textColor="#525252"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <AppText
          textSize={1.9}
          textColor="#525252"
          title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        />
        <AppText
          textSize={1.9}
          textColor="#525252"
          title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
        />
      </View>
    </Container>
  );
};

export default TermsConditions;
