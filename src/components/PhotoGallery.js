import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export default class PhotoGallery extends Component {
    constructor(props) {
        super(props)
        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.state = {
             currentImage: 0,
             viewerIsOpen: false
        }
    }
    
    openLightbox = ({ photo, index }) => {
        this.setState({currentImage: index});
        this.setState({viewerIsOpen: true});
    };
    
    closeLightbox = () => {
        this.setState({currentImage: 0});
        this.setState({viewerIsOpen: false});
    };

    render() {
        return (
            <div>
                <Gallery photos={this.props.photos} onClick={this.openLightbox} />
                <ModalGateway>
                    {this.state.viewerIsOpen ? (
                        <Modal onClose={this.closeLightbox}>
                        <Carousel
                            currentIndex={this.state.currentImage}
                            views={this.props.photos.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                            }))}
                        />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        )
    }
}