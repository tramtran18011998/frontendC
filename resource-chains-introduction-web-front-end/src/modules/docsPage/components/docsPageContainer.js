import React, { Component } from 'react';
import DocsPage from "./docsPage"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { name } from "../reducers";
import * as action from "../actions";
import { withRouter } from "react-router-dom";

class DocsPageContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <DocsPage {...this.props} />
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
    )(DocsPageContainer)
);