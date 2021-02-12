import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Footer from './Footer';

class Contact extends React.Component {
    render() {
        return (
        <div>
            <form>
                <div>
                    <label for="form4Example1">Name</label>
                    <input type="text" id="form4Example1" class="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="form4Example2">Email address</label>
                    <input type="email" id="form4Example2" class="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="form4Example3">Message</label>
                    <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
            </form>
            <Footer />
        </div>
        );
    }
};
export default Contact;