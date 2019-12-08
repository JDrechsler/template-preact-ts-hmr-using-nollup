
import { Component, h } from 'preact';
import { customStore } from '@store/store';
import { view } from 'z-preact-easy-state';

class LazyAboutComp extends Component {
	btnClick() {
		console.log('Click');
		customStore.btnClicked += 1;
	}

	render() {
		return (
			<section>
				<h2>Lazy loaded comp</h2>
				<p>Hello {customStore.name}</p>
				<p>Your favorite food is: {customStore.favFood}</p>
				<p>Button clicked: {customStore.btnClicked}</p>
			</section>
		);
	}
}

export default view(LazyAboutComp);