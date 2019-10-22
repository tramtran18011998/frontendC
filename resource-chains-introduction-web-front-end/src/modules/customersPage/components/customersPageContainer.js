import React, { Component } from 'react';
import CustomersPage from "./customersPage"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { name } from "../reducers";
import * as action from "../actions";
import { withRouter } from "react-router-dom";
import dynamic from 'next/dynamic';
const DynamicContactPage = dynamic(()=> import("./customersPage"))


class customersPageContainer extends Component {
    render() { 
        return (  
            <React.Fragment>
                <DynamicContactPage {...this.props}/>
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
    )(customersPageContainer)
);