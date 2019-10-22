import React, { Component } from 'react';
import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
} from "react-scroll";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { name } from "../reducers";
import * as action from "../actions";
import { withRouter } from "react-router-dom";
import { useRouter } from "next/router"

class DocsPageDetail extends Component {
    scrollToElement = (data) => {
        console.log(data)
        scroller.scrollTo(data, {
            duration: 500,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -200
        })
    }
    componentDidMount() {
        const data = this.props.elementScroll
        const element = this.props.location.pathname.replace("/docs/", "")
        console.log(element)
        scroller.scrollTo(element, {
            duration: 500,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -200
        })
        this.props.actions.initScrollToElement()
    }
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <style>
                    {`
                        .category ul li {
                            list-style : none;
                            text-align : right;
                            margin-top:15px;
                            width: 110px;
                            float: right;
                            cursor:pointer
                        }
                    `}
                </style>
                <div className="container" style={{ width: "100%", marginTop: "30px" }}>
                    <div className="row">
                        <div className="category col-2 col-lg-2" style={{ position: "fixed", zIndex: "10",width: "14.5%" }}>
                            <h3 style={{ textAlign: "right" }}>Content</h3>
                            <ul className="row">
                                <style jsx>{`
                        .line{
                            margin-right:-10px;
                            height:0px;
                            width:5px;
                            background:#f50057;
                            transition:all 0.2s;
                            float:right
                        }
                        li:hover .line{
                            height:22px;
                            transition:all 0.2s;
                            color : #f50057;
                        }
                        li:hover {
                            color : red;
                        }
                        @media (max-width: 650px) {
                            .category {
                                display:none!important
                            }
                        }
                    `}</style>
                                <li onClick={e => this.scrollToElement("Profile")} className="col-12">Profile <div className="line"></div></li>
                                <li onClick={e => this.scrollToElement("TimeChecker")} className="col-12">Time checker <div className="line"></div></li>
                                <li onClick={e => this.scrollToElement("RocketChat")} className="col-12">Rocket Chat <div className="line"></div></li>
                                <li onClick={e => this.scrollToElement("Project")} className="col-12">Project <div className="line"></div></li>
                                <li onClick={e => this.scrollToElement("SkillSheet")} className="col-12">Skill Sheet <div className="line"></div></li>
                                <li onClick={e => this.scrollToElement("Gitlab")} className="col-12">Gitlab <div className="line"></div></li>
                            </ul>
                        </div>
                        <div className="col-3 col-lg-3"></div>
                        <div className="content col-8">
                            <div>
                                <div>
                                    <Element name="Profile"></Element>
                                    <h3>Profile</h3>
                                    <div>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                        <p>

                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                        <p>

                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                    </div>
                                </div>
                                <div>
                                    <Element name="TimeChecker"></Element>
                                    <h3>Time Checker</h3>
                                    <div>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                        <p>

                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                        <p>

                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                    </div>
                                </div>
                                <div>
                                    <Element name="RocketChat"></Element>
                                    <h3>Rocket Chat</h3>
                                    <div>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                        <p>

                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                        <p>

                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                    </div>
                                </div>
                                <div>
                                    <Element name="Project"></Element>
                                    <h3>Project</h3>
                                    <div>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                        <p>

                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                        <p>

                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                    </div>
                                </div>
                                <div>
                                    <Element name="SkillSheet"></Element>
                                    <h3>Skill Sheet</h3>
                                    <div>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                        <p>

                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                        <p>

                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                    </div>
                                </div>
                                <div>
                                    <Element name="Gitlab"></Element>
                                    <h3>Gitlab</h3>
                                    <div>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                        <p>

                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                        <p>

                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro ut ab! Assumenda deleniti nobis omnis voluptatibus eveniet fuga minus a officia? Repudiandae placeat quam cupiditate corporis doloremque, suscipit, nemo repellat eum beatae quidem explicabo tenetur labore exercitationem sint ullam quis non odit. Totam quis non accusantium labore aperiam eum.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
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
    )(DocsPageDetail)
);