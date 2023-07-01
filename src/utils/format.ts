import {
  format,
} from 'date-fns';

export const dateFormat = (date: Date | string | number) => {
  const dateToFormat = new Date(date);
  return format(dateToFormat, 'dd/MM/yyyy');
};

export const isDate = (value: string): boolean => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

  return dateRegex.test(value) || dateTimeRegex.test(value);
};
