export class InformationPanelService {
  static ROOT_NODE_BY_ID = '#informations-stepper';
  static ACTIVE_CLASS = 'informations-stepper__item-active';
  static HIDE_ROOT_NODE_CLASS = 'hide';

  static informationStepsRoot = document.querySelector(
    InformationPanelService.ROOT_NODE_BY_ID
  );
  constructor(
    options = {
      handleContinueBtnClick: () => {},
      handleCancelBtnClick: () => {},
    }
  ) {
    if (!InformationPanelService) {
      console.error(`Not found informationStepsRoot`);

      return;
    }

    this.options = options;

    this.informationSteps =
      InformationPanelService.informationStepsRoot.querySelectorAll(
        '.informations-stepper__item'
      );

    this.#setup();
  }

  deleteActiveInformationSteps() {
    this.informationSteps.forEach((step) =>
      step.classList.remove(InformationPanelService.ACTIVE_CLASS)
    );
  }

  activeInformationStep(step) {
    step.classList.add(InformationPanelService.ACTIVE_CLASS);
  }

  static hide() {
    InformationPanelService.informationStepsRoot.classList.add(
      InformationPanelService.HIDE_ROOT_NODE_CLASS
    );
  }

  static show() {
    InformationPanelService.informationStepsRoot.classList.remove(
      InformationPanelService.HIDE_ROOT_NODE_CLASS
    );
  }

  static toggleShowHide() {
    InformationPanelService.informationStepsRoot.classList.toggle(
      InformationPanelService.HIDE_ROOT_NODE_CLASS
    );
  }

  handleInformationSteps(e) {
    const target = e.target;

    if (!target.matches('[data-btn]')) return;

    const btn = target.dataset.btn;

    const continueBtn = btn === 'continue';
    const cancelBtn = btn === 'cancel'; //??? what happen when i click cancel btn????

    if (continueBtn) {
      this.options.handleContinueBtnClick?.();

      return;
    }

    if (cancelBtn) {
      this.options.handleCancelBtnClick?.();

      return;
    }
  }

  getContinueInformationStep() {
    return this.informationSteps[0];
  }

  getExpiresInformationStep() {
    return this.informationSteps[1];
  }

  getSuccessInformationStep() {
    return this.informationSteps[2];
  }

  #setup() {
    InformationPanelService.informationStepsRoot.addEventListener(
      'click',
      this.handleInformationSteps.bind(this)
    );
  }
}
