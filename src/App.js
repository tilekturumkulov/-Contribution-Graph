import './style/style.scss'
import Header from './commponents/Header/Header'
import Inform from './commponents/Inform/Inform'
import Magazines from './commponents/Magazines/Magazines'
import Process from './commponents/Process/Process'
import Comfort from './commponents/Comfort/Comfort'
import Fast from './commponents/Fast/Fast'
import Properties from './commponents/Properties/Properties'
import Locations from './commponents/Locations/Locations'
import Priority from './commponents/Priority/Priority'
import Customers from './commponents/Customers/Customers'
import Latest from './commponents/Latest/Latest'
import Footer from './commponents/Footer/Footer'

function App() {
    return ( 
    <div className = 'App' >
        <Header/>
        <section className="main">
            <Inform/>
            <Magazines/>
            <Process/>
            <Comfort/>
            <Fast/>
            <Properties/>
            <Locations/>
            <Priority/>
            <Customers/>
            <Latest/>
            <Footer/>
        </section>
    </div>
    );
}

export default App;