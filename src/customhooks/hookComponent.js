import { ThemeContext, themes } from '../themeContext';
import React, { Fragment } from 'react';
import useClickOutside from './clickOutsideHook';

function CustomHooks() {
    const value = React.useContext(ThemeContext);
    return (
        <Fragment>
            <div className="contentSection" style={value}>
                The current theme is || {value === themes.dark ? 'dark' : 'light'}
            </div>
            <Menu />
        </Fragment>

    )
}

function Menu() {
    const menuRef = React.useRef();
    const onClickOutside = () => {
        alert('Clicked outside or Inside')
    }

    useClickOutside(menuRef, onClickOutside);

    return (
        <div ref={menuRef}>
            ..Click outside or insid hooks
        </div>
    )
}

export default CustomHooks;