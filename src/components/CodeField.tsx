import { useState } from 'react';
import { Platform, StyleSheet, Text } from 'react-native'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
import { AppColors, responsiveHeight, responsiveWidth } from '../utils';

const CodeInput = () => {
  const [value, setValue] = useState('');
  const CELL_COUNT = 4;
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      autoComplete={Platform.select({
        android: 'sms-otp',
        default: 'one-time-code',
      })}
      testID="my-code-input"
      renderCell={({ index, symbol, isFocused }) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
}

export default CodeInput

const styles = StyleSheet.create({
  codeFieldRoot: { padding: responsiveWidth(3), paddingHorizontal: 0 },
  cell: {
    // flex: 1,
    alignSelf: 'center',
    width: responsiveWidth(18),
    color: AppColors.BLACK,
    height: responsiveHeight(8),
    // padding: 15,
    textAlign: 'center',
    paddingTop: 15,
    // lineHeight: 38,
    borderRadius: 10,
    fontSize: 24,
    borderWidth: 1,
    borderColor: AppColors.BLACK,
  },
  focusCell: {
    borderColor: AppColors.BLACK,
    color: AppColors.BLACK,
    backgroundColor: AppColors.LIGHTGRAY
  },
})