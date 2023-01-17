import React from 'react'
import "./AdminDashboard.css"
import LeftSideBarMenu from './leftSideBarMenu'
import Header from './Header'
import Dashboard from './Dashboard'
import { Row,Col } from 'react-bootstrap'

export default function AdminDashboard() {
    return (
        <div>
                <div className='container-fluid'>
            <Row>
                <Col lg={2} id="mainColLeftSide">
                    <LeftSideBarMenu />
                </Col>
                <Col lg={10} id="mainColRigthSide">
                    <Header />
                    <div className='contantClick'>
                    <Dashboard />
                    </div>
                </Col>
            </Row>
            </div>
        </div>
    )
}
