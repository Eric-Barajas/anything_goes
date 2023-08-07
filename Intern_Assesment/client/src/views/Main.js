import React from 'react'
import "./styles.css";
import Slider from "../components/Slider";
import Sidebar from '../components/Sidebar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Main = () => {
    const options = {
        data: [
            {
                type: "column",
                dataPoints: [
                    { label: "AFILENAME", y: 5, color: "grey" },
                    { label: "Backblaze", y: 13, color: "red" },
                    { label: "Azure", y: 26, color: "blue" },
                    { label: "Google", y: 38 },
                    { label: "AWS", y: 36, color: "black" }
                ]
            }
        ]
    }

    return (
        <Container>

            {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
            <Row>
                <Col sm={3}>
                    <Sidebar />
                </Col>
                <Col>
                    <div className='focus' >
                        <Nav className="flex" style={{ justifyContent: "space-between" }}>
                            <Nav.Link href="#home">Go Back</Nav.Link>
                            <NavDropdown title="@Kevan" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Action 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Action 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <div className='body'>
                            <p style={{ textAlign: "center" }}> How much data will you store?</p>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">1 TB</option>
                                <option value="2">100 TB</option>
                                <option value="3">1000 TB</option>
                            </Form.Select>
                            <div style={{ textAlign: "center", marginTop: 15 }}>
                                <p> What percentage of your data will you transfer or download (data transfer - egress)? </p>
                                <Slider />
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <p> By using AFILENAME you could save: $55,000.00 a month!</p>
                                <Button variant="primary" style={{ width: "250px", marginBottom: "50px" }} > Get Started</Button>
                            </div>
                            <div>
                                <CanvasJSChart options={options} />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* </div> */}

        </Container >
    )
}

export default Main;