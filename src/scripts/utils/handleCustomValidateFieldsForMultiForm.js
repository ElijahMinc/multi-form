import {
  errorMessageDateOfBirth,
  errorMessagePhone,
  errorMessageRequiredField,
} from '../constants';

export function handleCustomValidateFieldsForMultiForm(
  input,
  { isNotRequiredButMustValidate, configurationErrorHandling } // errors, invalidField, isEmpty, errorMessage
) {
  if (input.type === 'text' && !input.matches('[data-date-of-birth]')) {
    if (!input.value.length && !isNotRequiredButMustValidate) {
      ++configurationErrorHandling.errors;
      configurationErrorHandling.invalidField = input;
      configurationErrorHandling.isEmpty = true;
      configurationErrorHandling.errorMessage = errorMessageRequiredField;
    } else {
      configurationErrorHandling.isEmpty = false;
    }
  }

  if (input.matches('[data-date-of-birth]')) {
    const currentDate = new Date();
    const minDate = new Date('1952-12-01');

    const selectedDate = input.value;

    if (isNotRequiredButMustValidate && selectedDate === 'YYYY.MM.DD') {
      configurationErrorHandling.isEmpty = true;
      return;
    }

    if (selectedDate.length !== 10) {
      configurationErrorHandling.isEmpty = true;
      configurationErrorHandling.errors = ++configurationErrorHandling.errors;
      configurationErrorHandling.invalidField = input;

      configurationErrorHandling.errorMessage = errorMessageRequiredField;
    } else {
      configurationErrorHandling.isEmpty = false;
    }

    if (
      selectedDate.includes('M') ||
      selectedDate.includes('D') ||
      selectedDate.includes('Y')
    ) {
      configurationErrorHandling.isEmpty = false;
      configurationErrorHandling.invalidField = input;
      configurationErrorHandling.errors = ++configurationErrorHandling.errors;
      configurationErrorHandling.errorMessage = errorMessageDateOfBirth;
    }

    if (
      new Date(selectedDate) > currentDate ||
      new Date(selectedDate) < minDate
    ) {
      configurationErrorHandling.isEmpty = false;
      configurationErrorHandling.invalidField = input;
      configurationErrorHandling.errors = ++configurationErrorHandling.errors;
      configurationErrorHandling.errorMessage = errorMessageDateOfBirth;
    }
  }

  if (input.matches('[data-age]')) {
    let selectedValue = parseInt(input.value);

    if (isNaN(selectedValue)) {
      selectedValue = 0;
    }

    if (isNotRequiredButMustValidate && selectedValue === 0) {
      configurationErrorHandling.isEmpty = true;
      configurationErrorHandling.errors = 0;
      configurationErrorHandling.errorMessage = '';

      return;
    }

    if (selectedValue === 0) {
      configurationErrorHandling.isEmpty = true;
      configurationErrorHandling.invalidField = input;
      configurationErrorHandling.errors = ++configurationErrorHandling.errors;
      configurationErrorHandling.errorMessage = errorMessageRequiredField;
    } else {
      configurationErrorHandling.isEmpty = false;
    }
  }

  if (input.matches('[data-input-tel]')) {
    const emptyFieldRegex = /^[^0-9]*$/;
    const phoneValue = input.value;
    if (phoneValue.includes('_')) {
      configurationErrorHandling.isEmpty = false;
      configurationErrorHandling.invalidField = input;
      configurationErrorHandling.errors = ++configurationErrorHandling.errors;
      configurationErrorHandling.errorMessage = errorMessagePhone;
    }

    if (emptyFieldRegex.test(phoneValue)) {
      configurationErrorHandling.isEmpty = true;
      configurationErrorHandling.invalidField = input;
      configurationErrorHandling.errors = ++configurationErrorHandling.errors;
      configurationErrorHandling.errorMessage = errorMessageRequiredField;
    } else {
      configurationErrorHandling.isEmpty = false;
    }

    return;
  }

  if (input.matches('[data-input-tel]')) {
    const emptyFieldRegex = /^[^0-9]*$/;
    const phoneValue = input.value;

    const secondPartValue = phoneValue.split(' ')[1];

    if (emptyFieldRegex.test(secondPartValue)) {
      if (isNotRequiredButMustValidate) return;

      configurationErrorHandling.isEmpty = true;
      configurationErrorHandling.invalidField = input;
      configurationErrorHandling.errors = ++configurationErrorHandling.errors;
      configurationErrorHandling.errorMessage = errorMessageRequiredField;

      return;
    }

    if (secondPartValue.includes('_')) {
      configurationErrorHandling.isEmpty = false;
      configurationErrorHandling.invalidField = input;
      configurationErrorHandling.errors = ++configurationErrorHandling.errors;
      configurationErrorHandling.errorMessage = errorMessagePhone;
    }

    return;
  }

  if (
    input.type === 'checkbox' ||
    input.matches('[data-checkbox-privacy-policy]')
  ) {
    const isChecked = input.checked;

    if (isNotRequiredButMustValidate) return;

    if (!isChecked) {
      configurationErrorHandling.isEmpty = true;
      configurationErrorHandling.invalidField = input;
      configurationErrorHandling.errors = ++configurationErrorHandling.errors;
      configurationErrorHandling.errorMessage = '';
    } else {
      configurationErrorHandling.isEmpty = true;
    }
  }
}
