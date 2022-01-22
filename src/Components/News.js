import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

function News(props) {

    const [article, setArticle] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1)
    const [totalsize, settotalsize] = useState(0);

    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}
        &pageSize=${props.pagesize}&apiKey=31560fffa76d4075a700eb64b9b0437e`;
        setloading(true);
        props.setprogress(10);
        let data = await fetch(url);
        props.setprogress(30);
        let parsedData = await data.json();
        props.setprogress(70);
        setArticle(parsedData.articles);
        settotalsize(parsedData.totalResults);
        props.setprogress(100);
        setloading(false);

    }


    useEffect(() => {
        updateNews();
    }, [])


    const handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page - 1}
        &pageSize=${props.pagesize}&apiKey=31560fffa76d4075a700eb64b9b0437e`;
        setloading(true);
        props.setprogress(10);
        let data = await fetch(url);
        props.setprogress(30);
        let parsedData = await data.json();
        props.setprogress(70);
        setArticle(parsedData.articles);
        settotalsize(parsedData.totalResults);
        setpage(page - 1);
        props.setprogress(100);
        setloading(false);
    }
    const handleNexClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page + 1}
        &pageSize=${props.pagesize}&apiKey=31560fffa76d4075a700eb64b9b0437e`;

        setloading(true);
        props.setprogress(10);
        let data = await fetch(url);
        props.setprogress(30);
        let parsedData = await data.json();
        props.setprogress(70);
        setArticle(parsedData.articles);
        settotalsize(parsedData.totalResults);
        setpage(page + 1);
        props.setprogress(100);
        setloading(false);

    }

    function capitalizeFirstLetter(element)
    {
        return element.charAt(0).toUpperCase()+element.slice(1);
    }

    return (
        <>
            <div className="container my-4 ">
                <h2 className=" text-center mb-3">NewsBite-Top {capitalizeFirstLetter(props.category)} Headlines</h2>

                {loading && <Spinner />}
                <div className="row">{!loading && article.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title || undefined } description={element.description || undefined} 
                        publish={element.publishedAt || undefined} imageurl={element.urlToImage || undefined } newsurl={element.url || undefined} />
                    </div>
                })

                }
                    <div className="d-flex justify-content-between">
                        <button disabled={(page <= 1)} type="button" onClick={handlePrevClick} className="btn btn-dark">&larr; Previous</button>
                        <button disabled={page >= Math.ceil(totalsize / props.pagesize)} type="button" onClick={handleNexClick} className=" pull right btn btn-dark">Next &rarr;</button>
                    </div>

                </div>
            </div>

        </>
    )
}

NewsItem.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    page: PropTypes.number,
    pagesize: PropTypes.number,
    
  }
 
export default News
