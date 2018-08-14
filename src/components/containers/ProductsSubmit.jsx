import React, { Component} from 'react';
import { connect } from 'react-redux';
import { submitNewProducts} from '../../actions/actions';
import { withRouter } from "react-router-dom";

class ProductsSubmit extends Component {
    constructor(){
        super();

        this.state = {
            submission: {
            }
        };
    }
    componentDidMount(){
    }

    updateSubmission(event){
        let updatedSubmission = Object.assign({}, this.state.submission);

        updatedSubmission[event.target.id] = event.target.value;
        this.setState({
            submission: updatedSubmission
        });
    }

    submitSubmission(){
        this.props.dispatch(submitNewProducts(this.state.submission));
        this.props.history.push("/");
    }

    render(){

        return (
            <div>
                Title <input onChange={this.updateSubmission.bind(this)} id="title" type="text" placeholder= "Title"/><br/>
                Teaser <input onChange={this.updateSubmission.bind(this)} id="teaser" type="text" placeholder= "Teaser"/><br/>
                Body<br/>
                <textarea onChange={this.updateSubmission.bind(this)} id="body" type="text">

                </textarea><br/>

                <button onClick={this.submitSubmission.bind(this)}>Submit Product</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(ProductsSubmit));