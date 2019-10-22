import 'date-fns';
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Icon } from 'react-icons-kit'
import { ic_send } from 'react-icons-kit/md/ic_send'
import DateFnsUtils from '@date-io/date-fns';
import * as moment from "moment"
import * as validator from "validator"
import fetch from 'unfetch';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import * as api from "../../../api"
import cookies from 'js-cookie';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';



export default function AlertDialog(props) {
    const [scroll, setScroll] = React.useState('paper');
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));
    const [isFalse, setIsFalse] = React.useState(false)
    const [reply, setReply] = React.useState("")
    const patchContactUrl = api.callAPI()+`contact/check/`

    function handleOnchange(e){
        setReply(e.target.value)
    }
    function handleSubmit(){
        const check = {
            SurrogateName:"", 
            CompanyName:"",
            Start:"", 
            End:"" , 
            Email:"",
            CompanyAddress:"",
            SurrogatePhone:"",
            CompanyPhone:""
        }
        for(let i in check)
        {
            if(props.data[i] === "")
                return setIsFalse(true)
        }
        if(moment(End).format('MM DD YYYY') < moment(Start).format('MM DD YYYY')|| !validator.isEmail(Email) ||!validator.isNumeric(SurrogatePhone) || !validator.isNumeric(CompanyPhone))
            return setIsFalse(true)
        if(isFalse)
            return
        props.handleSubmit()
    }
    function replyContact(id){
        const data = new URLSearchParams()
        data.append("status",true)
        fetch(patchContactUrl+id, {
            method: 'PATCH',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + cookies.get("token")
            },
            body:data
        }).then(res => {
            console.log(res)
            return res.json()
        }).then(data => {
            console.log(data.result)
        })
        props.handleSubmit(id)
    }
    const {
        companyAddress, 
        companyName,
        companyPhoneNumber, 
        createdDate, 
        email,
        fullName,
        message,
        personalPhoneNumber,
        type,
        id} = props.data
    return(
        <div>
            <Dialog
                open={props.openModal}
                onClose={props.handleModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                scroll={scroll}
            >
                <DialogTitle id="alert-dialog-title">{"Customer Info"}</DialogTitle>
                <DialogContent className="row" style={{ width: "100%" }} >
                    <div className="form-group col-12 row">
                        <div>
                            <p>{createdDate.substring(0,10).split("-").reverse().join("-")}</p>
                            <h3>{companyName} - <span style={{fontSize:"20px",fontWeight:"400"}}>{fullName}</span></h3>
                            <p><b>Email </b> : {email} - <b>Address</b>  : {companyAddress}</p>
                            <p><b>Number Phone</b> : {personalPhoneNumber}</p>
                        </div>
                        <div>
                            <p><b>Type contact</b> : {type}</p>
                        </div>
                        <div className="col-12" style={{width:"100%",background:"#efefef",paddingTop:"20px",paddingBottom:"20px"}}>
                            {message}
                        </div>
                        <div className="col-12 mt-4">Reply : </div>
                        <TextareaAutosize onChange={e=>handleOnchange(e)} className="col-12 mt-3" style={{width:"100%"}} style={{width:"100%"}} aria-label="minimum height" rows={3} placeholder="Minimum 3 rows" />
                        
                        <div className="col-2 mt-3" style={{ marginBottom: "30px" }}>
                            <Button value={reply} onClick={e=>replyContact(id)} variant="contained" color="primary" style={{ border: "1px solid #ffa9a9", width: "120px", marginTop: "20px" }}>
                                Submit <Icon style={{ marginLeft: "10px" }} size={20} icon={ic_send} />
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}