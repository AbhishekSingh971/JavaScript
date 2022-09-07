import React from 'react'

export default function NewsItem(props) {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div>
        <div className="card my-3 bg-dark text-light border">
        <span className='position-absolute top-0 translate-middele badge rounded-pill bg-danger' style={{left: '0%' , zIndex: '1'}}>{source}</span>
            <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqICensWiWUSbyUFkXY0e1HL3H0ITIN1uuXetIyeyGJ9N21WfH5Pps1TxF7YLMFYaaq6E&usqp=CAU":imageUrl} className="card-img-top" alt='img.jpg' />
            <div className="card-body">
                <h5 className="card-title text-warning">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p>
                <hr/>
                <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-success">Read More</a>
            </div>
        </div>
      </div>
    )
  }