import React from 'react'
import "./Dashboard.css"
import { Row } from 'react-bootstrap-v5';

export default function Dashboard() {
  return (
    <div className='mainDashboardPage'>
        {/* <Container> */}
            <Row className='searchbox'>
                <div className="searchBox">
                <form action="" className='searchBoxForm'>
                <input type="text" placeholder='Search' id='searchBoxInput' />
                <button><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                </form>
                </div>
            </Row>
        {/* </Container> */}
    </div>
  );
}