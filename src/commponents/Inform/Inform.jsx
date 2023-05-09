import Vector1 from './images/1.png'
import Vector2 from './images/2.png'


const Inform = () => {
    return (
        <section className="inform">
            <div className="container">
                <div className="inform__content">
                    <div className="inform__left">
                        <img src={Vector1} alt="" className="inform__left-vector_top" />
                        <img src={Vector2} alt="" className="inform__left-vector_bottom" />
                        <span className="inform__left-subtitle">Find your dream place</span>
                        <h2 className="inform__left-title">Find house for your<br></br>family in minutes</h2>
                        <p className="inform__left-text">Aenean sodales mauris quis tellus facilisis, vel mattis<br></br>magna. Interdum curabitur eget aliquam elit in mauris purus.</p>
                        <form className="inform__left-form">
                            <input type="text" name="" id="" className="inform__left-search" placeholder='Search'/>
                            <button className="inform__left-btn">Find property</button>
                        </form>
                    </div>
                    <div className="inform__right"></div>
                </div>
            </div>
        </section>
    )
}

export default Inform