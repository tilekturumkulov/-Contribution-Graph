import Logo1 from './images/loremitem1.png'
import Logo2 from './images/loremitem2.png'
import Logo3 from './images/loremitem3.png'
import Logo4 from './images/loremitem4.png'
import Logo5 from './images/loremitem5.png'


const Inform = () => {
    return (
        <div className="magazine">
            <div className="container">
                <div className="magazine__content">
                    <p className="magazine__text">As seen on the world's best<br></br>magazines and media</p>
                    <div className="magazine__right">
                        <img src={Logo1} alt='loremItem1' className="magazine__right-item"/>
                        <img src={Logo2} alt='loremItem1' className="magazine__right-item"/>
                        <img src={Logo3} alt='loremItem1' className="magazine__right-item"/>
                        <img src={Logo4} alt='loremItem1' className="magazine__right-item"/>
                        <img src={Logo5} alt='loremItem1' className="magazine__right-item"/>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Inform