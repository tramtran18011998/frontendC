import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { name } from "../reducers";
import * as action from "../actions";
import { withRouter } from "react-router-dom";
import dynamic from 'next/dynamic';
import Router from 'next/router';
import fetch from 'unfetch';
import cookies from 'js-cookie';
import * as api from "../../../api"
const DynamicContactDetailPage = dynamic(()=> import("./contactDetailPage"))

const getDocsUrl = api.callAPI()+ "documents/admin"
class DocsAdminPageContainer extends Component {
    render() { 
        return (  
            <React.Fragment>
                    <DynamicContactDetailPage {...this.props} {...this.state}/>
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
    )(DocsAdminPageContainer)
);