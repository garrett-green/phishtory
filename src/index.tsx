import { h, render, Fragment } from 'preact';
import { Header, Main } from './components';
import './index.css';

const App = () => (
  <Fragment>
    <Header />
    <Main />
  </Fragment>
);

render(<App />, document.getElementById('app')!);
