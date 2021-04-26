import React from 'react';

function Services() {
    return (
        <section>
            <div className="services-wrapper">
                <h2 className="services-header">Services</h2>
                <div className="services-container">
                    <div className="service">
                        <h3>Full Groom</h3>
                        <h4>From $ <span className="cost">30</span></h4>
                        <ul>
                            <li>Nail Trimming</li>
                            <li>Pads & paw trim</li>
                            <li>Blow dry</li>
                            <li>Finishing cologne</li>
                        </ul>
                    </div>
                    <div className="service">
                    <h3>Bath & Brush</h3>
                        <h4>From $ <span className="cost">30</span></h4>
                        <ul>
                            <li>Bath</li>
                            <li>Brush</li>
                            <li>Blow dry</li>
                            <li>Nail trim</li>
                        </ul>
                    </div>
                    <div className="service">
                    <h3>Mini Groom</h3>
                    <h4>From $ <span className="cost">30</span></h4>
                        <ul>
                            <li>Nail Trimming</li>
                            <li>Pads & paw trim</li>
                            <li>Blow dry</li>
                            <li>Finishing cologne</li>
                        </ul>
                    </div>
                    <div className="service">
                    <h3>Hand Stripping</h3>
                        <h4>Cost varies by breed</h4>
                        <ul>
                            <li>Nail Trimming</li>
                            <li>Pads & paw trim</li>
                            <li>Blow dry</li>
                            <li>Finishing cologne</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;