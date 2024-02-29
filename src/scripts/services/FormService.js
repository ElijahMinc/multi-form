import {
  errorMessageInvalidEmail,
  errorMessageInvalidFileFormat,
  errorMessageInvalidFileSize,
  errorMessageRequiredField,
} from '../constants';

export class FormService {
  static NO_VALID_CLASS = 'no-valid';
  static FORM_HIDE_CLASS = 'hide';

  options = {
    initFormData: null,
    handleSubmit: async (formData, currentStep) => {},
    setValueOnInit: (input, valueFromInitData) => {},
    watch: (fieldName, fieldValue) => {},
    customValidateFields: (
      input,
      options = {
        isNotRequiredButMustValidate: false,
        configurationErrorHandling: {
          isEmpty: true,
          error: 0,
          errorMessage: '',
        },
      }
    ) => {},
  };

  constructor(
    formId,
    options = {
      handleSubmit: async (formData, currentStep) => {},
      setValueOnInit: (input, valueFromInitData) => {},
      watch: (fieldName, fieldValue) => {},
      customValidateFields: (
        input,
        options = {
          isNotRequiredButMustValidate: false,
          configurationErrorHandling: {
            isEmpty: true,
            error: 0,
            errorMessage: '',
          },
        }
      ) => {},
      initFormData: null,
    }
  ) {
    this.$form = document.querySelector(`#${formId}`);
    if (!this.$form) return; //! We are not working without form which are wrapper for all logic!

    this.options = options;

    this.#setupForm();

    if (this.options.initFormData) {
      this.initForm(this.options.initFormData);
    }
  }

  static getRequireFieldBlock(input) {
    if (input.classList.contains('_require')) return input;

    const requireFieldBlock = input.closest('._require');
    return requireFieldBlock;
  }

  static setSuccessRequire(input) {
    let fieldBlock = FormService.getRequireFieldBlock(input);

    if (!fieldBlock) {
      let validatedFieldInAnyCase = FormService.getValidateFieldBlock(input);

      fieldBlock = validatedFieldInAnyCase;
    }

    if (!fieldBlock) return;

    fieldBlock.setAttribute('data-success', '');
  }

  static isInvalidFormat(file, validFormats) {
    const formats = validFormats || [
      'image/jpeg',
      'image/png',
      'image/webp',
      'application/msword',
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
    ];

    return !formats.includes(file.type);
  }

  static isInvalidSize(file, validMb = 20) {
    return file.size > validMb * 1024 * 1024 || file.size === 0;
  }

  static removeSuccessRequire(input) {
    const fieldBlock = FormService.getRequireFieldBlock(input);
    if (!fieldBlock) return;

    fieldBlock.removeAttribute('data-success');
  }

  static cancelError(input) {
    let fieldBlock = FormService.getRequireFieldBlock(input);

    if (!fieldBlock) {
      let validatedFieldInAnyCase = FormService.getValidateFieldBlock(input);

      fieldBlock = validatedFieldInAnyCase;
    }

    if (!fieldBlock) return;

    const errorMessage = fieldBlock.querySelector(
      '.fields-block__no-valid-message'
    );

    if (fieldBlock.classList.contains(FormService.NO_VALID_CLASS)) {
      fieldBlock.classList.remove(FormService.NO_VALID_CLASS);
    }

    FormService.setSuccessRequire(input);

    if (!errorMessage) return;

    errorMessage.style.display = 'none';
  }

  static setError(input, messageError) {
    let fieldBlock = FormService.getRequireFieldBlock(input);

    if (!fieldBlock) {
      let validatedFieldInAnyCase = FormService.getValidateFieldBlock(input);

      fieldBlock = validatedFieldInAnyCase;
    }

    if (!fieldBlock) return;

    const errorMessage = fieldBlock.querySelector(
      '.fields-block__no-valid-message'
    );

    if (fieldBlock.classList.contains(FormService.NO_VALID_CLASS)) return;

    fieldBlock.classList.add(FormService.NO_VALID_CLASS);
    FormService.removeSuccessRequire(input);

    if (!errorMessage) return;

    errorMessage.style.display = 'block';
    errorMessage.textContent = messageError ?? '';
  }

