import React from 'react'
import '../pages_css/Contact.css'
const Contact = () => {
    return (
                <section className="contact section" id="contact" data-aos="zoom-in">
                    <div className="container">
                        <div className="row">
                            <div className="contact-form">
                                <div className="row">
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-item col-12 padd-15">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-item col-12 padd-15">
                                        <div className="form-group">
                                            <textarea name="" className="form-control" id="" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-item col-12 padd-15">
                                        <button type="submit" className="btn bg-btncol">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    
    )
}

export default Contact
