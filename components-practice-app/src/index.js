import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => (
  <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={faker.date.weekday()}
        content={faker.lorem.sentence()}
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={faker.date.weekday()}
        content={faker.lorem.sentence()}
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={faker.date.weekday()}
        content={faker.lorem.sentence()}
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={faker.date.weekday()}
        content={faker.lorem.sentence()}
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={faker.date.weekday()}
        content={faker.lorem.sentence()}
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
