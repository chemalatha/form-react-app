import React from 'react';
import {Link} from 'react-router-dom';

const PostView = (props)=>{
    const renderTopic = ({topicdata})=>{
        if(topicdata){
            return topicdata.map((item)=>{
                return(
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <div className="btn btn-success">
                            <Link to={`/post/${item.id}`}>Details</Link>
                        </div> 
                    </div>

                )
            })
        }
    }
    return(
        <div>
            {renderTopic(props)}
        </div>
    )
};

export default PostView;