//'https://codepen.io/beautifulcoder/pen/vmOOLr.js'
// '<h3>' +
// viewModel.name +
// '</h3>' +
// '<img class="penguin-image" src="' +
// viewModel.imageUrl +
// '" alt="' +
// viewModel.name +
// '" />' +
// '<p><b>Size:</b> ' +
// viewModel.size +
// '</p>' +
// '<p><b>Favorite food:</b> ' +
// viewModel.favoriteFood +
// '</p>' +
// '<a id="previousPenguin" class="previous button" href="javascript:void(0);"' +
// ' data-penguin-index="' +
// viewModel.previousIndex +
// '">Previous</a> ' +
// '<a id="nextPenguin" class="next button" href="javascript:void(0);"' +
// ' data-penguin-index="' +
// viewModel.nextIndex +
// '">Next</a>';

class PenguinModel {
  async getPenguin(idx, showPenguin) {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append(
      'Access-Control-Allow-Methods',
      'DELETE, POST, GET, OPTIONS'
    );
    headers.append(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, X-Requested-With'
    );

    headers.append('Content-Type', 'application/json');
    try {
      const req = await fetch(
        'https://codepen.io/beautifulcoder/pen/vmOOLr.js',
        {
          headers,
        }
      );

      const res = await req.json();
      var ajaxResponse = JSON.parse(res);
      console.log('ajaxResponse', ajaxResponse);
      var penguin = ajaxResponse[index];

      penguin.index = index;
      penguin.count = ajaxResponse.length;

      showPenguin(penguin);
    } catch (error) {
      const penguin = {
        name: 'Name',
        imageUrl: '',
        size: 50,
        favoriteFood: 'favorite food',
      };
      penguin.index = 1;
      penguin.count = 10;
      showPenguin(penguin);
    }
  }
}

class PenguinView {
  constructor($rootElem) {
    this.$rootElem = $rootElem; // элемент, в который всё рендерится.
    this.onClickGetPenguin = null;
  }

  render(viewModel) {
    this.$rootElem.innerHTML =
      '<h3>' +
      viewModel.name +
      '</h3>' +
      '<img class="penguin-image" src="' +
      viewModel.imageUrl +
      '" alt="' +
      viewModel.name +
      '" />' +
      '<p><b>Size:</b> ' +
      viewModel.size +
      '</p>' +
      '<p><b>Favorite food:</b> ' +
      viewModel.favoriteFood +
      '</p>' +
      '<a id="previousPenguin" class="previous button" href="javascript:void(0);"' +
      ' data-penguin-index="' +
      viewModel.previousIndex +
      '">Previous</a> ' +
      '<a id="nextPenguin" class="next button" href="javascript:void(0);"' +
      ' data-penguin-index="' +
      viewModel.nextIndex +
      '">Next</a>';

    this.previousIndex = viewModel.previousIndex;
    this.nextIndex = viewModel.nextIndex;

    var previousPenguin = this.$rootElem.querySelector('#previousPenguin');
    previousPenguin.addEventListener('click', this.onClickGetPenguin);

    var nextPenguin = this.$rootElem.querySelector('#nextPenguin');
    nextPenguin.addEventListener('click', this.onClickGetPenguin);
  }
}

class PenguinController {
  constructor(penguinView, penguinModel) {
    this.penguinView = penguinView;
    this.penguinModel = penguinModel;
  }

  initialize() {
    this.penguinView.onClickGetPenguin = this.onClickGetPenguin.bind(this);
  }

  onClickGetPenguin(e) {
    const target = e.currentTarget;
    const index = parseInt(target.dataset.penguinIndex, 10);

    this.penguinModel.getPenguin(index, this.showPenguin.bind(this));
  }

  showPenguin(penguinModelData) {
    const penguinViewModel = {
      name: penguinModelData.name,
      imageUrl: penguinModelData.imageUrl,
      size: penguinModelData.size,
      favoriteFood: penguinModelData.favoriteFood,
    };

    penguinViewModel.previousIndex = penguinModelData.index - 1;
    penguinViewModel.nextIndex = penguinModelData.index + 1;

    if (penguinModelData.index === 0) {
      penguinViewModel.previousIndex = penguinModelData.count - 1;
    }

    if (penguinModelData.index === penguinModelData.count - 1) {
      penguinViewModel.nextIndex = 0;
    }

    this.penguinView.render(penguinViewModel);
  }
}

const targetElement = document.getElementById('listOfPenguins');

const penguinView = new PenguinView(targetElement);
const penguinModel = new PenguinModel(XMLHttpRequest);
const controller = new PenguinController(penguinView, penguinModel);

controller.initialize();

controller.onClickGetPenguin({
  currentTarget: { dataset: { penguinIndex: 0 } },
});