  static emailTest(input) {
    return !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      input.value
    );
  }

  hide() {
    this.$form.classList.add(FormService.FORM_HIDE_CLASS);
  }

  show() {
    this.$form.classList.remove(FormService.FORM_HIDE_CLASS);
  }

  static hideFormById(formId) {
    const form = document.querySelector(`#${formId}`);
    if (!form) return;

    form.classList.add(FormService.FORM_HIDE_CLASS);
  }

  static showFormById(formId) {
    const form = document.querySelector(`#${formId}`);
    if (!form) return;

    form.classList.remove(FormService.FORM_HIDE_CLASS);
  }

  static toggleShowHideFormById(formId) {
    const form = document.querySelector(`#${formId}`);
    if (!form) return;

    form.classList.toggle(FormService.FORM_HIDE_CLASS);
  }

  static setConfigurationErrorMessage(configurationErrorHandling, message) {
    Object.entries(configurationErrorHandling).forEach(([key]) => {
      if (key === 'errorMessage') {
        configurationErrorHandling[key] = message || '';
      }
    });

    configurationErrorHandling.isEmpty = false;
    configurationErrorHandling.errors = ++configurationErrorHandling.errors;
  }

  validateFields(inputs) {
    const configurationErrorHandling = {
      errors: 0,
      isEmpty: false,
      errorMessage: '',
    };

    inputs.forEach((input) => {
      FormService.cancelError(input);

      const isNotRequiredButMustValidate =
        input.classList.contains('_validate') || !input.closest('._require');

      if (!input.value.length && !isNotRequiredButMustValidate) {
        configurationErrorHandling.errors = ++configurationErrorHandling.errors;
        configurationErrorHandling.isEmpty = true;
        configurationErrorHandling.errorMessage = 'Required field';

        if (!!this.options?.customValidateFields) {
          this.options?.customValidateFields(input, {
            isNotRequiredButMustValidate,
            configurationErrorHandling,
          });
        }

        return {
          error: configurationErrorHandling.errors,
          errorMessage: configurationErrorHandling.errorMessage,
          isEmpty: configurationErrorHandling.isEmpty,
        };
      }

      if (!input.value && isNotRequiredButMustValidate) {
        configurationErrorHandling.errorMessage = '';
        configurationErrorHandling.errors = 0;

        if (!!this.options?.customValidateFields) {
          this.options?.customValidateFields(input, {
            isNotRequiredButMustValidate,
            configurationErrorHandling,
          });
        }

        return {
          error: configurationErrorHandling.errors,
          errorMessage: configurationErrorHandling.errorMessage,
          isEmpty: configurationErrorHandling.isEmpty,
        };
      }

      if (input.type === 'radio') {
        const wrapperContainer = FormService.getRequireFieldBlock(input);

        if (!wrapperContainer) return;

        const isSomeoneChecked = Array.from(
          wrapperContainer.querySelectorAll('input')
        ).some((input) => input.checked);

        if (!isSomeoneChecked && !isNotRequiredButMustValidate) {
          configurationErrorHandling.isEmpty = true;
          configurationErrorHandling.errors =
            ++configurationErrorHandling.errors;
          configurationErrorHandling.errorMessage = '';
        }
      }

      if (input.type === 'checkbox') {
        const wrapperContainer = FormService.getRequireFieldBlock(input);

        if (!wrapperContainer) return;

        const isSomeoneChecked = Array.from(
          wrapperContainer.querySelectorAll('input')
        ).some((input) => input.checked);

        if (!isSomeoneChecked && !isNotRequiredButMustValidate) {
          configurationErrorHandling.isEmpty = true;
          configurationErrorHandling.errors =
            ++configurationErrorHandling.errors;
          configurationErrorHandling.errorMessage = '';
        }
      }

      if (input.type === 'email') {
        if (FormService.emailTest(input)) {
          configurationErrorHandling.isEmpty = false;
          configurationErrorHandling.errors =
            ++configurationErrorHandling.errors;
          configurationErrorHandling.errorMessage = errorMessageInvalidEmail;
        }

        if (!input.value.length && !isNotRequiredButMustValidate) {
          configurationErrorHandling.isEmpty = true;
          configurationErrorHandling.errors =
            ++configurationErrorHandling.errors;
          configurationErrorHandling.errorMessage = errorMessageRequiredField;
        }
      }

      if (input.type === 'file') {
        const file = input.files[0];
        if (!file) {
          configurationErrorHandling.isEmpty = true;
        }

        if (!file && !isNotRequiredButMustValidate) {
          configurationErrorHandling.errors =
            ++configurationErrorHandling.errors;
          configurationErrorHandling.errorMessage = '';
        } else if (FormService.isInvalidFormat(file)) {
          configurationErrorHandling.isEmpty = false;
          configurationErrorHandling.errors =
            ++configurationErrorHandling.errors;
          configurationErrorHandling.errorMessage =
            errorMessageInvalidFileFormat;
        } else if (FormService.isInvalidSize(file)) {
          configurationErrorHandling.isEmpty = false;
          configurationErrorHandling.errors =
            ++configurationErrorHandling.errors;
          configurationErrorHandling.errorMessage = errorMessageInvalidFileSize;
        }
      }

      if (!!this.options?.customValidateFields) {
        this.options?.customValidateFields(input, {
          isNotRequiredButMustValidate,
          configurationErrorHandling,
        });
      }
    });
    return {
      error: configurationErrorHandling.errors,
      errorMessage: configurationErrorHandling.errorMessage,
      isEmpty: configurationErrorHandling.isEmpty,
    };
  }

  static getValidateFieldBlock(input) {
    if (input.classList.contains('_field')) return input;

    const validateFieldBlock = input.closest('._field');
    return validateFieldBlock;
  }

  static setEmpty(input) {
    let fieldBlock = FormService.getRequireFieldBlock(input);

    if (!fieldBlock) {
      let validatedFieldInAnyCase = FormService.getValidateFieldBlock(input);

      fieldBlock = validatedFieldInAnyCase;
    }

    if (!fieldBlock) return;

    fieldBlock.setAttribute('data-empty', '');
  }

  static notEmpty(input) {
    let fieldBlock = FormService.getRequireFieldBlock(input);

    if (!fieldBlock) {
      let validatedFieldInAnyCase = FormService.getValidateFieldBlock(input);

      fieldBlock = validatedFieldInAnyCase;
    }

    if (!fieldBlock) return;

    fieldBlock.removeAttribute('data-empty');
  }

  handleValidateInput(input) {
    const { error, errorMessage, isEmpty } = this.validateFields([input]);

    !!error
      ? FormService.setError(input, errorMessage)
      : FormService.cancelError(input);

    isEmpty ? FormService.setEmpty(input) : FormService.notEmpty(input);

    return { error, errorMessage };
  }

  initForm(fieldBlock, initData) {
    if (!initData) return;

    let input = fieldBlock.querySelector('input');

    if (fieldBlock.classList.contains('fields-block__textarea')) {
      input = fieldBlock.querySelector('textarea');
    }

    if (!input) return;

    const inputName = input.name;

    const valueFromInitDataByInputName = initData?.[inputName] || '';

    if (!valueFromInitDataByInputName) return;

    if (input.classList.contains('vscomp-hidden-input')) {
      const vcCompCustomSelect = input.closest('.vscom-custom-select');
      vcCompCustomSelect.setValue(valueFromInitDataByInputName);
      FormService.setSuccessRequire(input);

      this.options?.setValueOnInit?.(input);
      return;
    }

    if (input.type === 'tel') {
      this.options?.setValueOnInit?.(input, valueFromInitDataByInputName);
      FormService.setSuccessRequire(input);
      return;
    }

    if (input.type === 'file') {
      this.options?.setValueOnInit?.(input);
      //! INIT FILE
      return;
    }

    const inputByName = this.$form.querySelectorAll(`[name="${inputName}"`);

    if (inputByName.length === 1) {
      inputByName[0].value = valueFromInitDataByInputName;

      if (inputByName[0].type === 'checkbox') {
        inputByName[0].checked = true;
      }

      this.options?.setValueOnInit?.(input);
      FormService.setSuccessRequire(input);

      return;
    }

    if (inputByName.length > 1) {
      const inputs = inputByName;
      const isRadio = inputs[0].type === 'radio';

      if (isRadio) {
        inputs.forEach((inp) => {
          if (inp.value === valueFromInitDataByInputName) {
            inp.checked = true;
            FormService.setSuccessRequire(inp);
          }
        });
      }
      return;
    }
  }

  #setupForm() {
    this.$form.querySelectorAll('input').forEach((input) => {
      if (input.classList.contains('vscomp-search-input')) return;

      switch (input.type) {
        case 'checkbox':
          input.addEventListener('change', () => {
            this.options?.watch?.(input.name, input.value);
            this.handleValidateInput(input);
          });
          break;

        case 'radio':
          input.addEventListener('change', () => {
            this.options?.watch?.(input.name, input.value);
            this.handleValidateInput(input);
          });
          break;

        case 'hidden':
          const vscompInputHidden = input.classList.contains(
            'vscomp-hidden-input'
          );
          if (!vscompInputHidden) break;

          const vscomCustomSelect = input.closest('.vscom-custom-select');

          vscomCustomSelect.addEventListener('change', () => {
            if (vscomCustomSelect.classList.contains('_after-prefetch')) {
              vscomCustomSelect.classList.remove('_after-prefetch');
              return;
            }

            const hiddenInput = vscomCustomSelect.querySelector(
              'input[type="hidden"]'
            );

            this.handleValidateInput(hiddenInput);
          });
          break;

        default:
          this.options?.watch &&
            input.addEventListener('input', () =>
              this.options?.watch?.(input.name, input.value)
            );

          input.addEventListener('blur', () => {
            this.options?.watch?.(input.name, input.value);
            this.handleValidateInput(input);
          });
      }
    });

    this.$form
      .querySelectorAll('textarea')
      .forEach((textarea) =>
        textarea.addEventListener('blur', () =>
          this.handleValidateInput(textarea)
        )
      );
  }
}
