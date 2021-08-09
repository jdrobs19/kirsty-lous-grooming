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
            </section>
        </div>
    )
}

export default About;