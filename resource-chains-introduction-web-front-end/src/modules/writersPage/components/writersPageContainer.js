import React, { Component } from 'react';
import WritersPage from "./writersPage"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { name } from "../reducers";
import * as action from "../actions";
import { withRouter } from "react-router-dom";
import fetch from 'unfetch';
import cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import * as api from "../../../api"
const DynamicWriterPage = dynamic(() => import("./writersPage"))

const getWriterUrl = api.callAPI()+ `auth`

class writersPageContainer extends Component {
    constructor(props) {
        super(props)

        function createData(status, img, name, phone, email) {
            return { status, img, name, phone, email };
        }
        this.state = {
            showForm: false,
            showContacts: false,
            startDate: new Date(),
            value: '',
            isChecked: true,
            rows: [
            ],
            data: {},
            availableWriter: 0,
            banWriter: 0
        }
    }

    componentDidMount() {
        fetch(getWriterUrl, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Bearer " + cookies.get("token")
            }
        }).then(res => {
            console.log(res)
            return res.json()
        }).then(data => {
            this.setState({
                rows: data.result
            })
            let numAvail = 0
            let numBan = 0
            data.result.map(e => {
                if (e.status === true)
                    numAvail++
                else
                    numBan++
            })
            this.setState({
                availableWriter: numAvail,
                banWriter: numBan
            })
        })
    }
    updateCount=(status)=> {
        fetch(getWriterUrl, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Bearer " + cookies.get("token")
            }
        }).then(res => {
            console.log(res)
            return res.json()
        }).then(data => {
            this.setState({
                rows: data.result
            })
            let numAvail = 0
            let numBan = 0
            data.result.map(e => {
                if (e.status === true)
                    numAvail++
                else
                    numBan++
            })
            this.setState({
                availableWriter: numAvail,
                banWriter: numBan
            })
        })
    }
    render() {
        return (
            <React.Fragment>
                <DynamicWriterPage updateCount={this.updateCount} {...this.props} {...this.state} />
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
    )(writersPageContainer)
);