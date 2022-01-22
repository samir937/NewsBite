import React from 'react'
import PropTypes from 'prop-types'

function NewsItem(props) {
    let { title, description, imageurl, newsurl, publish } = props;
    return (

        <div>
            <div className="card md-3 my-3" >
                <img src={imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
                    <p className="card-text my-2" >Uploaded: {new Date(publish).toGMTString()} </p>
                </div>
            </div>
        </div>
    )
}

  NewsItem.defaultProps = {
    title: 'No Title Available',
    imageurl:'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg',
    description:'No Description Available',
    publish:'No Data Available'
  };

  NewsItem.propTypes = {
    title: PropTypes.string,
    imageurl: PropTypes.string,
    description: PropTypes.string,
    publish: PropTypes.string
  }
 
export default NewsItem
