import type { DateType } from '../type';

export const Convert = {
  convertDateToYYYYMM(date: Date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year}/${month}`;
  },
  valueInit(date: DateType) {
    if (typeof date === 'object') {
      const newDate = this.convertDateToYYYYMM(date);
      let month = Number(newDate.slice(-1));
      if (month > 10) {
        month = Number(newDate.slice(-2));
      }
      return {
        type: 'month',
        month: month + 1,
        year: Number(newDate.slice(0, 4)),
      };
    } else {
      let month = Number(date.slice(-2));
      if (month < 10) {
        month = Number(date.slice(-1));
      }
      return {
        type: 'month',
        month: month - 1,
        year: Number(date.slice(0, 4)),
      };
    }
  },
};
