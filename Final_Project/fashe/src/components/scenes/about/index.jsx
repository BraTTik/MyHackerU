import React from 'react';
import PageHeading from '../../page_heading';
import heading_image from '../../../assets/images/1920х239-1.jpg';


const About = (props) => {
    return(
        <React.Fragment>
            <PageHeading src={heading_image} heading='About'/>
            <section className="bgwhite p-t-66 p-b-38">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 p-b-30">
                            <div className="hov-img-zoom">
                                <img src="images/banner-14.jpg" alt="IMG-ABOUT"/>
                            </div>
                        </div>

                        <div className="col-md-8 p-b-30">
                            <h3 className="m-text26 p-t-15 p-b-16">
                                Our story
                            </h3>

                            <p className="p-b-28">
                                Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                            </p>

                            <div className="bo13 p-l-29 m-l-9 p-b-10">
                                <p className="p-b-11">
                                    Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                                </p>

                                <span className="s-text7">
                                    - Steve Job’s
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About;
