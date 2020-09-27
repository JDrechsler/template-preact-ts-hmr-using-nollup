import Router, { Route } from "preact-router";
import { Suspense, lazy } from "preact/compat";
import { Component, h } from "preact"
import { HomePage } from '@pages/Home';
import NavBar from '@components/NavBar';

//#if _DEBUG
import { HotManager } from '@helpers/HotManager';
import Lazy from '@pages/Lazy';
import About from '@pages/About';
HotManager.register(module.id);
//#else
const LazyPage = lazy(() => import('@pages/Lazy'));
const AboutPage = lazy(() => import('@pages/About'));
//#endif


const NotFound = () => (
    <section>
        <h2>Not Found</h2>
    </section>
);

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Suspense fallback={<div></div>}>
                    <Router>
                        <Route path="/" component={HomePage} />
                        //#if _DEBUG
                        <Route path="lazy" component={Lazy} />
                        <Route path="about" component={About} />
                        //#else
                        <Route path="lazy" component={LazyPage} />
                        <Route path="about" component={AboutPage} />
                        //#endif
                        <Route default component={NotFound} />
                    </Router>
                </Suspense>
            </div>
        );
    }
}

export default App;