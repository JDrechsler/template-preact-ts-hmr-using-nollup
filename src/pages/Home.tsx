import { Component, h } from 'preact';

export class HomePage extends Component {
	componentDidMount() {
		console.log('Home did mount');
	}

	render() {
		return (
			<section>
				<h2>Home</h2>
			</section>
		);
	}
}