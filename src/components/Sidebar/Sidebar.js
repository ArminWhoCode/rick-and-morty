import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { links } from '../../data/constants';
//redux connect
import { connect } from 'react-redux';
//redux actions
import { close } from '../../store/actions/ui';


const Sidebar = ({ sidebar, closeSidebar }) => {
    return (
        <aside className={sidebar ? 'sidebar sidebar--show' : 'sidebar'}>
            <div className="sidebar__header">
                <h2>Armin</h2>
                <button className='close-btn'>
                    <FaTimes onClick={closeSidebar} />
                </button>
            </div>
            <ul className="links">
                {links.map((link) => {
                    const { id, name, url } = link;
                    return (
                        <li key={id}>
                            <Link to={url} onClick={closeSidebar}>{name}</Link>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}
//pass state and dispath to props
const mapStateToProps = (state) => {
    return { sidebar: state.ui.sidebar };
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeSidebar: () => dispatch(close())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
