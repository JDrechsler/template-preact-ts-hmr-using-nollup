import { render, h } from 'preact';
import App from './App';

let el = render(<App />, document.body);

//#if _DEBUG
import HotManager from '@helpers/HotManager';
(module as any).hot.accept(() => {
    let App = require(HotManager.getRegistered()).default;
    el = render(<App />, document.body, el as any);
});
//#endif



