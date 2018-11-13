import React, { Component } from 'react';

class Create extends Component{

    state = {
        name : '',
        priority : ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state);
        this.setState({
            name : '',
            priority : ''
        })
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit} className="form-inline">
               <div className="form-group mb-2">
                  <label  className="sr-only">Name</label>
                  <input type="text" name="name" id="name" placeholder="Enter name ..."  onChange={this.handleChange} value={this.state.name} />
               </div>
               <div className="form-group mx-sm-3 mb-2">
                  <label className="sr-only">priority</label>
                  <input type="text" name="priority" id="priority" placeholder="Enter priority ..."  onChange={this.handleChange} value={this.state.priority} />
               </div>
               <button type="submit" className="btn btn-primary mb-2" >Submit</button>
            </form>
         </div>
        )
    }
}
export default Create
