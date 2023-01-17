import React from 'react'
import "./leftSideBarMenu.css"
import MainLogo from"./image/mainLogo.png"
import { Container, Row } from 'react-bootstrap-v5'
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {fagaugemax} from '@fortawesome/free-solid-svg-icons'
// import { BsFillPeaceFill } from "react-icons/bs";

export default function LeftSideBarMenu() {
  return (
    <div>
        <div className="leftSidebar">
               <Container>
               <Row>
               <div className="Mainlogo">
               <img src={MainLogo} alt="" id='Mainlogo' />
               </div>
               </Row>
               <Row>
                    <div className="menuContain">
                        <ul>
                        <li><i class="fa-solid fa-gauge" id='gaugeIcon'></i><span>Dashboard</span></li>
                        <li><span>Department</span></li>
                        <li><span>Projects</span></li>
                        <li><span>Task</span>
                            {/* <ul>
                                <li>Assign Task</li>
                                <li>View Task</li>
                            </ul> */}
                        </li>
                    </ul>
                    <hr />
                    <ul>
                        <li>Setting</li>
                    </ul>
                    </div>
               </Row>
               </Container>
        </div>
    </div>
  )
}
