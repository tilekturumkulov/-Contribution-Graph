import Item1 from './images/item1.png'
import Item2 from './images/item2.png'
import Item3 from './images/item3.png'

const Latest = () => {
    return (
        <div className="latest">
            <div className="container">
                <div className="latest__content">
                    <span className="latest__content-subtitle">Blog</span>
                    <h2 className="latest__content-title">Latest posts</h2>
                    <div className="latest__content-description">
                        <p className="latest__content-description_text">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.<br></br>Praesent efficitur nibh massa morbi sagittis ornare dui in ornare.</p>
                        <button className="latest__content-description_btn">View all</button>
                    </div>
                    <div className="latest__content-row">
                        <div className="latest__content-row_item">
                            <img src={Item1} alt="" className="latest__content-row_img" />
                            <div className="latest__content-row_description">
                                <div className="latest__content-row_category">
                                    <span className="latest__content-row_condition">Trends</span>
                                    <span className="latest__content-row_date">May 10, 2022</span>
                                </div>
                                <h3 className="latest__content-row_title">The 9 best homes in New York</h3>
                                <p className="latest__content-row_text">Integer tincidunt rutrum faucibus. Proin sit<br></br>amet varius arcu. Aliquam vel leo augue<br></br>donec.</p>
                                <button className="latest__content-row_more">Read more
                                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="latest__content-row_item">
                            <img src={Item2} alt="" className="latest__content-row_img" />
                            <div className="latest__content-row_description">
                                <div className="latest__content-row_category">
                                    <span className="latest__content-row_condition">DIY</span>
                                    <span className="latest__content-row_date">May 10, 2022</span>
                                </div>
                                <h3 className="latest__content-row_title">How to easily buy a house with Realco</h3>
                                <p className="latest__content-row_text">Praesent nec felis nisl. Phasellus eget lacus a<br></br>metus fringilla fermentum sit amet.</p>
                                <button className="latest__content-row_more">Read more
                                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="latest__content-row_item">
                            <img src={Item3} alt="" className="latest__content-row_img" />
                            <div className="latest__content-row_description">
                                <div className="latest__content-row_category">
                                    <span className="latest__content-row_condition">DIY</span>
                                    <span className="latest__content-row_date">May 10, 2022</span>
                                </div>
                                <h3 className="latest__content-row_title">Renting houses - complete guide</h3>
                                <p className="latest__content-row_text">Nunc in bibendum leo, gravida scelerisque<br></br>quam nulla interdum tellus a turpis.</p>
                                <button className="latest__content-row_more">Read more
                                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Latest