import { Component, h } from 'preact';
import { Suspense, lazy } from 'preact/compat';
import { view } from 'z-preact-easy-state';

//#if _DEBUG
import AboutComp from '@components/AboutComp';
//#else
const LazyAboutComp = lazy(() => import('@components/AboutComp'));
//#endif

class AboutPage extends Component {
	render() {
		return (
			<section>
				<h2>About</h2>

				//#if _DEBUG
				<AboutComp />
				//#else
				<Suspense fallback={<div>Loading...</div>}>
					<LazyAboutComp />
				</Suspense>
			//#endif

			</section>
		);
	}
}

export default view(AboutPage);