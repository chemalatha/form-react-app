import React,{Component} from 'react';

const url="http://localhost:8900/languages";
class Forms extends Component {
    constructor(){
        super();
        this.state= {
            title:'',
            details:''
        }
    }
    handleChangeTitle(event){
        this.setState({title:event.target.value})
    }
    handleChangeDetails(event){
        this.setState({details:event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        let id = Math.floor(Math.random()*1000);
        let data = {
            id:id,
            name:this.state.title,
            data:this.state.details
        }
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)})
            .then(
                this.props.history.push('/posts')
            )
    }
    render(){
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">Forms Header</div>
                <div className="panel-body">
                    <form >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" 
                            className="form-control"
                            placeholder="Name of the topic"
                            id="name" 
                            value={this.state.title}
                            onChange={this.handleChangeTitle.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Details</label>
                            <input type="text" 
                            className="form-control"
                            placeholder="Details of the topic"
                            id="details" 
                            value={this.state.details}
                            onChange={this.handleChangeDetails.bind(this)}/>
                        </div>
                        <button 
                        type='submit' 
                        className="btn btn-success"
                        onClick={this.handleSubmit.bind(this)}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            )
    }

}

export default Forms;