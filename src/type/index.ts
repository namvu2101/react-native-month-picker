import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type TLanguage = 'vi' | 'ja' | 'en';
export type TProps = { textStyle?: TextStyle; style?: ViewStyle };
export type DateType = Date | string; // YYYY/MM || YYYY/MM/DD
export type TMonthPickerProps = {
  style?: ViewStyle;
  containerStyle?: StyleProp<ViewStyle>;
  headerStyle?: TProps;
  monthStyle?: TProps;
  yearStyle?: TProps;
  buttonStyle?: TextStyle;
  buttonText?: string;
  local?: TLanguage;
  valueInit?: DateType;
  minDate?: DateType;
  maxDate?: DateType;
  onSelected?: (date: string) => void;
};
export type TMonthPicker = {
  type: 'month' | 'year';
  year: number;
  month: number;
};

export type TYearProps = {
  yearStyle?: TProps;
  minDate?: DateType;
  maxDate?: DateType;
};
export type TMonthProps = {
  monthStyle?: TProps;
  minDate?: DateType;
  maxDate?: DateType;
};
