import React from 'react'

export default function Comment() {
    return (
        <div className="media">
            <a className="pull-left" href="/#"
            ><img
            className="img-responsive"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                /></a>
            <div className="media-body">
                <h4 className="media-heading">Comment author</h4>
                <p>Comment content</p>
                <ul className="list-unstyled list-inline media-detail">
                    <li><i className="fa fa-calendar"></i>Comment date</li>
                    {/* <li>
                    <a href="/comment/like?event=<%- event._id %>&id=<%- i %>"
                    ><i class="fas fa-thumbs-up fa-2x"></i><%- comment.likes %></a
                    >
                </li>  */}
                </ul>
            </div>
        </div>
    )
}
