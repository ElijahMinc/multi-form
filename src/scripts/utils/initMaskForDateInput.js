import IMask from 'imask';

export const initMaskForDateInput = (selectorId) => {
  const input = document.querySelector(selectorId);

  if (!input) return null;

  const dateOfBirthMaskField = IMask(input, {
    mask: Date,
    pattern: 'YYYY.MM.DD',
    blocks: {
      YYYY: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: 9999,
      },
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
      },
      DD: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31,
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
  });

  return dateOfBirthMaskField;
};
