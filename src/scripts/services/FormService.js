export class FormService {
  static NO_VALID_CLASS = 'no-valid';
  static FORM_HIDE_CLASS = 'hide';

  options = {
    initFormData: null,
    handleSubmit: async (formData, currentStep) => {},
    setValueOnInit: (input, valueFromInitData) => {},
  };

  constructor(
    formId,
    options = {
      handleSubmit: async (formData, currentStep) => {},
      setValueOnInit: (input, valueFromInitData) => {},
      initFormData: null,
    }
  ) {
    this.$form = document.querySelector(`#${formId}`);
    if (!this.$form) return; //! We are not working without form which are wrapper for all logic!

    this.options = options;

    this.#setupForm();

    console.log('this.options.initFormData', this.options.initFormData);
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
    const fieldBlock = FormService.getRequireFieldBlock(input);
    if (!fieldBlock) return;

    fieldBlock.setAttribute('data-success', '');
  }

  static isInvalidFormat(file, validFormats) {
    const formats = validFormats || [
      'application/x-dosexec',
      'application/x-httpd-php',
      'application/macbinary',
      'application/javascript',
      'application/postscript',
      'application/x-msdownload',
      'application/x-sql',
      'application/sql',
      'application/octet-stream',
      'application/xml',
      'application/bat',
      'application/x-bat',
      'application/x-msdos-program',
      'application/x-python-code',
      'chemical/x-cmdf',
      'text/html',
      'text/x-script.phyton',
      'text/javascript',
      'text/x-python-script',
      'text/x-python',
      'text/sql',
      'text/x-sql',
      'text/x-php',
      'text/asp',
    ];

    return formats.includes(file.type);
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
    const fieldBlock = FormService.getRequireFieldBlock(input);
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
    const fieldBlock = FormService.getRequireFieldBlock(input);
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
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
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

  validateFields(inputs) {
    let error = 0;

    let errorMessage = '';

    inputs.forEach((input) => {
      FormService.cancelError(input);

      if (!input.value.length) {
        ++error;
        errorMessage = 'Required field';
      }

      if (input.type === 'radio') {
        const wrapperContainer = FormService.getRequireFieldBlock(input);
        const isSomeoneChecked = Array.from(
          wrapperContainer.querySelectorAll('input')
        ).some((input) => input.checked);

        if (!isSomeoneChecked) {
          ++error;
          errorMessage = '';
        }
      }

      if (input.type === 'email') {
        if (!input.value.length) {
          ++error;
          errorMessage = 'Invalid email';
        }

        if (FormService.emailTest(input)) {
          ++error;
          errorMessage = 'Invalid email';
        }
      }

      if (input.type === 'file') {
        const file = input.files[0];

        if (!file) {
          ++error;
          errorMessage = '';
        } else if (FormService.isInvalidFormat(file)) {
          ++error;
          errorMessage = 'Invalid format';
        } else if (FormService.isInvalidSize(file)) {
          ++error;
          errorMessage = 'File is too large';
        }
      }

      if (input.type === 'text' && !input.matches('[data-date-of-birth]')) {
        if (!input.value.length) {
          ++error;
          errorMessage = 'Required field';
        }
      }

      if (input.matches('[data-date-of-birth]')) {
        const currentDate = new Date();
        const minDate = new Date('1952-12-01');

        const selectedDate = input.value;

        if (selectedDate.length !== 10) {
          ++error;
          errorMessage = 'Required field';
        }

        if (
          new Date(selectedDate) > currentDate ||
          new Date(selectedDate) < minDate
        ) {
          ++error;
          errorMessage = 'Invalid date of birth';
        }
      }

      if (input.type === 'tel') {
        const phoneValue = input.value;
        if (phoneValue.includes('_')) {
          ++error;
          errorMessage = 'Invalid phone';
        }
      }

      if (
        input.type === 'checkbox' ||
        input.matches('[data-checkbox-privacy-policy]')
      ) {
        const isChecked = input.checked;

        if (!isChecked) {
          ++error;
          errorMessage = '';
        }
      }
    });

    return { error, errorMessage };
  }

  handleValidateInput(input) {
    const { error, errorMessage } = this.validateFields([input]);

    !!error
      ? FormService.setError(input, errorMessage)
      : FormService.cancelError(input);

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

      this.options?.setValueOnInit(input);
      return;
    }

    if (input.type === 'tel') {
      this.options?.setValueOnInit(input, valueFromInitDataByInputName);
      FormService.setSuccessRequire(input);
      return;
    }

    if (input.type === 'file') {
      this.options?.setValueOnInit(input);
      //! INIT FILE
      return;
    }

    const inputByName = this.$form.querySelectorAll(`[name="${inputName}"`);
    console.log('inputByName', inputByName);

    if (inputByName.length === 1) {
      inputByName[0].value = valueFromInitDataByInputName;
      this.options?.setValueOnInit(input);
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
          input.addEventListener('change', () =>
            this.handleValidateInput(input)
          );
          break;

        case 'radio':
          input.addEventListener('change', () =>
            this.handleValidateInput(input)
          );
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

            console.log(
              'changed after prefetch data',
              vscomCustomSelect.classList.contains('_after-prefetch')
            );
            const hiddenInput = vscomCustomSelect.querySelector(
              'input[type="hidden"]'
            );
            this.handleValidateInput(hiddenInput);
          });
          break;

        default:
          input.addEventListener('blur', () => this.handleValidateInput(input));
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
