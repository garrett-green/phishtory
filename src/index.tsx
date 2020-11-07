import { h, render } from 'preact';

import { Header, Main } from './components';

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

render(<App />, document.getElementById('app')!);
