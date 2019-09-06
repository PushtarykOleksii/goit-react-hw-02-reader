import React from 'react';
import ReactDOM from 'react-dom';
import publications from './Components/publications.json';
import Reader from './Components/Reader';

const App = () => <Reader items={publications} />;

ReactDOM.render(<App />, document.getElementById('root'));
