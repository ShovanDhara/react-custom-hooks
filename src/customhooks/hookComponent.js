import { ThemeContext, themes } from '../themeContext';
import React, { Fragment } from 'react';
import useClickOutside from './clickOutsideHook';
import { CountDisplay, Counter } from './count'
import { CountProvider } from './count-context'

function CustomHooks() {
    const value = React.useContext(ThemeContext);
    return (
        <Fragment>
            <div className="contentSection" style={value}>
                The current theme is || {value === themes.dark ? 'dark' : 'light'}
            </div>
            <Menu />

            <h5>State component</h5>
            <CountProvider>
                <CountDisplay />
                <Counter />
            </CountProvider>
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
            ..Click outside or inside hooks
        </div>
    )
}




export default CustomHooks;