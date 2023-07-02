import IMask from 'imask';
import intlTelInput from 'intl-tel-input';

export const initMaskForPhoneInput = (phoneInput) => {
  const input = document.querySelector(phoneInput);

  if (!input) return { phoneIti: null, phoneInput: null };

  const phoneIti = intlTelInput(input, {
    utilsScript:
      'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js',
    allowDropdown: true,
    autoHideDialCode: false,
    autoPlaceholder: 'aggressive',
    customPlaceholder: null,
    dropdownContainer: null,
    formatOnDisplay: true,
    geoIpLookup: async function (callback) {
      const req = await fetch('https://ipinfo.io');
      console.log('req', req);
      // const reader = await req.json();

      // const readStream = await res.read();
      // console.log('reader', reader);
      //   const res = await req.json();
      //   console.log('res.country', res)
      //   const countryCode = (res && res.country) ? res.country : 'hu'
      //   callback(countryCode)
      callback('hu');
    },
    hiddenInput: '',
    initialCountry: 'auto',
    localizedCountries: null,
    nationalMode: false,
    onlyCountries: [],
    placeholderNumberType: 'MOBILE',
    preferredCountries: ['hu'],
    excludeCountries: ['ru'],
    separateDialCode: false,
  });

  phoneIti.promise.then(() => {
    const plus = '+';
    const defaultMask = `${plus}000000000000`;
    const instance = setMask(input, `${plus}000000000000`);

    function updateMask() {
      const placeholder = input.getAttribute('placeholder');
      let mask = plus;

      if (!!placeholder && !!placeholder.length) {
        const value = placeholder.replaceAll('-', ' ');
        let cleanPhoneMask = value
          .replace(/\D+/g, '')
          .split('')
          .map(() => '0')
          .join('');
        mask = `${plus}${cleanPhoneMask}`;
      }

      instance.updateOptions({ mask: !placeholder ? defaultMask : mask });
    }

    updateMask();

    input.addEventListener('input', updateMask);
  });

  function setMask(input, mask) {
    return IMask(input, {
      mask,
      placeholderChar: '_',
      lazy: false,
    });
  }

  return { input: phoneInput, phoneIti };
};
