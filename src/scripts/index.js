import 'virtual-select-plugin/dist/virtual-select';
import { AttachFileService } from './services/AttachFileService';
import { IndexedDbService } from './services/IndexedDbService';
import { SpinnerService } from './services/SpinnerService';
import { MultiFormService } from './services/MultiFormService';
import { initMaskForDateInput } from './utils/initMaskForDateInput';
import { initMaskForPhoneInput } from './utils/initMaskForPhoneInput';
import { UserService } from './services/UserService';
import { InformationPanelService } from './services/InformationPanelService';
import { toggleRenderFormOrInformationPanel } from './utils/toggleRenderFormOrInformationPanel';
import { getEllapsedTimeStatus } from './utils/getEllapsedTimeStatus';
import { englishLevelSelectOptions, yearSelectOptions } from './constants';
import { FormService } from './services/FormService';

import '../styles/index.scss';
import { handleCustomValidateFieldsForMultiForm } from './utils/handleCustomValidateFieldsForMultiForm';

async function initApp() {
  const formWrapper = document.querySelector('.form');
  const form = formWrapper.querySelector('#form');

  const informationPanelWrapper = new InformationPanelService({
    handleContinueBtnClick: () => {
      toggleRenderFormOrInformationPanel();
    },
  });

  const sessionFromStorage = localStorage.getItem(
    `FORM_STEP-${window.location.pathname}`
  );

  if (!form) {
    console.error(`Not found form: ${form}`);

    return;
  }

  const userInfo = new IndexedDbService('userInfo', 1, {
    upgrade(db) {
      db.createObjectStore('userInfo');
    },
  });

  let user = null;
  let step = 0;

  if (sessionFromStorage) {
    const userSession = JSON.parse(sessionFromStorage);

    const timeExpired = getEllapsedTimeStatus(userSession.created_date);

    const continueStep = informationPanelWrapper.getContinueInformationStep();
    const expiresStep = informationPanelWrapper.getExpiresInformationStep();
    const successStep = informationPanelWrapper.getSuccessInformationStep();

    if (userSession.isFullyRegistrationSuccess) {
      informationPanelWrapper.deleteActiveInformationSteps();
      informationPanelWrapper.activeInformationStep(successStep);
      toggleRenderFormOrInformationPanel();
      form.remove();

      return;
    }

    if (timeExpired) {
      informationPanelWrapper.deleteActiveInformationSteps();
      informationPanelWrapper.activeInformationStep(expiresStep);
      await userInfoIndexedDb.del('info');
      toggleRenderFormOrInformationPanel();
      form.remove();
    } else {
      informationPanelWrapper.deleteActiveInformationSteps();
      informationPanelWrapper.activeInformationStep(continueStep);

      step = userSession.step;
      user = await userInfo.get('info');
      toggleRenderFormOrInformationPanel();
    }
  }

  let userInfoFromSession = {
    user,
    step,
  };

  await formLogic(userInfoFromSession);

  async function formLogic(dataFromSession) {
    const userFromSession = dataFromSession.user;
    const stepFromSession = dataFromSession.step;

    const userInfoIndexedDb = window['idb-userInfo'];

    const { _phoneInput, phoneIti } = initMaskForPhoneInput('#mobile-number');

    const $educationSelect = form.querySelector('#education-select');
    const $englishLevelSelect = form.querySelector('#english-level-select');
    const $yearSelect = form.querySelector('#year-select');

    VirtualSelect.init({
      ele: $englishLevelSelect,
      multiple: false,
      search: false,
      required: true,
      hideClearButton: true,
      name: 'english-level',
      placeholder: 'English level',
      options: englishLevelSelectOptions,
      showDropboxAsPopup: false,
    });

    VirtualSelect.init({
      ele: $educationSelect,
      multiple: false,
      search: false,
      required: false,
      hideClearButton: true,
      name: 'education-institution',
      placeholder: 'Educational Institution',
      options: [],
      allowNewOption: true,
      showDropboxAsPopup: false,
    });

    VirtualSelect.init({
      ele: $yearSelect,
      multiple: false,
      search: false,
      required: true,
      hideClearButton: true,
      name: 'year',
      placeholder: 'Year',
      options: yearSelectOptions,
      showDropboxAsPopup: false,
    });

    const file = new AttachFileService('upload-file', {
      handleChangeValidateInput: (fileInput) => {
        const { error, errorMessage } =
          multiForm.handleValidateInput(fileInput);

        if (!!error) {
          throw new Error(errorMessage);
        }
      },
      handleSuccessAttach: (fileInput) => {
        FormService.setSuccessRequire(fileInput);
      },
      handleCanceled: (fileInput) => {
        FormService.removeSuccessRequire(fileInput);
      },
    });

    const multiForm = new MultiFormService('form', {
      currentStep: stepFromSession || 0,
      customValidateFields: handleCustomValidateFieldsForMultiForm,
      handleSuccessNextStep: async (formData, currentStep) => {
        const userData = userFromSession
          ? { ...userFromSession, ...formData }
          : formData;

        const allUserData = await userInfoIndexedDb.get('info');

        const data = { ...allUserData, ...userData };

        await userInfoIndexedDb.set('info', data);

        localStorage.setItem(
          `FORM_STEP-${window.location.pathname}`,
          JSON.stringify({
            created_date: Date.now(),
            step: currentStep + 1,
            isFullyRegistrationSuccess: false,
          })
        );

        SpinnerService.showSpinner();

        try {
          await UserService.sendUserInfo(data);
        } catch (error) {
        } finally {
          SpinnerService.hideSpinner();
        }
      },
      handleSubmit: async (formData, currentStep) => {
        const userData = userFromSession
          ? { ...userFromSession, ...formData }
          : formData;

        const allUserData = await userInfoIndexedDb.get('info');

        let data = { ...allUserData, ...userData };

        await userInfoIndexedDb.set('info', { ...allUserData, ...userData });

        localStorage.setItem(
          `FORM_STEP-${window.location.pathname}`,
          JSON.stringify({
            created_date: Date.now(),
            step: currentStep,
            isFullyRegistrationSuccess: false,
          })
        );

        SpinnerService.showSpinner();

        try {
          const responseUser = await UserService.sendUserData(data);

          const successStep =
            informationPanelWrapper.getSuccessInformationStep();

          informationPanelWrapper.deleteActiveInformationSteps();
          informationPanelWrapper.activeInformationStep(successStep);
          toggleRenderFormOrInformationPanel();
          form.remove();

          localStorage.setItem(
            `FORM_STEP-${window.location.pathname}`,
            JSON.stringify({
              created_date: Date.now(),
              step: currentStep,
              isFullyRegistrationSuccess: true,
            })
          );

          await userInfoIndexedDb.del('info');

          alert(JSON.stringify(data, null, 4));
        } catch (error) {
          console.log('error', error);
        } finally {
          SpinnerService.hideSpinner();
        }
      },
      setValueOnInit: (input, valueFromInitData) => {
        if (input.type === 'tel') {
          phoneIti.setNumber(valueFromInitData);
        }

        if (input.type === 'file') {
          const fileData = userFromSession?.[input.name] || null;

          if (!fileData) return;

          file.setSuccessfulyUploadedStatus(fileData);
        }
      },
      initFormData: userFromSession,
    });

    initMaskForDateInput('#date-of-birth');
  }
}

initApp();
