import React from "react";
import Gallery from "../partials/Gallery";

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
                <p>Hours of operation:</p>
                <p>Monday - Friday 9 AM - 5 PM, by appointment only</p>
                <div className='iframe'>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.9949621331507!2d-111.67569058446558!3d40.25364327346557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9bddd78eb3ef%3A0xb356989cb1afc8e0!2sKirsty%20Lou&#39;s%20Doggie%20Doo&#39;s!5e0!3m2!1sen!2sus!4v1619460489181!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </section>
        </div>
    )
}


export default About;