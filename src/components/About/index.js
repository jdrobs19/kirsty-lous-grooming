import React from "react";
import Gallery from "../partials/Gallery";
import {FcPhone, FcGoogle} from 'react-icons/fc'

function About() {
    return (
        <div>
            <section>
                <h2 id="about">Dog Groomer Promise</h2>
                <div>
                    <p>
                        I will love your dog. I will care for your dog. I will be patient and kind. I will do what is best for your pet. NO MATTER WHAT!
                        I will stand by the fact of comfort must come before vanity.
                    </p>
                </div>
            </section>
            <section>
                <Gallery />
            </section>
            <section>
                <h2 id="contact">Contact us with any questions</h2>
                <p>Hours of operation:</p>
                <p>Monday - Friday 9 AM - 5 PM, by appointment only</p>
                <address>
                <FcPhone/> <a href='tel:+18018540370'>801-854-0370</a><br></br>
                <FcGoogle/><a href='mailto: doggiedoosut@gmail.com'>doggiedoosut@gmail.com</a>
                </address>
                <div className='iframe'>
                    <div className="map"><iframe title="Provo map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.9949621331507!2d-111.67569058446558!3d40.25364327346557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9bddd78eb3ef%3A0xb356989cb1afc8e0!2sKirsty%20Lou&#39;s%20Doggie%20Doo&#39;s!5e0!3m2!1sen!2sus!4v1619460489181!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe></div>
                    <div className="map"><iframe title="Pleasant Grove map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12159.65706829647!2d-111.7549355!3d40.3664253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa18b79f180da2729!2zRG9nZ2llIERvb-KAmXM!5e0!3m2!1sen!2sus!4v1658331602372!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe></div>
                </div>
            </section>
        </div>
    )
}


export default About;