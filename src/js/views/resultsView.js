import icons from 'url:../../img/icons.svg';
import View from './view.js';
import previewView from './previewView.js';

class ResultsView extends View {
	_parentElement = document.querySelector('.results');
	_errorMessage = 'Рецепты не найдены, попробуйте что-то еще';
	_message = '';

	_generateMarkup() {
		return this._data.map(result => previewView.render(result, false)).join('');
	}
}

export default new ResultsView();
