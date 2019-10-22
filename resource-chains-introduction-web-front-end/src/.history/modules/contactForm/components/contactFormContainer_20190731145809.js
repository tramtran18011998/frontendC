import React, { Component } from 'react';
import ContactForm from "./contactForm"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { name } from "../reducers";
import * as action from "../actions";
import { withRouter } from "react-router-dom";

class ContactFormContainer extends Component {
    render() { 
        return (  
            <React.Fragment>
                <ContactForm {...this.props}/>
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
    )(ContactFormContainer)
);