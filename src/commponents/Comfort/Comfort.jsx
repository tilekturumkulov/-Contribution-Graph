const Comfort = () => {
    return (
        <div className="comfort">
            <div className="container">
                <div className="comfort__content">
                    <div className="comfort__content-left">
                        <span className="comfort__content-subtitle">Comfort first</span>
                        <h2 className="comfort__content-title">The best houses for family comfort</h2>
                        <p className="comfort__content-text">Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin sollicitudin, lorem non posuere blandit.</p>
                        <div className="comfort__content-btns">
                            <button className="comfort__content-properties">Explore properties</button>
                            <button className="comfort__content-contact">Contact agent 
                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="comfort__content-right"></div>
                </div>
            </div>
        </div>
    )
}

export default Comfort