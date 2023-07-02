export class SpinnerService {
  static $spinner = document.querySelector('.spinner');

  static showSpinner() {
    SpinnerService.$spinner.classList.add('show');
  }

  static hideSpinner() {
    SpinnerService.$spinner.classList.remove('show');
  }
}
