import Icon1 from './images/icon1.png'
import Icon2 from './images/icon2.png'

const Fast = () => {
    return (
        <div className="fast">
            <div className="container">
                <div className="fast__content">
                    <div className="fast__content-left"></div>
                    <div className="fast__content-right">
                        <span className="fast__content-subtitle">Quick and easy</span>
                        <h2 className="fast__content-title">Fast forward process</h2>
                        <p className="fast__content-text">Ut vitae nisi eu nisi maximus condimentum ac id purus. Duis sit amet mi arcu praesent nec felis nisl.</p>
                        <div className="fast__content-process">
                            <div className="fast__content-process_item">
                                <img src={Icon1} alt="" className="fast__content-process_icon" />
                                <h3 className="fast__content-process_name">Affordable prices</h3>
                                <p className="fast__content-process_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            </div>
                            <div className="fast__content-process_item">
                                <img src={Icon2} alt="" className="fast__content-process_icon" />
                                <h3 className="fast__content-process_name">Less paper work</h3>
                                <p className="fast__content-process_paragraph">Curabitur porta luctus semper donec eget lobortis leo ac finibus nisi.</p>
                            </div>
                        </div>
                        <div className="fast__content-btns">
                            <button className="fast__content-properties">Explore properties</button>
                            <button className="fast__content-contact">Contact agent
                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fast