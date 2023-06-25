export class Form {
  static NO_VALID_CLASS = 'no-valid';

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
  }

  getRequireFieldBlock(input) {
    if (input.classList.contains('_require')) return input;

    const requireFieldBlock = input.closest('._require');
    return requireFieldBlock;
  }

  setSuccessRequire(input) {
    const fieldBlock = this.getRequireFieldBlock(input);
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

  removeSuccessRequire(input) {
    const fieldBlock = this.getRequireFieldBlock(input);
    if (!fieldBlock) return;

    fieldBlock.removeAttribute('data-success');
  }

  cancelError(input) {
    const fieldBlock = this.getRequireFieldBlock(input);
    if (!fieldBlock) return;

    const errorMessage = fieldBlock.querySelector(
      '.fields-block__no-valid-message'
    );

    if (fieldBlock.classList.contains(Form.NO_VALID_CLASS)) {
      fieldBlock.classList.remove(Form.NO_VALID_CLASS);
    }

    this.setSuccessRequire(input);

    if (!errorMessage) return;
    errorMessage.style.display = 'none';
  }

  setError(input, messageError) {
    const fieldBlock = this.getRequireFieldBlock(input);
    if (!fieldBlock) return;

    const errorMessage = fieldBlock.querySelector(
      '.fields-block__no-valid-message'
    );

    if (fieldBlock.classList.contains(Form.NO_VALID_CLASS)) return;

    fieldBlock.classList.add(Form.NO_VALID_CLASS);
    this.removeSuccessRequire(input);

    if (!errorMessage) return;

    errorMessage.style.display = 'block';
    errorMessage.textContent = messageError ?? '';
  }

  static emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  validateFields(inputs) {
    let error = 0;

    let errorMessage = '';

    inputs.forEach((input) => {
      this.cancelError(input);

      if (!input.value.length) {
        ++error;
        errorMessage = 'Required field';
      }

      if (input.type === 'radio') {
        const wrapperContainer = this.getRequireFieldBlock(input);
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

        if (Form.emailTest(input)) {
          ++error;
          errorMessage = 'Invalid email';
        }
      }

      if (input.type === 'file') {
        const file = input.files[0];

        if (!file) {
          ++error;
          errorMessage = '';
        } else if (Form.isInvalidFormat(file)) {
          ++error;
          errorMessage = 'Invalid format';
        } else if (Form.isInvalidSize(file)) {
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

    !!error ? this.setError(input, errorMessage) : this.cancelError(input);

    return { error, errorMessage };
  }

  initForm(initData, initCallback) {
    if (!initData) return;

    // const fieldBlocks = this.getAllFieldsByStep(step);

    // fieldBlocks.forEach(fieldBlock => {

    //       let input = fieldBlock.querySelector('input');

    //       if(fieldBlock.classList.contains('fields-block__textarea')){
    //             input = fieldBlock.querySelector('textarea')
    //       }

    //       if(!input) return;

    //       const inputName = input.name;

    //       const valueFromInitDataByInputName = initData?.[inputName] || ''

    //       if(!valueFromInitDataByInputName) return;

    //       if(input.classList.contains('vscomp-hidden-input')){
    //             const vcCompCustomSelect = input.closest('.vscom-custom-select');
    //             vcCompCustomSelect.setValue(valueFromInitDataByInputName);
    //             MultiForm.setSuccessRequire(input);

    //             this.options?.setValueOnInit(input);
    //             return;
    //       }

    //       if(input.type === 'tel'){
    //          this.options?.setValueOnInit(input, valueFromInitDataByInputName);
    //          MultiForm.setSuccessRequire(input);
    //          return;
    //       }

    //       if(input.type === 'file') {
    //          this.options?.setValueOnInit(input);
    //          //! INIT FILE
    //          return;
    //       }

    //       const inputByName = this.$form.querySelectorAll(`[name="${inputName}"`);
    //       console.log('inputByName', inputByName)

    //       if(inputByName.length === 1){
    //          inputByName[0].value = valueFromInitDataByInputName;
    //          this.options?.setValueOnInit(input);
    //          MultiForm.setSuccessRequire(input);

    //          return;
    //       }

    //       if(inputByName.length > 1){
    //          const inputs = inputByName;
    //          const isRadio = inputs[0].type === 'radio';

    //          if(isRadio){
    //             inputs.forEach(inp => {
    //                if(inp.value === valueFromInitDataByInputName){
    //                   inp.checked = true
    //                   MultiForm.setSuccessRequire(inp);
    //                }
    //             })
    //          }
    //          return;
    //       }

    // });
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
