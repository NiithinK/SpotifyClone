import './Navbar.css'
import logo from '../../assets/logo.png'
import  SearchBox  from '../SearchBox/SearchBox'
import FeedButton from '../Button/FeedButton'


export default function Navbar(){
    return(
        <div className="navbar">
            <img className='logo-img' src={logo} alt="logo" />
            <SearchBox/>
           <FeedButton/>
        </div>
    )
}