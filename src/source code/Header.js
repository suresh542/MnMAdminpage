import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import "./Header.css"
// import FontAwesomeIcon from "@fortawesome/react-fontawesome"
// MainHeader
export default function Header() {
  return (
    <div>
        <div className="MainHeader">
            <Container>
                    <Row>
                       <Col lg={8} id="col_8">
                            <span className='Dashboardfont'>Dashboard</span>
                       </Col>
                       <Col lg={4} >
                       {/* <FontAwesomeIcon icon="fa-thin fa-message-lines" /> */}

                       </Col>
                    </Row>
            </Container>
        </div>
    </div>
  )
}
