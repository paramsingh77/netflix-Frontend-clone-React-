import React,{useState} from 'react'
import './Header.scss'
import logo from '../Images/Logonetflix.png'
import { Link } from 'react-router-dom';
import { ImSearch } from "react-icons/im";
import {RxHamburgerMenu } from 'react-icons/rx'
const Header = () => {

    const [isActive, setIsActive] = useState(false);

		const toggleMenu = () => {
			setIsActive(!isActive);
        };
    
    console.log(logo);
    return (
			<nav className="header">
				<img src={logo} alt="logo" />

				<div className={`nav-links ${isActive ? "active" : ""}`}>
					<Link className="lin" to="/tvshows">
						TV Shows
					</Link>
					<Link className="lin" to="/movies">
						Movies
					</Link>
					<Link className="lin" to="/recent">
						Recently Added
					</Link>
					<Link className="lin" to="/list">
						My List{" "}
					</Link>
				</div>

				<ImSearch className="srch" />
				<RxHamburgerMenu
					className={`ham nav-toggle ${isActive ? "active" : ""}`}
					id="toggle"
					onClick={toggleMenu}
				/>
			</nav>
		);
}

export default Header
