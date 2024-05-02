import { FormService } from './FormService';

export class MultiFormService extends FormService {
  ACTIVE_FORM_STEP_CLASS = 'form__step-active';
  ACTIVE_PROGRESS_STEP_CLASS = 'progressbar-step-active';

  options = {
    currentStep: 0,
    handleSuccessNextStep: async (formData, currentStep) => {},
    handleSubmit: async (formData, currentStep) => {},
    setValueOnInit: (input, valueFromInitData) => {},
    customValidateByStep: (inputField) => {}, // must return boolean
    watch: (fieldName, fieldValue) => {},

    initFormData: null,
  };

  constructor(
    formId,
    options = {
      currentStep: 0,
      handleSuccessNextStep: async (formData, currentStep) => {},
      handleSubmit: async (formData, currentStep) => {},
      watch: (fieldName, fieldValue) => {},

      setValueOnInit: (input, valueFromInitData) => {},
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
    const { handleSubmit, setValueOnInit, watch, ...restMultiFormOptions } =
      options;

    super(formId, {
      handleSubmit,
      setValueOnInit,
      watch,
      initFormData: null,
    });

    if (!this.$form) return;

    this.$steps = [...this.$form.querySelectorAll('[data-step]')];

    this.$progressSteps = [...this.$form.querySelectorAll('.progressbar-step')];

    this.options = {
      ...restMultiFormOptions,
      watch,
      handleSubmit,
      setValueOnInit,
    };

    this.currentStep =
      this.options?.currentStep ??
      this.$steps.findIndex((e) =>
        e.classList.contains(this.ACTIVE_FORM_STEP_CLASS)
      );

    if (this.options?.currentStep < 0) {
      this.currentStep = 0;
      this.$steps[this.currentStep].classList.add(this.ACTIVE_FORM_STEP_CLASS);
    }

    this.#setupMultiForm();

    this.inputFields = [];

    if (options.initFormData) {
      this.initMultiForm(options.initFormData);
    }
  }

  renderSteps() {
    this.$steps.forEach((step, index) => {
      step.classList.toggle(
        this.ACTIVE_FORM_STEP_CLASS,
        index === this.currentStep
      );
    });
  }

  renderProgress() {
    if (!this.$progressSteps.length) return;

    this.$progressSteps.forEach((progressStep, index) => {
      progressStep.classList.toggle(
        this.ACTIVE_PROGRESS_STEP_CLASS,
        index === this.currentStep
      );
    });
  }

  getRequireInputsByStep(step) {
    const stepContainer = this.$form.querySelector(`[data-step="${step}"]`);
    const requiredFields = stepContainer.querySelectorAll('._require');

    return requiredFields;
  }

  getAllFieldsByStep(step) {
    const stepContainer = this.$form.querySelector(`[data-step="${step}"]`);
    const requiredFields = stepContainer.querySelectorAll('._field');

    return requiredFields;
  }

  async getValuesByStep(step) {
    const data = {};
    let errors = 0;
    const fieldBlocks = this.getAllFieldsByStep(step + 1);
    let isValidStep = this.getValidateMultiForm();

    fieldBlocks.forEach((field) => {
      const input = getInputFromWrapperBlock(field);

      if (!input) return;

      const { error: validateError } = this.handleValidateInput(input);

      errors += validateError;
      isValidStep = !errors;
    });

    if (!isValidStep) {
      return { data, isValid: false };
    }

    function setInputValue(
      input,
      validateCb = (inputName, inputValue) => {
        return true; // by default
      } // you must returned true or false for set input
    ) {
      const inputName = input.name;
      const inputValue = input.value;

      if (input.type === 'radio') {
        const fieldBlock = input.closest('._field');
        const radios = fieldBlock.querySelectorAll('input');
        const checkedRadio = Array.from(radios).find((radio) => radio.checked);
        const isSetValueEnabled = validateCb(inputName, checkedRadio.value);

        if (!isSetValueEnabled) return;

        data[inputName] = checkedRadio.value;
        return;
      }

      if (input.type === 'file') {
        const isSetValueEnabled = validateCb(inputName, input.files[0]);

        if (!isSetValueEnabled) return;

        data[inputName] = input.files[0];

        return;
      }

      const isSetValueEnabled = validateCb(inputName, inputValue);

      if (!isSetValueEnabled) return;

      data[inputName] = inputValue;
    }

    const validateInputCb = (inputName, inputValue) => {
      try {
        const isCustomSetValueEnabled = this.options.customValidateByStep?.(
          inputName,
          inputValue
        );

        return isCustomSetValueEnabled ?? true;
      } catch (err) {
        // or we can THROW error
        return false;
      }
    };

    fieldBlocks.forEach((fieldBlock) => {
      if (fieldBlock.classList.contains('_require')) {
        const input = getInputFromWrapperBlock(fieldBlock);
        if (!input) return;

        setInputValue(input, validateInputCb);
      } else {
        const input = getInputFromWrapperBlock(fieldBlock);
        const isValidByDefault = true;
        setInputValue(input, () => isValidByDefault);
      }
    });

    return { data, isValid: true };
  }

  async handleSteps(e) {
    const target = e.target;

    if (!target.matches('[data-btn]')) return;

    let incrementor = 0;
    const btn = target.dataset.btn;
    const prevBtn = btn === 'prev';
    const nextPrev = btn === 'next';
    const submitBtn = btn === 'submit';

    function getInputFromWrapperBlock(requiredBlock) {
      let input = requiredBlock.querySelector('input');

      if (requiredBlock.classList.contains('fields-block__textarea')) {
        input = requiredBlock.querySelector('textarea');
      }

      if (!input) return null;

      return input;
    }

    if (submitBtn) {
      const { isValid, data } = await this.getValuesByStep(this.currentStep);

      if (!isValid) return;

      await this.options.handleSubmit?.(data, this.currentStep);

      return;
    }

    if (nextPrev) {
      const { isValid, data } = await this.getValuesByStep(this.currentStep);

      if (!isValid) return;

      await this.options.handleSuccessNextStep?.(data, this.currentStep);

      incrementor = 1;
    }

    if (prevBtn) {
      incrementor = -1;
    }

    this.currentStep += incrementor;

    this.renderSteps();
    this.renderProgress();
  }

  getValidateMultiForm() {
    const currentStepContainer = this.$form.querySelector(
      `[data-step="${this.currentStep + 1}"]`
    );

    function checkRequiredFieldsByCurrentStep() {
      const requiredFields = currentStepContainer.querySelectorAll('._require');
      const filledRequiredFields = Array.from(requiredFields).every((field) =>
        field.hasAttribute('data-success')
      );
      return filledRequiredFields;
    }

    return checkRequiredFieldsByCurrentStep();
  }

  initMultiForm(initData, initCallback) {
    if (!initData) return;

    this.$steps.forEach((_, formIdx) => {
      const step = formIdx + 1;
      const fieldBlocks = this.getAllFieldsByStep(step);

      // this.inputFields.push({
      //   [`step-${step}`]: [...fieldBlocks],
      // });

      fieldBlocks.forEach((fieldBlock) => this.initForm(fieldBlock, initData));
    });
  }

  getData() {
    let dataNodes = {};

    this.$steps.forEach((_, formIdx) => {
      const step = formIdx + 1;
      const fieldBlocks = this.getAllFieldsByStep(step);

      dataNodes = {
        [`step-${step}`]: Array.from(fieldBlocks).map((fieldBlock) => {
          const inputs = fieldBlock.querySelectorAll('input');

          if (!inputs.length === 1) {
            const checkedInput = inputs.filter((input) => !!input.checked);
            return {
              name: checkedInput?.name,
              value: checkedInput?.value,
            };
          }

          return {
            name: inputs[0].name,
            value: inputs[0].value,
          };
        }),
      };
    });

    return dataNodes;
  }

  #setupMultiForm() {
    this.$form.addEventListener('click', this.handleSteps.bind(this));

    this.renderSteps();
    this.renderProgress();
  }
}
