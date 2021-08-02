import React from 'react';

function Services() {
    return (
        <section>
            <div className="services-wrapper">
                <h2 className="services-header">Services</h2>
                <p>Service prices vary from pet to pet. Our prices are determined by coat condition, age, behavior, length, and how often your pet comes in. 
                    There may be addtional services that may increase your price, such as (but not limited to),
                    matting and needing extra support.
                </p>
                <div className="services-container">
                    <div className="service">
                        <h3>Bath, Brush, & Haircut</h3>
                        <h4>From $<span className="cost">50</span></h4>
                        <ul>
                            <li>Bath</li>
                            <li>Blow dry</li>
                            <li>Brush</li>
                            <li>Anal gland check</li>
                            <li>Ears cleaned</li>
                            <li>Nail trim</li>
                            <li>Haircut</li>
                        </ul>
                    </div>
                    <div className="service">
                    <h3>Bath & Tidy</h3>
                        <h4>From $<span className="cost">30</span></h4>
                        <ul>
                            <li>Bath</li>
                            <li>Blow dry</li>
                            <li>Brush</li>
                            <li>Anal gland check</li>
                            <li>Ears cleaned</li>
                            <li>Nail trim</li>
                            <li>Face, feet, & sanitary trim</li>
                        </ul>
                    </div>
                    <div className="service">
                    <h3>Bath & Brush</h3>
                    <h4>From $<span className="cost">20</span></h4>
                        <ul>
                            <li>Bath</li>
                            <li>Blow dry</li>
                            <li>Brush</li>
                            <li>Anal gland check</li>
                            <li>Ears cleaned</li>
                            <li>Nail trim</li>
                        </ul>
                    </div>
                    <div className="service">
                    <h3>Additional Services</h3>
                        <ul>
                            <li>Nail grinding - <b>$<span className="cost">5</span></b></li>
                            <li>Teeth brushing w/ breath spray - <b>$<span className="cost">5</span></b></li>
                            <li>Medicated shampoo - <b>$<span className="cost">5</span></b></li>
                            <li>Whitening shampoo - <b>$<span className="cost">5</span></b></li>
                            <li>Deep coat conditioner - <b>$<span className="cost">10</span></b></li>
                            <li>Nail polish - <b>$<span className="cost">10</span></b></li>
                            <li>De-skunk - <b>$<span className="cost">10</span></b> per wash<br/>*up to 3 washes</li>
                            <li>De-mat - <b>$<span className="cost">10</span></b> per 15 minutes</li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;