import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => (
  <div className="ui container comments">
    <CommentDetail author="Sam" timeAgo="Today at 4:00PM" post="Hey there" />
    <CommentDetail
      author="Alex"
      timeAgo="Yesterday at 6:00PM"
      post="What's happening"
    />
    <CommentDetail author="Jane" timeAgo="Tomorrow at 2:00PM" post="Hi there" />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
