import React, { Component } from 'react';
import { ic_person } from 'react-icons-kit/md/ic_person'
import { gitlab } from 'react-icons-kit/fa/gitlab'
import { ic_alarm } from 'react-icons-kit/md/ic_alarm'
import { ic_chat } from 'react-icons-kit/md/ic_chat'
import { ic_assignment_turned_in } from 'react-icons-kit/md/ic_assignment_turned_in'
import { ic_contacts } from 'react-icons-kit/md/ic_contacts'
import { Icon } from 'react-icons-kit'
import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
} from "react-scroll";
import Button from '@material-ui/core/Button';
import Router from 'next/router';
import { withRouter } from 'next/router';import dynamic from 'next/dynamic'
import MarkdownIt from 'markdown-it'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
    ssr: false
  });

class DocsPageMain extends Component {
    scrollToElement = (data) => {
        scroller.scrollTo(data, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -200
        })
    }
    constructor(props){
        super(props)
        this.mdParser = new MarkdownIt
    }
    componentDidMount() {
        const { router } = this.props;
        router.prefetch('/features');
    }
    handleDocsPage=(element)=>{
        this.props.actions.scrollToElement(element)
        Router.push("/docs/"+element.split(" ").join(""))
    }
    render() {
        return (
            <div>
                <style jsx>{`
            .docs_navi_background{
                background-color: black;
                width: 100%;
                height: 600px;
            }
            
            .docs_navi
            {
                color: white;
                background-position: center center;
                background-size: cover;
                width: 50%;
                height: 600px;
            }
            
            .docs_content_left_img:hover  img
            {
                transform: scale(1.05);
                transition: all 0.5s;
                box-shadow: 3px 4px 22px 0px rgba(0,0,0,0.75);
            }
            
            .docs_content_left_img img
            {
                transition: all 0.5s
            }
        `}
                </style>
                <div className="docs_navi_background" style={{}}>
                    <div className="docs_navi container" style={{ position: "absolute", left: "25%", background: 'url(../../../../../static/background-dark-grid-fade.png)' }}>
                    </div>
                    <div style={{ position: "relative", color: "white", width: "100%" }} className="row">
                        <div className="container col-12" style={{ textAlign: "center", paddingTop: "10%" }}>
                            <h1>Resource Chains Tools</h1>
                            <p style={{ color: "#ffffffa3" }}>All of our products and downloads</p>
                        </div>
                        <div className="col-2"></div>
                        <div className="showIcons row col-8 container" style={{ marginTop: 40 }}>
                            <div className="item_icon col-4 col-lg-2 ">
                                <div className="container" onClick={e => this.scrollToElement("Time Checker")} style={{ cursor: "pointer" }}>
                                    <div className="item_navi container" style={{ width: 60, height: 60, background: "#4630EB", textAlign: "center", verticalAlign: "middle", borderRadius: "10px" }}>
                                        <Icon size={'100%'} style={{ marginTop: "5px", marginLeft: "-10px", marginRight: "-10px" }} icon={ic_alarm} />
                                    </div>
                                    <p style={{ textAlign: "center" }}>Time Checker</p>

                                </div>
                            </div>
                            <div className="item_icon col-4 col-lg-2 ">
                                <div className="container" style={{ cursor: "pointer" }} onClick={e => this.scrollToElement("Project")}>
                                    <div className="item_navi container" style={{ width: 60, height: 60, background: "#4630EB", textAlign: "center", verticalAlign: "middle", borderRadius: "10px" }}>
                                        <Icon size={'100%'} style={{ marginTop: "5px", marginLeft: "-10px", marginRight: "-10px" }} icon={ic_assignment_turned_in} />
                                    </div>
                                    <p style={{ textAlign: "center" }}>Project</p>

                                </div>
                            </div>
                            <div className="item_icon col-4 col-lg-2 ">
                                <div className="container" style={{ cursor: "pointer" }} onClick={e => this.scrollToElement("Rocket Chat")}>
                                    <div className="item_navi container" style={{ width: 60, height: 60, background: "#4630EB", textAlign: "center", verticalAlign: "middle", borderRadius: "10px" }}>
                                        <Icon size={'100%'} style={{ marginTop: "5px", marginLeft: "-10px", marginRight: "-10px" }} icon={ic_chat} />
                                    </div>
                                    <p style={{ textAlign: "center" }}>Rocket Chat</p>

                                </div>
                            </div>
                            <div className="item_icon col-4 col-lg-2 ">
                                <div className="container" style={{ cursor: "pointer" }} onClick={e => this.scrollToElement("Gitlab")}>
                                    <div className="item_navi container" style={{ width: 60, height: 60, background: "#4630EB", textAlign: "center", verticalAlign: "middle", borderRadius: "10px" }}>
                                        <Icon size={'100%'} style={{ marginTop: "5px", marginLeft: "-10px", marginRight: "-10px" }} icon={gitlab} />
                                    </div>
                                    <p style={{ textAlign: "center" }}>Gitlab</p>

                                </div>
                            </div>
                            <div onClick={e => this.scrollToElement("Profile")} style={{ cursor: "pointer" }} className="item_icon col-4 col-lg-2 ">
                                <div className="container">
                                    <div className="item_navi container" style={{ width: 60, height: 60, background: "#4630EB", textAlign: "center", verticalAlign: "middle", borderRadius: "10px" }}>
                                        <Icon size={'100%'} style={{ marginTop: "5px", marginLeft: "-10px", marginRight: "-10px" }} icon={ic_person} />
                                    </div>
                                    <p style={{ textAlign: "center" }}>Profile</p>

                                </div>
                            </div>
                            <div className="item_icon col-4 col-lg-2 " style={{ cursor: "pointer" }}>
                                <div className="container" onClick={e => this.scrollToElement("Skill")}>
                                    <div className="item_navi container" style={{ width: 60, height: 60, background: "#4630EB", textAlign: "center", verticalAlign: "middle", borderRadius: "10px" }}>
                                        <Icon size={'100%'} style={{ marginTop: "5px", marginLeft: "-10px", marginRight: "-10px" }} icon={ic_contacts} />
                                    </div>
                                    <p style={{ textAlign: "center" }}>Skill Sheet</p>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="docs_content" style={{ marginTop: "100px", width: "90%", marginLeft: "8%" }}>
                    <div className="docs_content_left row" style={{ width: "100%", marginTop: "50px" }}>
                        <Element name="Profile" className="col-1"></Element >
                        <div className="docs_content_left_content col-12 col-lg-5 row container float-right" style={{ marginTop: "50px", height: "100%" }}>
                            <div className="item_navi container" style={{ width: 60, height: 60, background: "white", textAlign: "center", verticalAlign: "middle", borderRadius: "10px", border: "1px solid #0000002b", marginRight: "0" }}>
                                <Icon size={'100%'} style={{ marginTop: "5px", marginLeft: "-10px", marginRight: "-10px" }} icon={ic_person} />
                            </div>
                            <h4 className="col-10" style={{ height: "" }}>Resource Chains Profile</h4>
                            <div className="col-12">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum, et amet numquam cum vitae iste. Sunt quisquam numquam, eum temporibus, molestiae officia sed, deleniti assumenda repellendus molestias eveniet facere?
                            </div>
                            <Button onClick={e=>this.handleDocsPage("Profile")} className="col-3" variant="contained" color="secondary" style={{margin:"10px 20px"}}>
                                More detail
                            </Button>
                        </div>
                        <div className="col-1"></div>
                        <div className="docs_content_left_img col-12 col-lg-5 float-left">
                            <img style={{ width: "100%" }} src="https://www.thebestdesigns.com/design-images/syscoin.org-18.jpg" />
                        </div>
                    </div>

                    <div className="docs_content_right row" style={{ width: "100%", marginTop: "50px" }}>
                        <div className="docs_content_left_img col-12 col-lg-6 " >
                            <img style={{ width: "100%" }} src="https://www.thebestdesigns.com/design-images/syscoin.org-2.jpg" />
                        </div>
                        <Element name="Time Checker" className="col-1"></Element>
                        <div className="docs_content_left_content col-12 col-lg-5 row container" style={{ marginTop: "50px", height: "100%" }}>
                            <div className="item_navi container" style={{ width: 60, height: 60, background: "white", textAlign: "center", verticalAlign: "middle", borderRadius: "10px", border: "1px solid #0000002b", marginRight: "5px", marginLeft: "5px" }}>
                                <Icon size={'100%'} style={{ marginTop: "5px", marginLeft: "-10px", marginRight: "-10px" }} icon={ic_alarm} />
                            </div>
                            <h4 style={{ height: "20px" }}>Resource Chains Time Checker</h4>
                            <div className="col-12">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum, et amet numquam cum vitae iste. Sunt quisquam numquam, eum temporibus, molestiae officia sed, deleniti assumenda repellendus molestias eveniet facere?
                            </div>
                            <Button onClick={e=>this.handleDocsPage("Time Checker")} className="col-3" variant="contained" color="secondary" style={{margin:"10px 20px"}}>
                                More detail
                            </Button>
                        </div>
                    </div>
                
                    <div className="docs_content_left row" style={{ width: "100%", marginTop: "50px" }}>
                        <Element name="Gitlab" className="col-1"></Element >
                        <div className="docs_content_left_content col-12 col-lg-5 row container float-right" style={{ marginTop: "50px", height: "100%" }}>
                            <div className="item_navi container" style={{ width: 60, height: 60, background: "white", textAlign: "center", verticalAlign: "middle", borderRadius: "10px", border: "1px solid #0000002b", marginRight: "0" }}>
                                <Icon size={'100%'} style={{ marginTop: "5px", marginLeft: "-10px", marginRight: "-10px" }} icon={gitlab} />
                            </div>
                            <h4 className="col-10" style={{ height: "" }}>Resource Chains Gitlab</h4>
                            <div className="col-12">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum, et amet numquam cum vitae iste. Sunt quisquam numquam, eum temporibus, molestiae officia sed, deleniti assumenda repellendus molestias eveniet facere?
                            </div>
                            <Button onClick={e=>this.handleDocsPage("Gitlab")} className="col-3" variant="contained" color="secondary" style={{margin:"10px 20px"}}>
                                More detail
                            </Button>
                        </div>
                        <div className="col-1"></div>
                        <div className="docs_content_left_img col-12 col-lg-5 float-left">
                            <img style={{ width: "100%" }} src="https://www.thebestdesigns.com/design-images/syscoin.org-18.jpg" />
                        </div>
                    </div>

                    <div className="docs_content_right row" style={{ width: "100%", marginTop: "50px" }}>
                        <div className="docs_content_left_img col-12 col-lg-6 " >
                            <img style={{ width: "100%" }} src="https://www.thebestdesigns.com/design-images/syscoin.org-2.jpg" />
                        </div>
                        <Element name="Rocket Chat" className="col-1"></Element>
                        <div className="docs_content_left_content col-12 col-lg-5 row container" style={{ marginTop: "50px", height: "100%" }}>
                            <div className="item_navi container" style={{ width: 60, height: 60, background: "white", textAlign: "center", verticalAlign: "middle", borderRadius: "10px", border: "1px solid #0000002b", marginRight: "5px", marginLeft: "5px" }}>
                                <Icon size={'100%'} style={{ marginTop: "5px", marginLeft: "-10px", marginRight: "-10px" }} icon={ic_chat} />
                            </div>
                            <h4 style={{ height: "20px" }}>Resource Chains Rocket Chat</h4>
                            <div className="col-12">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum, et amet numquam cum vitae iste. Sunt quisquam numquam, eum temporibus, molestiae officia sed, deleniti assumenda repellendus molestias eveniet facere?
                            </div>
                            <Button onClick={e=>this.handleDocsPage("Rocket Chat")} className="col-3" variant="contained" color="secondary" style={{margin:"10px 20px"}}>
                                More detail
                            </Button>
                        </div>
                    </div>
                
                    <div className="docs_content_left row" style={{ width: "100%", marginTop: "50px" }}>
                        <Element name="Skill" className="col-1"></Element >
                        <div className="docs_content_left_content col-12 col-lg-5 row container float-right" style={{ marginTop: "50px", height: "100%" }}>
                            <div className="item_navi container" style={{ width: 60, height: 60, background: "white", textAlign: "center", verticalAlign: "middle", borderRadius: "10px", border: "1px solid #0000002b", marginRight: "0" }}>
                                <Icon size={'100%'} style={{ marginTop: "5px", marginLeft: "-10px", marginRight: "-10px" }} icon={ic_contacts} />
                            </div>
                            <h4 className="col-10" style={{ height: "" }}>Resource Chains Skill</h4>
                            <div className="col-12">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum, et amet numquam cum vitae iste. Sunt quisquam numquam, eum temporibus, molestiae officia sed, deleniti assumenda repellendus molestias eveniet facere?
                            </div>
                            <Button onClick={e=>this.handleDocsPage("Skill Sheet")} className="col-3" variant="contained" color="secondary" style={{margin:"10px 20px"}}>
                                More detail
                            </Button>
                        </div>
                        <div className="col-1"></div>
                        <div className="docs_content_left_img col-12 col-lg-5 float-left">
                            <img style={{ width: "100%" }} src="https://www.thebestdesigns.com/design-images/syscoin.org-18.jpg" />
                        </div>
                    </div>

                    <div className="docs_content_right row" style={{ width: "100%", marginTop: "50px" }}>
                        <div className="docs_content_left_img col-12 col-lg-6 " >
                            <img style={{ width: "100%" }} src="https://www.thebestdesigns.com/design-images/syscoin.org-2.jpg" />
                        </div>
                        <Element name="Project" className="col-1"></Element>
                        <div className="docs_content_left_content col-12 col-lg-5 row container" style={{ marginTop: "50px", height: "100%" }}>
                            <div className="item_navi container" style={{ width: 60, height: 60, background: "white", textAlign: "center", verticalAlign: "middle", borderRadius: "10px", border: "1px solid #0000002b", marginRight: "5px", marginLeft: "5px" }}>
                                <Icon size={'100%'} style={{ marginTop: "5px", marginLeft: "-10px", marginRight: "-10px" }} icon={ic_assignment_turned_in} />
                            </div>
                            <h4 style={{ height: "20px" }}>Resource Chains Project</h4>
                            <div className="col-12">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum, et amet numquam cum vitae iste. Sunt quisquam numquam, eum temporibus, molestiae officia sed, deleniti assumenda repellendus molestias eveniet facere?
                            </div>
                            <Button onClick={e=>this.handleDocsPage("Project")} className="col-3" variant="contained" color="secondary" style={{margin:"10px 20px"}}>
                                More detail
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(DocsPageMain);