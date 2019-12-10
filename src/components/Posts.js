import React,{Component} from 'react';
import PostView from './PostView';


const url="http://localhost:8900/languages";

class Posts extends Component{
    constructor(){
        super();
        this.state = {
            languages:[]
        }
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
            .then((res)=>res.json())
            .then((data)=>
            this.setState({
                languages:data
            })
            
            );
    }
    render(){
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">Posts Header</div>
                <div className="panel-body">
                    <PostView topicdata={this.state.languages} />
                </div>
            </div>
            )
    }

}

export default Posts;