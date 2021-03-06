import React, { Component } from 'react';
import 'pages/MovieDetail/MovieContent/CommentBox/AddComment/AddComment.scss';

class AddComment extends Component {
  render() {
    const { addedNewComments } = this.props;

    return (
      <div className='commentAdd'>
        {addedNewComments.map(newComments => {
          return (
            <div key={newComments.id} className='newComment'>
              {newComments.comment}
            </div>
          );
        })}
      </div>
    );
  }
}

export default AddComment;
