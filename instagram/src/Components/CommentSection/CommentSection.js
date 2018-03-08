import React, { Component } from 'react';

class CommentSection extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            newComment: ''
        }
    }

    componentDidMount() {
        this.setState ({
            comments: this.props.comments
        })
    }

    addComment = (event) => {
        event.preventDefault();
        const commentObj = {
            username: 'Ria',
            text: this.state.newComment
        }
        this.setState ({
            comments: [...this.state.comments, commentObj],
            newComment: ''
        })
    }

    handleComment = (event) => {
        this.setState ({ newComment: event.target.value })
    }

    render() {
        return (
            <div className="comment-box">
                {this.state.comments ? this.state.comments.map((comment, i) => (
                    <div className="comment" key={i}>
                        <div className="comment-user"><b>{comment.username}</b></div>
                        <div className="comment-text">{comment.text}</div>
                    </div>)
                ) : null}
                  <div className="comment">
                    <input type="text" placeholder="..." value={this.state.newComment} onChange={this.handleComment} />
                    <button type="submit" onClick={this.addComment}>Sumbit</button>
                  </div>
            </div>
        )
    }
}

export default CommentSection;