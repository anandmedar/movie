import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import Carousel from './Carousel';
import Footer from './Footer';

const Content = () => {
    return (
        <div>
            <div>
                <h2 style={{margin:"20px 20px 40px 20px", backgroundColor:"black", color:"yellow", padding:"10px 0px 10px 30px"}}>Movies</h2>
                <br />
                <Container>
                    <Row>
                        <Col sm={4} style={{paddingBottom:"10px"}}>
                            <img src='https://wallpapercave.com/wp/wp6408407.jpg' alt="1" width="360px" height="450px" class="img-responsive center"/>
                        </Col>
                        <Col sm={4} style={{paddingBottom:"10px"}}>
                            <img src='https://wallpapercave.com/wp/wp6408407.jpg' alt="1" width="360px" height="450px" class="img-responsive center"/>
                        </Col>
                        <Col sm={4} style={{paddingBottom:"10px"}}>
                            <img src='https://wallpapercave.com/wp/wp6408407.jpg' alt="1" width="360px" height="450px" class="img-responsive center"/>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
            <h2 style={{margin:"20px 20px 40px 20px", backgroundColor:"black", color:"yellow", padding:"10px 0px 10px 30px"}}>Web Series</h2>
                <br />
                <Container>
                    <Row>
                        <Col sm={4} style={{paddingBottom:"10px"}}>
                            <img src='https://wallpapercave.com/wp/wp6408407.jpg' alt="1" width="360px" height="450px" class="img-responsive center"/>
                        </Col>
                        <Col sm={4} style={{paddingBottom:"10px"}}>
                            <img src='https://wallpapercave.com/wp/wp6408407.jpg' alt="1" width="360px" height="450px" class="img-responsive center"/>
                        </Col>
                        <Col sm={4} style={{paddingBottom:"10px"}}>
                            <img src='https://wallpapercave.com/wp/wp6408407.jpg' alt="1" width="360px" height="450px" class="img-responsive center"/>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
            <h2 style={{margin:"20px 20px 40px 20px", backgroundColor:"black", color:"yellow", padding:"10px 0px 10px 30px"}}>Latest Buzz</h2>
                <br />
                <Container>
                    <Row>
                        <Col sm={4} style={{paddingBottom:"10px"}}>
                            <img src='https://wallpapercave.com/wp/wp6408407.jpg' alt="1" width="360px" height="450px" class="img-responsive center"/>
                        </Col>
                        <Col sm={4} style={{paddingBottom:"10px"}}>
                            <img src='https://wallpapercave.com/wp/wp6408407.jpg' alt="1" width="360px" height="450px" class="img-responsive center"/>
                        </Col>
                        <Col sm={4} style={{paddingBottom:"10px"}}>
                            <img src='https://wallpapercave.com/wp/wp6408407.jpg' alt="1" width="360px" height="450px" class="img-responsive center"/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br /><br />
        </div>
    );
  };
  
  class Home extends React.Component {
    render() {
      return (
        <div>
            <Carousel />
            <Content />
            <Footer />
        </div>
      );
    }
  };

export default Home;
  