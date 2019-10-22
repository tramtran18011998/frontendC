import React, { Component } from 'react';
import Router from 'next/router';
import { Icon } from 'react-icons-kit'
import {book_2} from 'react-icons-kit/ikons/book_2'
import {ic_layers} from 'react-icons-kit/md/ic_layers'
import {ic_mail_outline} from 'react-icons-kit/md/ic_mail_outline'
import { userPlus } from 'react-icons-kit/fa/userPlus'
import {ic_person_outline} from 'react-icons-kit/md/ic_person_outline'
import { times } from 'react-icons-kit/fa/times'
import { thList } from 'react-icons-kit/fa/thList'  
import { ellipsisV } from 'react-icons-kit/fa/ellipsisV'
import {Bar} from 'react-chartjs-2';
import color from 'rcolor';
import {Doughnut} from 'react-chartjs-2';

const initialState = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
		label: 'Numbers of customers',
		backgroundColor: '#3f7bff ',
		borderColor: '#a6c1ff',
		borderWidth: 1,
		hoverBackgroundColor: '#505ace',
        hoverBorderColor: 'rgba(255,99,132,1)',
		data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getState ={
  labels: [
    'Pendings',
    'Checked',
    'Old'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
    '#CCC',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
}

class DashboardPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Doughnut : {}
        }
    }
	componentWillMount(){
        this.setState(initialState);
        this.setState({
            Doughnut : getState
        })
    }
    gotoPage=(page)=>{
        Router.push(page)
    }
    render() {
        return (
            <React.Fragment>
                <style jsx>
                    {`
                    .item{
                        width: 95%;
                        background: white;
                        border-radius: 10px;
                        cursor : pointer
                    }
                    .item:hover{
                        transition:all 0.1s;
                        box-sizing:border-box;
                        box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
                        z-index:10;
                    }
                `}
                </style>
                <div className="col-12 row pl-5" style={{width:"100%"}}>
                    <h3 className="mt-3 col-12 pl-0" style={{color:"#0000006e", marginBottom:"20px"}}>Overview</h3>
                    <div className="col-lg-3 row mt-3" style={{marginLeft:"-5px"}}>
                        <div className="item row" onClick={()=> this.gotoPage("/admin/docs")}>
                            <div className="col-5" style={{marginTop:"35px"}}>
                                <Icon className="ml-4" style={{ marginBottom: "5px", marginRight: "5px",color:"#505ace" }} size={45} icon={book_2} />
                            </div>
                            <div className="col-7 pt-4">
                                <h3>10</h3>
                                <p style={{color:"#00000094"}}>Pending Docs</p>
                            </div>
                            <div className="col-12 row" style={{width:"100%",margin: "0px", marginTop:"10px"}}>
                            <div className="col-6" style={{border:"1px solid #0000001c", textAlign:"center", borderLeft:"0px"}}>
                                <h4 style={{marginTop:"10px"}}>20</h4>
                                <p style={{color:"#00000094"}}>Docs</p>
                            </div>
                            <div className="col-6" style={{border:"1px solid #0000001c", textAlign:"center", borderLeft:"0px", borderRight:"0px"}}>
                                <h4 style={{marginTop:"10px"}}>10</h4>
                                <p style={{color:"#00000094"}}>Old Docs</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 row mt-3" style={{marginLeft:"-5px"}}>
                        <div className="item row" onClick={()=> this.gotoPage("/admin/writers")}>
                            <div className="col-5" style={{marginTop:"35px"}}>
                                <Icon className="ml-4" style={{ marginBottom: "5px", marginRight: "5px",color:"#505ace" }} size={45} icon={ic_layers} />
                            </div>
                            <div className="col-6 pt-4">
                                <h3>10</h3>
                                <p style={{color:"#00000094"}}>Writers</p>
                            </div>
                            <div className="col-12 row" style={{width:"100%",margin: "0px", marginTop:"20px"}}>
                            <div className="col-6" style={{border:"1px solid #0000001c", textAlign:"center", borderLeft:"0px"}}>
                                <h4 style={{marginTop:"10px"}}>5</h4>
                                <p style={{color:"#00000094"}}>Avaliable</p>
                            </div>
                            <div className="col-6" style={{border:"1px solid #0000001c", textAlign:"center", borderLeft:"0px", borderRight:"0px"}}>
                                <h4 style={{marginTop:"10px"}}>5</h4>
                                <p style={{color:"#00000094"}}>Block</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 row mt-3" style={{marginLeft:"-5px"}}>
                        <div className="item row container" onClick={()=> this.gotoPage("/admin/contacts")}>
                            <div className="col-5" style={{marginTop:"35px"}}>
                                <Icon className="ml-4" style={{ marginBottom: "5px", marginRight: "5px",color:"#505ace" }} size={45} icon={ic_mail_outline} />
                            </div>
                            <div className="col-6 pt-4">
                                <h3>10</h3>
                                <p style={{color:"#00000094"}}>Contacts</p>
                            </div>
                            <div className="col-12 row" style={{width:"100%",margin: "0px", marginTop:"20px"}}>
                            <div className="col-6" style={{border:"1px solid #0000001c", textAlign:"center", borderLeft:"0px"}}>
                                <h4 style={{marginTop:"10px"}}>10</h4>
                                <p style={{color:"#00000094"}}>All</p>
                            </div>
                            <div className="col-6" style={{border:"1px solid #0000001c", textAlign:"center", borderLeft:"0px", borderRight:"0px"}}>
                                <h4 style={{marginTop:"10px"}}>5</h4>
                                <p style={{color:"#00000094"}}>Solve</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 row mt-3" style={{marginLeft:"-5px"}}>
                        <div className="item row container" onClick={()=> this.gotoPage("/admin/customers")}>
                            <div className="col-5" style={{marginTop:"35px"}}>
                                <Icon className="ml-4" style={{ marginBottom: "5px", marginRight: "5px",color:"#505ace" }} size={45} icon={ic_person_outline} />
                            </div>
                            <div className="col-6 pt-4">
                                <h3>50</h3>
                                <p style={{color:"#00000094"}}>Users</p>
                            </div>
                            <div className="col-12 row" style={{width:"100%",margin: "0px", marginTop:"20px"}}>
                            <div className="col-6" style={{border:"1px solid #0000001c", textAlign:"center", borderLeft:"0px"}}>
                                <h4 style={{marginTop:"10px"}}>10</h4>
                                <p style={{color:"#00000094"}}>Register</p>
                            </div>
                            <div className="col-6" style={{border:"1px solid #0000001c", textAlign:"center", borderLeft:"0px", borderRight:"0px"}}>
                                <h4 style={{marginTop:"10px"}}>45</h4>
                                <p style={{color:"#00000094"}}>Customers</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="item col-11 mt-4 row" style={{ width:"50%", border:"1px solid white", marginBottom:"100px", marginLeft:"0px",cursor:"default"}}>
                        <div className="col-12 col-lg-7 mt-3">
			                <Bar width={300} height={150} data={this.state} />
                        </div>
                        <div className="col-12 col-lg-5 mt-3">
                            <Doughnut width={300} height={150} data={this.state.Doughnut} />
                            <h4 style={{textAlign:"center", marginTop:"30px"}}>Numbers of documents</h4>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DashboardPage;