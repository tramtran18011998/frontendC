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
const DynamicDocsPage = dynamic(()=> import("./docsAdminPage"))

const getDocsUrl = api.callAPI()+ "documents/admin"
class DocsAdminPageContainer extends Component {
    constructor(props) {
        super(props)

        function createData(status, title, name, phone, email) {
          return { status, title, name, phone, email};
        }
        this.state = {
            showForm: false,
            showContacts: false,
            startDate: new Date(),
            value: '',
            isChecked : true,
            rows : [
              ],
            data: {}
        }
    }

    componentDidMount() {
        fetch(getDocsUrl, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Bearer " + cookies.get("token")
            }
        }).then(res => {
            console.log(res)
            return res.json()
        }).then(data => {
            console.log(data.result)
            this.setState({
                rows : data.result
            })
        })
    }
    render() { 
        let isDocsPage = true
        if(Router.router){
            if(Router.router.route === "/admin/docs/[id]")
                isDocsPage = false
        }
        return (  
            <React.Fragment>
                <DynamicDocsPage handleChangeData={this.handleChangeData} {...this.props} {...this.state}/>
                
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