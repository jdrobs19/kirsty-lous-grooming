import React from 'react';

function Services() {
    return (
        <section>
            <div className="services-container">
                <h2>Services</h2>
                <div>
                    <div className="service">
                        <h3>Full Groom</h3>
                        <h4>From $</h4><p className="cost">50</p>
                        <ul>
                            <li>Nail Trimming</li>
                            <li>Pads & paw trim</li>
                            <li>Blow dry</li>
                            <li>Finishing cologne</li>
                        </ul>
                    </div>
                    <div className="service">
                    <h3>Bath & Brush</h3>
                        <h4>From $</h4><p className="cost">30</p>
                        <ul>
                            <li>Bath</li>
                            <li>Brush</li>
                            <li>Blow dry</li>
                            <li>Nail trim</li>
                        </ul>
                    </div>
                    <div className="service">
                    <h3>Mini Groom</h3>
                        <h4>From $</h4><p className="cost">40</p>
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