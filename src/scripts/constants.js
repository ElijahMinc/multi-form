import IMask from "imask";

export const englishLevelSelectOptions = [
  {
    label: 'A1',
    value: '4',
  },
  {
    label: 'A2',
    value: '5',
  },
  {
    label: 'B1',
    value: '6',
  },
  {
    label: 'B2',
    value: '7',
  },
  {
    label: 'C1',
    value: '8',
  },
  {
    label: 'C2',
    value: '9',
  },
];

export const yearSelectOptions = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
];

export const errorMessageDateOfBirth = 'Invalid date of birth';
export const errorMessagePhone = 'Invalid phone';
export const errorMessageRequiredField = 'Required field';
export const errorMessageInvalidEmail = 'Invalid email';
export const errorMessageInvalidFileFormat = 'Invalid format';
export const errorMessageInvalidFileSize = 'File is too large';

export const dateOfBirthOptions = {
  mask: Date,
  pattern: 'YYYY.MM.DD',
  lazy: false,
  blocks: {
    YYYY: {
      mask: IMask.MaskedRange,
      from: 1932,
      to: 2090,
      placeholderChar: 'Y',
    },
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      placeholderChar: 'M',
    },
    DD: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
      placeholderChar: 'D',
    },
  },
  format: function (date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return year + '.' + month + '.' + day;
  },
  parse: function (str) {
    const yearMonthDay = str.split('.');
    const year = parseInt(yearMonthDay[0], 10);
    const month = parseInt(yearMonthDay[1], 10) - 1;
    const day = parseInt(yearMonthDay[2], 10);
    return new Date(year, month, day);
  },
};
