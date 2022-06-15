import { Component } from 'react';
import { ItemList } from './ItemList';

export default class BodyList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [],
		};
	}

	removeFromList = event => {
		const removing = event.target.previousSibling.textContent;
		this.setState(state => ({
			list: state.list.filter(item => item !== removing),
		}));
	};

	clearList() {
		this.setState({ list: [] });
	}

	sortList = event => {
		this.setState({ list: this.state.list.sort() });
	};

	addToList = event => {
		event.preventDefault();
		console.log(event.target.elements.newListElement.value);
		this.setState({
			list: [...this.state.list, event.target.elements.newListElement.value],
		});
		setTimeout(() => console.log(this.state), 10);
		event.target.elements.newListElement.value = '';
	};
	render() {
		return (
			<>
				<form onSubmit={this.addToList}>
					<input type={'text'} name={'newListElement'} />
					<button type={'submit'}>Inserisci in lista</button>
					<button type={'button'} onClick={this.clearList.bind(this)}>
						Pulisci lista
					</button>
					<button type={'button'} onClick={this.sortList}>
						Riordina lista
					</button>
				</form>
				{this.state.list.map((item, index) => (
					<ItemList
						item={item}
						key={index}
						removeFromList={this.removeFromList}
						color={'red'}
					/>
				))}
			</>
		);
	}
}
