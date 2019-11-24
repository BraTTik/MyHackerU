import React from 'react';
import icons from '../../social_icons/socialIcons';
import Select from './select';

const Topbar = (props) => {

    const renderIcons = (item, index) => {
        return (
            <a key={ index } href={ item.href } className={`topbar-social-item ${item.icon}`}></a>
        )
    }

    return(
        <div className="topbar">
            <div className="topbar-social">
                { icons.map(renderIcons) }
            </div>

            <span className="topbar-child1">
                Free shipping for standard order over $100
            </span>

            <div className="topbar-child2">
                <span className="topbar-email">
                    fashe@example.com
                </span>
                <Select />
            </div>
        </div>

    )
}

export default Topbar;