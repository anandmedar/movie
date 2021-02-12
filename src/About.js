import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Footer from './Footer';
// import ReactDOM from 'react-dom';

const Sree = () => {
    return (
        <div>
            <div>
                <h2 style={{margin:"20px 100px 20px 100px", backgroundColor:"black", color:"yellow", padding:"10px 0px 10px 30px"}}>LATEST BUZZ</h2>
                <br />
                <Container>
                    <Row>
                        <Col sm={12}>
                            <img src='https://wallpapercave.com/wp/wp6408407.jpg' alt="1" width="100%" height="500px" class="img-responsive center"/>
                        </Col>
                    </Row>
                    <br />
                    <h5>2 Hrs 15 Mins   |   Amazon   |   20-Nov-2020</h5><br />
                    <h5>Cast - Anand Devarakonda, Varsha Bollamma, Chaitanya Garikapati, Divya Sripada, Goparaju Ramana and others</h5><br />
                    <Row>
                        <Col sm={6}>
                            <h5>Director - Vinod Anantoju</h5><br />
                            <h5>Producer - V. Anand Prasad</h5><br />
                            <h5>Banner - Bhavya Creations</h5><br />
                            <h5>Music - Sweekar Agasthi</h5><br />
                            <h5>Producer - V. Anand Prasad</h5><br />
                        </Col>
                        <Col sm={3}>
                            <img src='https://cdn2.iconfinder.com/data/icons/circle-ui-1/512/star-512.png' alt="11" width="100%" height="100%" class="img-responsive center"/>
                        </Col>
                        <Col sm={3}>
                            <img src='https://cdn2.iconfinder.com/data/icons/circle-ui-1/512/star-512.png' alt="12" width="100%" height="100%" class="img-responsive center"/>
                        </Col>
                    </Row>
                    <br />
                    <h5>While the mid range films starring big names are patiently waiting for the theatrical business to be reinstated, low budget films are queuing up on OTT platforms. Middle Class Melodies is the latest Telugu film to go digital.</h5><br />
                    <h5>What is it about?</h5><br />
                    <h5>Raghava (Anand) wants to open a hotel in Guntur as he believes that the Bombay Chutney will make him famous. He is in love with his cousin Sandhya (Varsha), but he cannot dare to approach her father until he succeeds in life. Raghava’s father (Ramana) is a typical middle class man who is initially reluctant to support his son as he fears failure. Raghava opens a hotel, but realizes it is not as easy as he thought to be successful in the food business.</h5><br />
                    <h5>Performances:</h5><br />
                    <h5>Anand is alright as the middle class boy next door. His performance is better compared to his debut film, but he needs to improve a lot. He didn’t put in much effort to play the Guntur boy as the strong Telangana accent is still very noticeable. Varsha Bollamma is cute and her expressive eyes convey a lot. Goparaju Ramana as Anand’s father is the highlight of the film. Every scene that he is in is a riot. It is easily one of the most entertaining performances in recent times. Chaitanya as Anand’s close friend is good. Divya Sripada is impressive but doesn’t get much screen time.</h5><br />
                    <h5>Technicalities:</h5><br />
                    <h5>Vinod Anantoju focused on creating moments rather than telling a story. Naming the film Middle Class Melodies seems to be deliberate. Vinod is successful in etching out natural characters and creating life like situations. However, the storyline is too thin to keep you invested for more than two hours. There is too much lag in certain sequences that keep on running for minutes together. Janardhan Pasumarthi shines as a dialogue writer by keeping it simple and realistic. Background score is good but the songs could have been better. Cinematography is neat. Production values are good.</h5><br />
                    <h5>Analysis:</h5><br />
                    <h5>Middle Class Melodies is all about the little things in the typical middle class life. The story is set in Guntur and it revolves around Bombay Chutney (a recipe made of Besan). We expect the film to focus on the protagonist’s dream of running a successful tiffin center, but there is more to it. As the title suggests it offers a peek into everyday lives of characters that are relatable.</h5><br />
                    <h5>The protagonist thinks his chutney is the greatest, but doesn’t realize that it is nothing special until he discovers a secret ingredient. His friend thinks he has become successful just by owning a small mobile phone shop in his village. He is obsessed with horoscopes to an extent where he ditches the girl he is in love with as their kundalis do not match. There is a sequence of events that make him realize his mistake.</h5><br />
                    <h5>There is a subtle satire on the roller coaster ride of emotions that a middle class family goes through as their piece of land price rises and falls and then rises again. It reminds us of the spite of middle class land owners in Amaravati region. The film never overdoes anything and keeps the emotion and humor simple without going overboard. Even the success of the protagonist is not celebrated. The director ends the film by showing that there is no end to the daily fight of middle class people to survive.</h5><br />
                    <h5>There are a handful of scenes that are thoroughly enjoyable, but there are also sequences that keep on dragging forever. Second half of the film is tedious with repetitive scenes. Romance threads are underdeveloped and restricted to the background. The film is unnecessarily dragged in spite of the obvious ending. There is a deliberate attempt to end it on a fun note with a sequence where Tharun Bhascker makes a cameo appearance. All in all it is a charming small film that has its moments.</h5><br />
                    <h3>Bottom Line: All About Middle Class!</h3><br /><br /><br />
                    <Row>
                        <Col sm={3}>
                            <h6 style={{paddingTop:"50px"}}>Your Comment:</h6>
                        </Col>
                        <Col sm={5} className="center">
                            <textarea id="moviereview" name="moviereview" rows="6" cols="50"></textarea>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm={3}>
                            <h6 style={{paddingTop:"40px"}}>Your Rating</h6>
                        </Col>
                        <Col sm={5}>
                            <img src='https://lh3.googleusercontent.com/proxy/RQZt9OM6YNTuUhGYyJqdhkh8liaJBsk7ysLWtQxB58tEYnJJNyOOLhgkPqif4xgNoGkcRcpFqDPdLUCx_W0QWkdIcNCQhwA' alt="21" width="100%" height="100%" class="img-responsive center"/>
                        </Col>
                        <Col>
                            <h1 style={{paddingTop:"22px"}}>0/5</h1>
                        </Col>
                    </Row>
                    <Col>
                        <div className="center1">
                            <button>Centered Button</button>
                        </div>
                    </Col>
                </Container>
            </div>
        </div>
    );
};

class About extends React.Component {
    render() {
        return (
        <div>
            <Sree />
            <Footer />
        </div>
        );
    }
};

export default About;