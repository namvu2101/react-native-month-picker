import { View, Text, TouchableOpacity } from 'react-native';
import { HeaderSelector, MonthSelector, YearSelector } from './items';
import type { TMonthPickerProps, TMonthPicker } from './type';
import { useStateMonthPicker } from './modules/useStateMonthPicker';
import { useEffect } from 'react';
import { setLanguage } from './modules/useGetMonth';
import { Convert } from './convert';

export default function MonthPicker({
  containerStyle,
  headerStyle,
  monthStyle,
  yearStyle,
  buttonText = 'Submit',
  buttonStyle,
  local = 'en',
  valueInit,
  minDate,
  maxDate,
  onSelected,
}: Readonly<TMonthPickerProps>) {
  const [data, setData] = useStateMonthPicker();

  useEffect(() => {
    setLanguage(local);
  }, [local]);

  useEffect(() => {
    if (valueInit) {
      const defaultValue = Convert.valueInit(valueInit);
      setData(defaultValue as TMonthPicker);
    }
  }, [valueInit, setData]);

  const onSave = () => {
    const { year, month } = data;
    if (month + 1 < 10) {
      onSelected?.(`${year}/0${month + 1}`);
    } else {
      onSelected?.(`${year}/${month + 1}`);
    }
  };

  return (
    <View
      style={[
        {
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: 15,
          height: 300,
          justifyContent: 'center',
        },
        containerStyle,
      ]}
    >
      <HeaderSelector headerStyle={headerStyle} />
      <View
        style={{
          minHeight: 210,
          justifyContent: 'center',
          marginVertical: 10,
        }}
      >
        <YearSelector
          yearStyle={yearStyle}
          minDate={minDate}
          maxDate={maxDate}
        />
        <MonthSelector
          monthStyle={monthStyle}
          minDate={minDate}
          maxDate={maxDate}
        />
      </View>

      <TouchableOpacity onPress={onSave}>
        <Text
          style={[
            {
              textAlign: 'right',
              fontSize: 16,
              fontWeight: '400',
              color: 'blue',
            },
            buttonStyle,
          ]}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
