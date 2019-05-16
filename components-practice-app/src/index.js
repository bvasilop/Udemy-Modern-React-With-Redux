import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail.js';

const App = () => (
  <div className="ui container comments">
    <CommentDetail />
    <CommentDetail />
    <CommentDetail />
  </div>
);
ReactDOM.render(<App />, document.querySelector('#root'));
