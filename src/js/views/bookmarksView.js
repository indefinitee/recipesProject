import icons from 'url:../../img/icons.svg'; // Parcel 2
import View from './view.js';
import previewView from './previewView.js';

class BookmarksView extends View {
	_parentElement = document.querySelector('.bookmarks__list');
	_errorMessage = 'Нет избранных рецептов';
	_message = '';

	addHandlerRender(handler) {
		window.addEventListener('load', handler);
	}

	_generateMarkup() {
		return this._data
			.map(bookmark => previewView.render(bookmark, false))
			.join('');
	}
}

export default new BookmarksView();
