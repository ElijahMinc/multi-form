import { MultiFormService } from '../services/MultiFormService';
import '../../styles/index.scss';

async function initForm() {
  const baseForm = new MultiFormService('form', {
    handleSubmit: async (formData) => {
      console.log('formData', formData);
    },
    customValidateFields: (
      input,
      { isNotRequiredButMustValidate, configurationErrorHandling }
    ) => {},
    watch: (fieldName, fieldValue) => {
      console.log({
        [fieldName]: fieldValue,
      });
    },
    setValueOnInit: (input, valueFromInitData) => {},
    initFormData: {
      first_name: 'example 1',
      // last_name: 'example 2',
      email: '123',
      degree: '1',
      agree: 'on',
    },
  });
}

initForm();
