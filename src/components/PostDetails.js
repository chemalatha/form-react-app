import React,{Component} from 'react';
import PostView from './PostView';

const url="http://localhost:8900/languages";


class PostDetails extends Component {
    constructor(){
        super();
        this.state = {
            details:''
        }
    }
    componentDidMount(){
        fetch(`${url}/${this.props.match.params.id}`,
                {method:'GET'})
            .then((response => response.json()))
            .then((data)=>{
                console.log(data);
                this.setState({
                    details:data
                })
            })
    }
    render(){
        return(
            <div className="panel panel-danger">
            <div className="panel-heading">PostDetails Header</div>
            <div className="panel-body">
                <h3>{this.state.details.name}</h3>
                <h4>{this.state.details.details}</h4>
            </div>
        </div>
        )
    }

}

export default PostDetails;