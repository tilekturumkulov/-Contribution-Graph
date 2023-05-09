import Icon1 from './images/icon1.png'
import Icon2 from './images/icon2.png'
import Icon3 from './images/icon3.png'

const Process = () => {
    return (
        <div className="process">
            <div className="container">
                <div className="process__content">
                    <h2 className="process__content-title">How it works</h2>
                    <p className="process__content-subtitle">Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id efficitur pellentesque. Maecenas varius felis felis.</p>
                    <div className="process__content-items">
                        <div className="process__content-item">
                            <img src={Icon1} alt="" className="process__content-icon" />
                            <h3 className="process__content-step">Find property</h3>
                            <p className="process__content-text">Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.</p>
                        </div>
                        <div className="process__content-item">
                            <img src={Icon2} alt="" className="process__content-icon" />
                            <h3 className="process__content-step">Make a deal</h3>
                            <p className="process__content-text">Pellentesque suscipit mauris. Nam dictum, erat a volutpat varius, urna nisi sollicitudin orci, sagittis facilisis odio tortor ac mi.</p>
                        </div>
                        <div className="process__content-item">
                            <img src={Icon3} alt="" className="process__content-icon" />
                            <h3 className="process__content-step">Get your keys</h3>
                            <p className="process__content-text">Nulla vel bibendum purus. Etiam tempus quam vel pulvinar rutrum. Duis semper, metus vitae fermentum consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process