export class Spinner {
  constructor() {
    this.$spinner = document.querySelector('.spinner');

    if (!this.$spinner) return;
  }

  static showSpinner() {
    this.$spinner.classList.add('show');
  }

  static hideSpinner() {
    this.$spinner.classList.remove('show');
  }
}
