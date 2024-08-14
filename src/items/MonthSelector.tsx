import { Text, View, Pressable } from 'react-native';
import dayjs from 'dayjs';
import { useGetMonth } from '../modules/useGetMonth';
import type { TMonthProps } from '../type';
import { useStateMonthPicker } from '../modules/useStateMonthPicker';

export function MonthSelector({
  monthStyle,
  minDate,
  maxDate,
}: Readonly<TMonthProps>) {
  const { monthNames } = useGetMonth();

  const [data, setData] = useStateMonthPicker();
  const maxMonth = dayjs(maxDate).month();
  const minMonth = dayjs(minDate).month();
  const maxYear = dayjs(maxDate).year();
  const minYear = dayjs(minDate).year();
  const type = data.type;
  const month = data.month;
  const year = data.year;
  const onSelectMonth = async (index: number) => {
    setData({ ...data, month: index, type: 'year' });
  };

  if (type === 'year') {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          height: 198,
        }}
      >
        {monthNames.map((item, index) => {
          let bgActive;
          let textActive;
          let disable = false;
          if (index === month) {
            bgActive = {
              backgroundColor: 'blue',
            };
            textActive = { color: 'white' };
          }
          if (
            (maxDate && year === maxYear && index > maxMonth) ||
            (minDate && year === minYear && index < minMonth)
          ) {
            disable = true;
            bgActive = {
              backgroundColor: '#ccc',
            };
            textActive = { color: '#a0a0a0' };
          }
          return (
            <Pressable
              key={item}
              disabled={disable}
              style={{ width: '33.3%' }}
              onPress={() => onSelectMonth(index)}
              accessibilityRole="button"
              accessibilityLabel={item}
            >
              <View
                style={[
                  {
                    paddingVertical: 15,
                    margin: 2,
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: 'blue',
                    backgroundColor: 'white',
                  },
                  monthStyle?.style,
                  bgActive,
                ]}
              >
                <Text key={item} style={[monthStyle?.textStyle, textActive]}>
                  {item}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
