import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import dog1 from '../../assets/img/dog-1.jpg';
import dog2 from '../../assets/img/dog-2.jpg';
import dog3 from '../../assets/img/dog-3.jpg';
import dog4 from '../../assets/img/dog-4.jpg';
import dog5 from '../../assets/img/dog-5.jpg';
import dog6 from '../../assets/img/dog-6.jpg';
import dog7 from '../../assets/img/dog-7.jpg';
import dog8 from '../../assets/img/dog-8.jpg';

const images = [
    dog1,
    dog2,
    dog3,
    dog4,
    dog5,
    dog6,
    dog7,
    dog8
];

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div>
                <div>
                    {images.map(image => (
                        <img src={image} alt={'groomed dog'} onClick={() => this.setState({ 
                            photoIndex: images.indexOf(image), 
                            isOpen: true })} />
                    ))}
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    };
}

export default Gallery