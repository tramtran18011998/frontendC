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
import {ic_remove_circle_outline} from 'react-icons-kit/md/ic_remove_circle_outline'
import { ic_check } from 'react-icons-kit/md/ic_check'
import { ic_sync } from 'react-icons-kit/md/ic_sync'
import { ic_person_add } from 'react-icons-kit/md/ic_person_add'
import { minus } from 'react-icons-kit/fa/minus'
import { ic_arrow_back } from 'react-icons-kit/md/ic_arrow_back'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Router from 'next/router'



export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));
    const [editUser, setEditUser] = React.useState(false)
    const [isFalse, setIsFalse] = React.useState(false)

    function changeFile(e) {
        console.log(e.target.files[0])
        props.handleOnchange("img", URL.createObjectURL(e.target.files[0]))
    }
    function handleOnchange(e) {
        const value = e.target.value
        const info = e.target.name
        props.handleOnchange(info, value)
    }
    function handleChangeDate(e, name) {
        const value = new Date(e)
        const info = name
        let day = value.getDate()
        let month = value.getMonth()
        let year = value.getFullYear()
        const result = month + "/" + day + "/" + year
        props.handleOnchange(info, result)

    }
    function handleSubmit() {
        const check = {
            name:"",
            username:"", 
            phoneNumber:"" , 
            email:""
        }
        for(let i in check)
        {
            console.log(props.data)
            if(props.data[i] === "")
                return setIsFalse(true)
        }
        return props.handleSubmit()
    }
    function handleAddWriter() {
        setEditUser(!editUser)
    }
    function handleModal(){
        setIsFalse(false)
        props.handleModal()
    }
    function handleStatusWriter(status,id){
        console.log("ban")
        props.handleStatusWriter(status,id)
    }
    function displayArrDocs(){
        props.arrDocs.map(doc => console.log(doc))
        return props.arrDocs.map(doc=>{
            <div className="row item col-12 col-lg-11 " style={{ border: "1px solid #00000017" }}>
            <div className="col-3">
                <div style={{ background: "#4bc051", width: "28px", height: "28px", borderRadius: "50%", position: "absolute", color: "white", marginTop: "5px" }}>
                    <Icon size={20} icon={ic_check} style={{ marginLeft: "5px", marginTop: "1px" }} />
                </div>
            </div>
            <p className="col-6" style={{ marginTop: "5px" }}>Rocket Chat</p>
        </div>
        })
    }
    function handleDoc(id){
        console.log("long")
        Router.push("/admin/docs/"+id)
    }
    // console.log(props)
    const {avatar, name,username, phoneNumber , email, status, password, id} = props.data
    console.log(props)
    return (
        <div>
            <Dialog
                open={props.openModal}
                onClose={handleModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                scroll={scroll}
            >
                <style jsx>
                    {`
                .contacts-type{
                    background: white;
                    border-radius: 10px;
                    border:1px solid #00000030
                }
                .item{
                    transition:all 0.2s;
                    cursor:pointer
                }
                .item:hover{
                    transition:all 0.2s;
                    border:1px solid #00000030;
                    transform : scale(1.02,1.02); 
                    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
                }
            `}
                </style>
                <DialogTitle id="alert-dialog-title">{"User Info"}</DialogTitle>
                <DialogContent className="row" style={{ width: "100%" }} >
                    {props.isAddWriter ? <div className="col-12 row ml-3" style={{ border: "0px", margin: "0px", padding: "0px" }}>
                            
                            <div className="col-12 row mb-5">
                                {props.isUsedEmail ? <p style={{color:"red"}}>Your Email is used</p> : "" }
                                <br/>
                                {props.isUsedUsername ? <p style={{color:"red"}}>Your Username is used</p> : "" }
                                <br/>
                                {props.isUsedPhone ? <p style={{color:"red"}}>Your Phone is used</p> : "" }
                                <div className="col-12">
                                <TextField
                                    id="standard-name"
                                    label="Name"
                                    margin="normal"
                                    className="col-12"
                                    name="name"
                                    value={name}
                                    onChange={e => handleOnchange(e)}
                                />
                                {isFalse && name === "" ? <span>Name is required</span>:""}

                                </div>
                                <div className="col-12">
                                <TextField
                                    id="standard-name"
                                    label="User Name"
                                    margin="normal"
                                    className="col-12"
                                    name="username"
                                    value={username}
                                    onChange={e => handleOnchange(e)}
                                />
                                {isFalse && username === "" ? <span>User Name is required</span>:""}

                                </div>
                                <div className="col-12">
                                <TextField
                                    id="standard-name"
                                    label="Email"
                                    margin="normal"
                                    name="email"
                                    value={email}
                                    className="col-12"
                                    onChange={e => handleOnchange(e)}
                                />
                                {isFalse && email === "" ? <span>Email is required</span>:""}

                                </div>
                                <div className="col-12">
                                <TextField
                                    id="standard-name"
                                    label="phoneNumber"
                                    margin="normal"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    className="col-12 mb-3"
                                    onChange={e => handleOnchange(e)}
                                />
                                {isFalse && phoneNumber === "" ? <span>phoneNumber is required</span>:""}
                                <TextField
                                    id="standard-name"
                                    label="password"
                                    margin="normal"
                                    name="password"
                                    value={password}
                                    type="password"
                                    className="col-12 mb-3"
                                    onChange={e => handleOnchange(e)}
                                />
                                {isFalse && password === "" ? <span>Password is required</span>:""}

                                </div>
                                <Button onClick={handleSubmit} style={{ borderRadius: "20px" }} variant="contained" style={{ background: "#4caf50", color: "white",marginLeft:"15px",marginTop:"20px" }}>
                                    Submit <Icon size={20} style={{ marginLeft: "10px" }} icon={ic_send} />
                                </Button>

                            </div>
                        </div> :
                    <div className="col-12 row" style={{ margin: "0px", padding: "0px" }}>
                        <div className="row col-12">
                            <div className="col-6">
                                <img style={{width:"100%"}} src={"http://localhost:8080/upload/"+avatar} />
                            </div>
                            <div className="col-6">
                                <h5>{name}</h5>
                                <p style={{ marginBottom: "0px" }}>{email}</p>
                                <p>0778722539</p>
                                {status ? 
                                <Button onClick={e=>handleStatusWriter(false,id)} style={{ borderRadius: "20px" }} variant="contained" color="secondary">
                                    <Icon size={20} style={{ marginRight: "10px" }} icon={ic_remove_circle_outline} /> Ban Writer
                                </Button>
                                :
                                <Button onClick={e=>handleStatusWriter(true,id)} style={{ borderRadius: "20px",color:"white", background:"#4bc051" }} variant="contained">
                                    <Icon size={20} style={{ marginRight: "10px" }} icon={ic_check} /> Available Writer
                                </Button>
                            }
                            </div>
                        </div>
                        <div className="col-12 row mt-3" style={{ overflow: "hidden",width:"400px"  }}>
                            <div className="col-11 row mb-5" style={{ maxHeight: "200px", overflowY: "scroll", overflowX: "visible", paddingLeft: "35px",width:"100%" }}>
                                {props.arrDocs.map(doc=> {if(doc.status === "PENDING" || doc.status === "CHECKED")
                                return(
                                    <div key={doc.id} className="row item col-12 col-lg-11 " style={{ border: "1px solid #00000017",height:"50px" }} onClick={e=>handleDoc(doc.id)}>
                                    <div className="col-3">
                                        {doc.status === "CHECKED" ?
                                        <div style={{ background: "#4bc051", width: "28px", height: "28px", borderRadius: "50%", position: "absolute", color: "white", marginTop: "5px" }}>
                                            <Icon size={20} icon={ic_check} style={{ marginLeft: "5px", marginTop: "1px" }} />
                                        </div> 
                                        :
                                        <div style={{ background: "#1700d6b8", width: "28px", height: "28px", borderRadius: "50%", position: "absolute", color: "white", marginTop: "5px" }}>
                                            <Icon size={20} icon={ic_sync} style={{ marginLeft: "5px", marginTop: "1px" }} />
                                        </div>
                                        }
                                    </div>
                                    <p className="col-6" style={{ marginTop: "5px" }}>Rocket Chat</p>
                                    </div>)
                                    })
                                }
                            </div>

                        </div>
                    </div>
                    }  
               </DialogContent>
            </Dialog>
        </div>
    );
}