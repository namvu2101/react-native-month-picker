import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import type { TMonthPicker } from '../type';

const listeners = new Set<any>();

const setType = (data: TMonthPicker) => {
  listeners.forEach((listener) => listener(data));
};

export function useStateMonthPicker(): [
  TMonthPicker,
  (data: TMonthPicker) => void,
] {
  const [data, setData] = useState<TMonthPicker>({
    type: 'month',
    year: dayjs().year(),
    month: dayjs().month(),
  });
  useEffect(() => {
    const handle = (newData: TMonthPicker) => {
      setData(newData);
    };
    listeners.add(handle);
    return () => {
      listeners.delete(handle);
    };
  }, []);
  return [data, setType];
}
