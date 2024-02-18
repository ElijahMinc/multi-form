export class ModalService {
  showClass = 'open';

  constructor({ id, closeId }) {
    if (!id) {
      throw new Error(`Not found modal by this id: ${id}`);
    }

    if (!closeId) {
      throw new Error(`Not found elem id for close modal: ${closeId}`);
    }

    this.$modal = document.querySelector(`#${id}`);
    this.$closeElem = this.$modal.querySelector(`#${closeId}`);

    this.#setup();
  }

  show() {
    this.$modal.classList.add(this.showClass);
  }

  hide() {
    this.$modal.classList.remove(this.showClass);
  }

  toggle() {
    this.$modal.classList.toggle(
      this.showClass,
      !this.$modal.classList.contains(this.showClass)
    );
  }

  #setup() {
    this.$closeElem.addEventListener('click', this.hide.bind(this));
  }
}
