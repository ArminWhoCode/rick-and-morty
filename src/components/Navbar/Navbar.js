import React from 'react';
//icon
import { FaBars } from 'react-icons/fa';
//router things
import { Link } from 'react-router-dom'
//get nav items
import { links } from '../../data/constants';
//redux things
import { connect } from 'react-redux';
import { open } from '../../store/actions/ui';

const Navbar = ({openSidebar}) => {
    
    return (
        <nav>
            <div className="nav-center">
                <div className="nav__header">
                    <Link to='/'>
                        <h3>Armin</h3>
                    </Link>
                    <button className='nav__toggle' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav__links">
                    {links.map((link) => {
                        const { id, name, url } = link;
                        return (
                            <li key={id}>
                                <Link to={url}>{name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
//pass state and dispath to props
const mapDispatchToProps = (dispatch) => {
    return {
        openSidebar: () => dispatch(open())
    }
}

export default connect(null,mapDispatchToProps) (Navbar)
