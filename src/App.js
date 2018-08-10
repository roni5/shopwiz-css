import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout';
import a from './App.css';
import CssModules from 'react-css-modules'
import TodoInput from './components/TodoInput/TodoInput'
import TodoItem from './components/TodoItem/TodoItem'
import Button from './components/presentation/button/Button'
import ProductDetail from './components/presentation/button/ProductDetail';
import Home from './components/layouts/Home';
import Products from './components/layouts/Products';
import  Hello  from './Hello';
import _ from 'lodash';


class App extends Component {
  constructor(props) {
    super(props);

  this.state = {
      todos: []
    };
  }

  createTodo = (e) => {
    if(e.charCode == '13'){
      // do justice here

      let todos = this.state.todos
      let length = todos.length

      this.setState({
        todos:[...this.state.todos,{id:length+1, title: e.target.value}]
      })
    }
  }

  removeTodo = (id) =>{
    // using the id to remove the item from state list
    let ourItem = _.filter(this.state.todos, function(item){
        return item.id !== id
    });

    //remove the current item from the todo

    this.setState({
        todos: ourItem
    })
  }

  list(){
    return this.state.todos.map(item => {
              return <TodoItem title={item.title} key={item.id} id={item.id} remove={this.removeTodo.bind(this)} />;
          });

  }
  componentDidMount(){

  }

  render() {

    return (
      <BrowserRouter>
         <Layout>
      <div styleName="Apps">
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
            <Route path='/products/:id' component={ProductDetail}/>
        <TodoInput createTodo={this.createTodo.bind(this)}> </TodoInput>
        {this.list()}
        <Button />
        <div style={{ color: 'red' , padding:'10%'}} >
          <div className="centralized-container">

          </div>
          </div>
          </div>
          </Layout>
      </BrowserRouter>
    );
  }
}

export default CssModules(App, a);
