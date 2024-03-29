import React from "react";


class Book extends React.Component {
    render() {
        /* console.log(this.props.book); */
        return (

            <div className="col-lg-4 col-sm-6  mb-sm-0" style={{ marginBottom: "3rem" }}>

                <div className="portfolio-item"  style={{ marginBottom: "3rem" }}>
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={this.props.book.imageURL} alt="..."  />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{this.props.book.title}</div>
                        <div className="portfolio-caption-subheading text-muted">{this.props.book.author}</div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Book;

