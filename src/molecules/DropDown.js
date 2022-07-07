import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {fonts, colors, margin} from '../styles/base.js';

const DropDown = ({data, label}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={selectedLanguage}
          dropdownIconColor={colors.primary}
          onValueChange={itemValue => setSelectedLanguage(itemValue)}>
          {data.map((item, index) => {
            return (
              <Picker.Item
                key={index}
                label={item.label}
                value={item.value}
                style={styles.pickerItem}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
};

export {DropDown};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: margin.md,
  },
  pickerItem: {
    color: colors.text,
    fontSize: fonts.sm,
    fontFamily: fonts.primary,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: colors.disabled2,
    borderRadius: 10,
  },
  picker: {},
  label: {
    color: colors.primary,
    fontSize: fonts.xs,
    fontFamily: fonts.primary,
    marginBottom: margin.xs,
  },
});
