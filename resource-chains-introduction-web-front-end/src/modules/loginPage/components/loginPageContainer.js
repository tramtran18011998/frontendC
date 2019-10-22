import React, { Component } from 'react';
import LoginPage from "./loginPage"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { name } from "../reducers";
import * as action from "../actions";
import { withRouter } from "react-router-dom";
import cookies from 'js-cookie';
import dynamic from 'next/dynamic';
const DynamicLoginPage = dynamic(()=> import("./loginPage"))

class LoginPageContainer extends Component {
    render() { 
        return (  
            <React.Fragment>
                <DynamicLoginPage {...this.props}/>
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
    )(LoginPageContainer)
);