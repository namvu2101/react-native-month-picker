import { useEffect, useState } from 'react';
import type { TLanguage } from '../type';

const listeners = new Set<(code: TLanguage) => void>();
export const setLanguage = (code: TLanguage) => {
  listeners.forEach((listener) => listener(code));
};

function useLanguage() {
  const [language, setLanguage] = useState<TLanguage>('en');
  useEffect(() => {
    listeners.add(setLanguage);
    return () => {
      listeners.delete(setLanguage);
    };
  }, []);
  return language;
}

export function useGetMonth() {
  const language = useLanguage();
  if (language === 'ja') {
    return {
      monthNames: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      monthNamesShort: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
    };
  }
  if (language === 'vi') {
    return {
      monthNames: [
        'Tháng 1',
        'Tháng 2',
        'Tháng 3',
        'Tháng 4',
        'Tháng 5',
        'Tháng 6',
        'Tháng 7',
        'Tháng 8',
        'Tháng 9',
        'Tháng 10',
        'Tháng 11',
        'Tháng 12',
      ],
      monthNamesShort: [
        'Thg 1',
        'Thg 2',
        'Thg 3',
        'Thg 4',
        'Thg 5',
        'Thg 6',
        'Thg 7',
        'Thg 8',
        'Thg 9',
        'Thg 10',
        'Thg 11',
        'Thg 12',
      ],
    };
  }
  return {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  };
}
