import React from 'react'

export default function Comment() {
    return (
        <div class="media">
            <a class="pull-left" href="#"
            ><img
                    class="img-responsive"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                /></a>
            <div class="media-body">
                <h4 class="media-heading">Comment author</h4>
                <p>Comment content</p>
                <ul class="list-unstyled list-inline media-detail">
                    <li><i class="fa fa-calendar"></i>Comment date</li>
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
