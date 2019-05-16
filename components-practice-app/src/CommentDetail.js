import React from 'react';
import PropTypes from 'prop-types';

const CommentDetail = ({ author, timeAgo, content, avatar }) => (
  <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={avatar} />
    </a>
    <div className="content">
      <a href="/" className="author">
        {author}
      </a>
      <div className="metadata">
        <span className="date">{timeAgo} </span>
      </div>
      <div className="text">{content}</div>
    </div>
  </div>
);

CommentDetail.propTypes = {
  author: PropTypes.string,
  timeAgo: PropTypes.string,
  content: PropTypes.string,
  avatar: PropTypes.string,
};

export default CommentDetail;
