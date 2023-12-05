export class SearchInputWithList {
  data = [];

  constructor(
    config = {
      rootEl: null,
      initialData: [],
    }
  ) {
    if (!config.rootEl) {
      return;
    }
    this.$root = document.querySelector(`${config?.rootEl}`);

    if (!this.$root) {
      console.error(
        `Error with init SearchInputWithList with ${config?.rootEl} id`
      );
      return;
    }
    this.searchInput = this.$root.querySelector('input');

    if (!this.searchInput) {
      console.error(`Error with init search input`);
      return;
    }

    this.$rootList = document.querySelector(
      '.fields-block__search-list-container'
    );

    if (!this.$rootList) {
      console.error(`Error with init root list`);
      return;
    }

    this.data = config?.initialData ?? [];
    this.filteredData = [];
    this.#setup();
  }

  setListData(listData = []) {
    this.data = listData;
    this.renderList(listData);
  }

  showListWrapper() {
    this.$rootList.classList.add('open');
  }

  hideListWrapper() {
    this.$rootList.classList.remove('open');
  }

  filterListByValue(event) {
    const { value } = event.target;

    const specialCharactersRegex = /[^a-zA-Zа-яА-Я\s]/g;
    const includedSpecialCharacters = specialCharactersRegex.test(value);
    const currentSearchInputValue = includedSpecialCharacters
      ? value.replace(specialCharactersRegex, '')
      : value;

    this.$rootList.innerHTML = '';

    if (!currentSearchInputValue) {
      this.renderList(this.data);
      this.hideListWrapper();
      return;
    }

    const filteredDataByValue = this.data.filter((currentLi) =>
      currentLi.label
        .toLowerCase()
        .includes(currentSearchInputValue.toLowerCase())
    );

    if (!currentSearchInputValue.length) {
      this.hideListWrapper();
      this.filteredData = [];
      return;
    }

    const isValueInList = this.data.some(
      (item) =>
        item.label.toLowerCase() === currentSearchInputValue.toLowerCase()
    );

    if (!isValueInList) {
      filteredDataByValue.unshift({
        label: currentSearchInputValue,
        value: currentSearchInputValue,
      });
    }

    this.filteredData = filteredDataByValue;
    this.showListWrapper();

    this.renderList(filteredDataByValue);
  }
  //list format in:
  // {  label: '', value: '' }
  escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  }

  renderList(listData) {
    if (!this.$rootList) return;

    const fragment = document.createDocumentFragment();

    listData.forEach((currentLi) => {
      const specialCharactersRegex = /[^a-zA-Zа-яА-Я\s]/g;
      const includedSpecialCharacters = specialCharactersRegex.test(
        this.searchInput.value
      );
      const currentSearchInputValue = includedSpecialCharacters
        ? this.searchInput.value.replace(specialCharactersRegex, '')
        : this.searchInput.value;

      const li = document.createElement('li');
      li.classList.add('fields-block__search-list-container-item');
      li.setAttribute('data-value', currentLi.value);
      li.setAttribute('data-element', 'yep');

      const productName = currentLi.label;
      const dataInp = this.escapeRegExp(currentSearchInputValue).replace(
        /[\\]/g,
        ''
      );
      const searchRegex = new RegExp(dataInp, 'gi');

      const newName = productName.replace(
        searchRegex,
        `<strong data-element="yep" data-value="${currentLi.value}">${dataInp}</strong>`
      );

      li.innerHTML = newName;

      fragment.appendChild(li);
    });

    this.$rootList.innerHTML = '';
    this.$rootList.appendChild(fragment);
  }

  handleBlur(e) {
    this.hideListWrapper();
  }

  handleClickListItem(e) {
    const el = e.target?.dataset?.element;
    if (!el) return;

    const value = e.target.dataset.value;
    this.hideListWrapper();

    this.searchInput.value = value;
  }

  #setup() {
    this.searchInput.addEventListener(
      'input',
      this.filterListByValue.bind(this)
    );
    this.$rootList.addEventListener(
      'click',
      this.handleClickListItem.bind(this)
    );
    this.$root.addEventListener('mouseleave', this.handleBlur.bind(this));
  }

  render() {}
}
