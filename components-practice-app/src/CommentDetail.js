import React from 'react';
import faker from 'faker';
import PropTypes from 'prop-types';

const CommentDetail = ({ author, timeAgo, post }) => (
  <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={faker.image.avatar()} />
    </a>
    <div className="content">
      <a href="/" className="author">
        {author}
      </a>
      <div className="metadata">
        <span className="date">{timeAgo} </span>
      </div>
      <div className="text">{post}</div>
    </div>
  </div>
);

CommentDetail.propTypes = {
  author: PropTypes.string,
  timeAgo: PropTypes.string,
  post: PropTypes.string,
};

export default CommentDetail;
