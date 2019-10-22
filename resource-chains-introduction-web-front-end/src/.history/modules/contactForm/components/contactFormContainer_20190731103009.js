import React, { Component } from 'react';
import HomePage from "./homePage"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { name } from "../reducers";
import * as action from "../actions";
import { withRouter } from "react-router-dom";

class HomePageContainer extends Component {
    render() { 
        return (  
            <React.Fragment>
                <HomePage {...this.props}/>
            </React.Fragment>
        );
    }
}


function mapStateToProps(state) {
    return {
        ...state[name]
    };
}
function mapDispatchToProps(dispatch) {
    const actions = {
        ...action
    };
    return { actions: bindActionCreators(actions, dispatch) };
}
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(HomePageContainer)
);