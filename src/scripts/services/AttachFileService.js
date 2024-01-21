export class AttachFileService {
  NO_VALID_CLASS = 'no-valid';
  ATTACH_FILE_LABEL_TEXT_CONTENT = 'One file, up to 20 mb';

  constructor(
    idRootNode,
    options = {
      handleChangeValidateInput: (fileInput) => {},
      handleSuccessAttach: (fileInput) => {},
      handleCanceled: (fileInput) => {},
    }
  ) {
    this.$root = document.querySelector(`#${idRootNode}`);

    if (!this.$root) {
      console.error(
        `You are trying init AttachFile by #${idRootNode} node, but this was not found `
      );
      return;
    }

    this.cvInput = this.$root.querySelector('input');
    this.fileBody = this.$root.querySelector('[data-attach-file-body]');
    this.labelCVFile = this.$root.querySelector(
      '[data-attach-file-resume-add]'
    );
    this.infoCVFile = this.$root.querySelector(
      '[data-attach-file-description]'
    );
    this.progressUploadCV = this.$root.querySelector(
      '[data-attach-file-progress]'
    );
    this.progressUploadCVLine = this.$root.querySelector(
      '[data-attach-file-progress-line]'
    );
    this.progressUploadCVPercentValue = this.$root.querySelector(
      '[data-attach-file-percent]'
    );
    this.spinnerCVFile = this.$root.querySelector('[data-attach-file-spinner]');
    this.successUploadCVFileIcon = this.$root.querySelector(
      '[data-attach-file-success-uploaded]'
    );
    this.cancelCVFileIcon = this.$root.querySelector(
      '[data-attach-file-cancel]'
    );
    this.trashCVFileIcon = this.$root.querySelector('[data-attach-file-trash]');

    this.options = options;

    this.ATTACH_FILE = null;

    this.file = null;

    this.#setup();
  }

  showElement(nodeEl) {
    nodeEl.style.display = 'inline-block';
  }

  hideElement(nodeEl) {
    nodeEl.style.display = 'none';
  }

  cancelCv() {
    this.options.handleCanceled?.(this.cvInput);

    this.setInvalidStatus();
    this.cvInput.value = '';
    this.ATTACH_FILE = null;
    this.labelCVFile.textContent = 'Add Your English CV';

    this.hideElement(this.progressUploadCVPercentValue);
    this.hideElement(this.spinnerCVFile);
    this.hideElement(this.cancelCVFileIcon);
    this.hideElement(this.trashCVFileIcon);
    this.hideElement(this.progressUploadCV);
    this.hideElement(this.successUploadCVFileIcon);
    this.showElement(this.infoCVFile);

    this.infoCVFile.textContent = this.ATTACH_FILE_LABEL_TEXT_CONTENT;

    this.fileBody.style.pointerEvents = 'auto';
    this.labelCVFile.classList.remove('owner-file-name');
    this.progressUploadCVLine.classList.remove('uploaded');
  }

  removeInvalidStatus() {
    this.$root.classList.remove(this.NO_VALID_CLASS);
  }

  setInvalidStatus() {
    this.$root.classList.add(this.NO_VALID_CLASS);
  }

  handleChange() {
    try {
      this.removeInvalidStatus();

      this.infoCVFile.textContent = this.ATTACH_FILE_LABEL_TEXT_CONTENT;

      if (!this.cvInput.value.length) {
        this.setInvalidStatus();
        return;
      }

      const file = this.cvInput.files[0];
      this.file = file;

      this.options.handleChangeValidateInput?.(this.cvInput);
      const reader = new FileReader();

      this.showElement(this.cancelCVFileIcon);
      this.showElement(this.progressUploadCV);
      this.showElement(this.spinnerCVFile);
      this.showElement(this.progressUploadCVPercentValue);

      this.fileBody.style.pointerEvents = 'none';
      this.labelCVFile.classList.add('owner-file-name');
      this.labelCVFile.innerText = file.name;
      this.infoCVFile.style.display = 'none';

      reader.onload = () => {
        this.options.handleSuccessAttach?.(this.cvInput);

        this.showElement(this.successUploadCVFileIcon);
        this.showElement(this.trashCVFileIcon);

        this.hideElement(this.spinnerCVFile);
        this.hideElement(this.cancelCVFileIcon);

        this.ATTACH_FILE = file;
      };

      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          let progress = (event.loaded / event.total) * 100;

          this.progressUploadCVLine.style.width = progress + '%';
          this.progressUploadCVPercentValue.textContent =
            Math.round(progress) + '%';

          if (progress === 100) {
            this.progressUploadCVLine.classList.add('uploaded');
          }
        }
      };

      reader.readAsDataURL(file);
    } catch (errorMessage) {
      console.log('ERROR FILE', errorMessage);
      this.cancelCv();

      this.showElement(this.trashCVFileIcon);
      this.infoCVFile.textContent = errorMessage?.message;
      this.labelCVFile.textContent = this.file?.name || '';

      this.file = null;
    }
  }

  setFile(file) {
    let container = new DataTransfer();
    container.items.add(file);

    this.cvInput.files = container.files;
    this.ATTACH_FILE = file;
  }

  getFile() {
    return this.ATTACH_FILE;
  }

  setSuccessfulyUploadedStatus(file) {
    if (!file) return;
    this.setFile(file);

    this.fileBody.style.pointerEvents = 'none';
    this.labelCVFile.classList.add('owner-file-name');
    this.labelCVFile.innerText = file.name;
    this.infoCVFile.style.display = 'none';

    this.showElement(this.progressUploadCV);
    this.showElement(this.progressUploadCVPercentValue);

    this.showElement(this.successUploadCVFileIcon);
    this.showElement(this.trashCVFileIcon);

    this.hideElement(this.spinnerCVFile);
    this.hideElement(this.cancelCVFileIcon);
    this.progressUploadCVLine.style.width = 100 + '%';
    this.progressUploadCVPercentValue.textContent = 100 + '%';
    this.progressUploadCVLine.classList.add('uploaded');

    this.options.handleSuccessAttach?.(this.cvInput);
  }

  #setup() {
    this.cvInput?.addEventListener('change', this.handleChange.bind(this));
    this.trashCVFileIcon?.addEventListener('click', this.cancelCv.bind(this));
  }
}
