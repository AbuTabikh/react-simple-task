import React, { Component } from 'react';
import List from './components/Todo/List' 
import Create from './components/Todo/Create' 

class App extends Component {
    state = {
      items : [
        {id:1, name: 'check notebook', priority : 'height' },
        {id:2, name: 'Charge phone', priority : 'low' },
      ]
    }

    deleteItem = (id) => {
      let items = this.state.items.filter(item => {
        return item.id !== id
      });
      this.setState({items:items})

      // let items = this.state.items;
      // let i = items.findIndex(item => item.id === id)
      // items.splice(i,1)
      // this.setState({items:items})
    }

    addItem = (item) =>{
      let items = this.state.items;
      item.id = Math.random();
      items.push(item);
      this.setState({items:items})
    }
  render() {
    return (
      <div className="App">
         
         <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">To Do list</h1>
          <List items={this.state.items} deleteItem={this.deleteItem} />
          <Create add={this.addItem} />
          <p className="lead">Task purpose : understanding how things work</p>
          <ul className="list-unstyled">
            <li>Duration : 25 mins</li>
          </ul>
        </div>
      </div>
    </div>
    
      

      </div>
    );
  }
}

export default App;
