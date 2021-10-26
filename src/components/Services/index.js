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
                <div className='services-container'>
                    <div className='service'>
                        <h3>Bath & Brush</h3>
                        <ul>
                            <li>Bath</li>
                            <li>Blow dry</li>
                            <li>Brush</li>
                            <li>Anal gland check</li>
                            <li>Ears cleaned</li>
                            <li>Nail trim</li>
                        </ul>
                    </div>
                    <div className='service'>
                        <h3>Bath, Brush, & Tidy</h3>
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
                    <div className='service'>
                        <h3>Bath, Brush, & Cut</h3>
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
                </div>
                <div className='table-container'>
                    <table className="service-table" style={{ width: '100%' }}>
                        <tr>
                            <td></td>
                            <td>Service</td>
                        </tr>
                        <tr>
                            <td >Dog Size</td>
                            <td></td>
                            <td><b>Small (up to 20 lbs)</b></td>
                            <td><b>Medium (up to 40 lbs)</b></td>
                            <td><b>Large (up to 60 lbs)</b></td>
                            <td><b>X-Large (up to 80 lbs)</b></td>
                            <td><b>2X-Large (up to 100)</b></td>
                            <td><b>3X-Large (up to 120 lbs)</b></td>
                            <td><b>4X-Large</b></td>
                            <td><b>Cats</b></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><b>Bath and Brush</b></td>
                            <td>Starting at $20</td>
                            <td>Starting at $30</td>
                            <td>Starting at $40</td>
                            <td>Starting at $50</td>
                            <td>Starting at $60</td>
                            <td>Starting at $70</td>
                            <td>Starting at $80</td>
                            <td>Starting at $45</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><b>Bath, Brush, &amp; Tidy</b></td>
                            <td>Starting at $30</td>
                            <td>Starting at $40</td>
                            <td>Starting at $50</td>
                            <td>Starting at $60</td>
                            <td>Starting at $70</td>
                            <td>Starting at $80</td>
                            <td>Starting at $90</td>
                            <td>Starting at $50</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><b>Bath, Brush, &amp; Cut</b></td>
                            <td>Starting at $50</td>
                            <td>Starting at $55</td>
                            <td>Starting at $60</td>
                            <td>Starting at $75</td>
                            <td>Starting at $95</td>
                            <td>Starting at $110</td>
                            <td>Starting at $115</td>
                            <td>Starting at $65</td>
                        </tr>
                    </table>
                </div>
                <div className="additional-services">
                    <h3>Additional Services</h3>
                    <ul>
                        <li>Low-shed/De-shed - Starting at <b>$<span className="cost">10</span></b><br />Includes deep coat and exfoliating shampoo and conditioner with extra soaking time and added 15 minutes of brush out time</li>
                        <li>Hot oil and mudbath Treatment - Starting at <b>$<span className="cost">20</span></b><br />This services improves your pets skin and coat.Ideal for pets that have allergies, itching, shedding, & dry skin.</li>
                        <li>Nail grinding - <b>$<span className="cost">5</span></b></li>
                        <li>Teeth brushing w/ breath spray - <b>$<span className="cost">5</span></b></li>
                        <li>Medicated shampoo - <b>$<span className="cost">5</span></b></li>
                        <li>Whitening shampoo - <b>$<span className="cost">5</span></b></li>
                        <li>Deep coat conditioner - <b>$<span className="cost">10</span></b></li>
                        <li>Nail polish - <b>$<span className="cost">10</span></b></li>
                        <li>De-skunk - <b>$<span className="cost">10</span></b> per wash<br />*up to 3 washes</li>
                        <li>De-mat - <b>$<span className="cost">10</span></b> per 15 minutes</li>
                        <li>Full upgrade - <b>$<span className='cost'>20</span></b><br />Upgraded shampoo and deep coat conditioner, nails dremeled, teeth brushed, breath spray, and your choice of bow or bandana</li>
                    </ul>
                </div>

                {/* <div className="small-service">
                    <h3>Small Breed (5 - 15 lbs)</h3>
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
                    </div>
                </div>
                <div className="small-service">
                    <h3>Medium Breed</h3>
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
                    </div>
                </div>
                <div className="small-service">
                    <h3>Large Breed</h3>
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
                    </div>
                </div>
                <div className="small-service">
                    <h3>X-Large Breed</h3>
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
                    </div>
                </div>
                <div>
                    <div className="service">
                        <h3>Additional Services</h3>
                        <ul>
                            <li>Nail grinding - <b>$<span className="cost">5</span></b></li>
                            <li>Teeth brushing w/ breath spray - <b>$<span className="cost">5</span></b></li>
                            <li>Medicated shampoo - <b>$<span className="cost">5</span></b></li>
                            <li>Whitening shampoo - <b>$<span className="cost">5</span></b></li>
                            <li>Deep coat conditioner - <b>$<span className="cost">10</span></b></li>
                            <li>Nail polish - <b>$<span className="cost">10</span></b></li>
                            <li>De-skunk - <b>$<span className="cost">10</span></b> per wash<br />*up to 3 washes</li>
                            <li>De-mat - <b>$<span className="cost">10</span></b> per 15 minutes</li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </section >
    )
}

export default Services;