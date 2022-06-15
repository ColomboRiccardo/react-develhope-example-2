import React from 'react';

export class ItemList extends React.Component {
	render() {
		return (
			<div className='ItemStyle'>
				{this.props.item}
				<button className='remove' onClick={this.props.removeFromList}>
					{' '}
					Remove Item{' '}
				</button>
			</div>
		);
	}
}
