import { Text, TouchableOpacity } from 'react-native';
import type { TProps } from '../type';
import { useGetMonth } from '../modules/useGetMonth';
import { useStateMonthPicker } from '../modules/useStateMonthPicker';

export function HeaderSelector({
  headerStyle,
}: Readonly<{ headerStyle?: TProps }>) {
  const [data, setData] = useStateMonthPicker();
  const month = data.month;
  const year = data.year;
  const { monthNamesShort } = useGetMonth();
  const nameMonthSort = monthNamesShort[month];

  const onPress = () => {
    if (data.type === 'month') {
      setData({ ...data, type: 'year' });
    } else {
      setData({ ...data, type: 'month' });
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        { flexDirection: 'row', justifyContent: 'center', width: '100%' },
        headerStyle?.style,
      ]}
    >
      <Text
        style={[{ fontSize: 16, fontWeight: 'bold' }, headerStyle?.textStyle]}
      >
        {` ${nameMonthSort} `}
      </Text>
      <Text
        style={[{ fontSize: 16, fontWeight: 'bold' }, headerStyle?.textStyle]}
      >
        {year}
      </Text>
    </TouchableOpacity>
  );
}
