import { useEffect, useRef } from 'react';
import { View, Text, Pressable, FlatList } from 'react-native';
import dayjs from 'dayjs';
import type { TYearProps } from '../type';
import { useStateMonthPicker } from '../modules/useStateMonthPicker';

export function YearSelector({
  yearStyle,
  minDate,
  maxDate,
}: Readonly<TYearProps>) {
  const [data, setData] = useStateMonthPicker();
  const refScroll = useRef<FlatList>(null);
  const type = data.type;
  const year = data.year;

  const startYear = 1900;
  const years = Array.from({ length: 200 }, (_, i) => startYear + i);
  const index = years.findIndex((y) => y === year);
  const maxYear = dayjs(maxDate).year();
  const minYear = dayjs(minDate).year();

  useEffect(() => {
    if (index !== -1) {
      setTimeout(() => {
        refScroll.current?.scrollToIndex({
          animated: true,
          index: Math.floor(index / 3),
          viewPosition: 0,
        });
      }, 200);
    }
  }, [index]);

  if (type === 'month') {
    return null;
  }

  const renderItem = ({ item }: { item: number }) => {
    let bgActive;
    let textActive;
    let disable = false;
    if (item === year) {
      bgActive = {
        backgroundColor: 'blue',
      };
      textActive = { color: 'white' };
    }
    if ((maxDate && item > maxYear) || (minDate && item < minYear)) {
      disable = true;
      bgActive = {
        backgroundColor: '#ccc',
      };
      textActive = { color: '#a0a0a0' };
    }
    return (
      <Pressable
        key={item}
        style={{ width: '33.3%' }}
        disabled={disable}
        onPress={() => setData({ ...data, year: item })}
      >
        <View
          style={[
            {
              padding: 15,
              margin: 2,
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 8,
              borderColor: 'blue',
              backgroundColor: 'white',
            },
            yearStyle?.style,
            bgActive,
          ]}
        >
          <Text key={item} style={[yearStyle?.textStyle, textActive]}>
            {item}
          </Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        ref={refScroll}
        initialScrollIndex={Math.floor(index / 3)}
        getItemLayout={(_, index) => ({
          length: 50,
          offset: 52.5 * index,
          index,
        })}
        numColumns={3}
        data={years}
        renderItem={renderItem}
      />
    </View>
  );
}
