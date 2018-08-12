import \_ from 'lodash';

import TodoInput from './components/TodoInput/TodoInput'
import TodoItem from './components/TodoItem/TodoItem'

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
let ourItem = \_.filter(this.state.todos, function(item){
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

           <TodoInput createTodo={this.createTodo.bind(this)}> </TodoInput>
        {this.list()}
        <Button />
        <div style={{ color: 'red' , padding:'10%'}} >
          <div className="centralized-container">

          </div>
          </div>
