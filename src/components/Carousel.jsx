import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";

const Carousel = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Banner1} className="d-block w-100 carousel-image" alt="Banner #1" style={{ width: '450px', height: '450px', objectFit: 'cover' }} />
                            </div>
                            <div className="carousel-item">
                                <img src={Banner2} className="d-block w-100 carousel-image" alt="Banner #2" style={{ width: '450px', height: '450px', objectFit: 'cover' }} />
                            </div>
                            <div className="carousel-item">
                                <img src={Banner3} className="d-block w-100 carousel-image" alt="Banner #3" style={{ width: '450px', height: '450px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Carousel;
