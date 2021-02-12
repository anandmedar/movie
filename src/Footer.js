import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

const Footer = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Row>
                        <Col sm={1}>
                            <li>
                                <a style={{color: "white"}}>Logo</a>
                            </li>
                        </Col>
                        <Col sm={9}>

                        </Col>
                        <Col sm={2}>
                            <li>
                                <a href="#" style={{color: "white"}}>Back to Top</a>
                            </li>
                        </Col>
                    </Row>
                </ul>
            </nav>

            <div className="A">
                <Row sm={1}>
                    <Col sm={1}></Col>
                    <Col sm={3}>
                        <h2>Follow us on</h2>
                        <Row>
                            <img style={{ padding:"10px"}} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook2_colored_svg-128.png" alt="Second slide" width="40" height="40"/>
                            <img style={{ padding:"10px"}} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png" alt="Second slide" width="40" height="40"/>
                            <img style={{ padding:"10px"}} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-128.png" alt="Second slide" width="40" height="40"/>
                            <img style={{ padding:"10px"}} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Pinterest_colored_svg-128.png" alt="Second slide" width="40" height="40"/>
                            <img style={{ padding:"10px"}} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Tumblr2_colored_svg-128.png" alt="Second slide" width="40" height="40"/>
                        </Row>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={2} style={{paddingTop:"35px"}}>
                        <a>Privacy Policy</a>
                    </Col>
                    <Col sm={2} style={{paddingTop:"35px"}}>
                        <a>Advertise with us</a>
                    </Col>
                    <Col sm={2} style={{paddingTop:"35px"}}>
                        <a>Contact with us</a>
                    </Col>
                    <Col sm={1}></Col>              
                </Row>
            </div>
        </div>
    );
};

export default Footer;