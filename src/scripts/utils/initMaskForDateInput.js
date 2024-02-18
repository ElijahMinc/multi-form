import IMask from 'imask';
import { dateOfBirthOptions } from '../constants';

export const initMaskForDateInput = (selectorId) => {
  const input = document.querySelector(selectorId);

  if (!input) return null;

  const dateOfBirthMaskField = IMask(input, dateOfBirthOptions);

  return dateOfBirthMaskField;
};
