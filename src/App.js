import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout';
import a from './App.css';
import CssModules from 'react-css-modules'
//import TodoInput from './components/TodoInput/TodoInput'
//import TodoItem from './components/TodoItem/TodoItem'
import Button from './components/presentation/button/Button'
import Home from './components/layouts/Home';
import Products from './components/containers/Products';
import ProductsNews from './components/containers/ProductsNews';
//import  Hello  from './Hello';



class App extends Component {

  componentDidMount(){
    const ele = document.getElementById('ipl-progress-indicator')
    if(ele){
      setTimeout(() => {
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 200)
      }, 100)
    }
  }
  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <div styleName="Apps">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/products" component={Products} />
              <Route path="/about" component={About} />
              <Route path='/products/:id' component={ProductsNews} />
              </Switch>
                <div className="centralized-container">
                <section>
                 <h2> Panel</h2>
                   <Button />Space

                </section>
              </div>



            </div>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default CssModules(App, a);
