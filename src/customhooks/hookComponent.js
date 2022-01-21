import { ThemeContext, themes } from '../themeContext';
import React, { Fragment } from 'react';
import useClickOutside from './clickOutsideHook';
import useStore from './storeHook';

function CustomHooks() {
    const value = React.useContext(ThemeContext);
    return (
        <Fragment>
            <div className="contentSection" style={value}>
                The current theme is || {value === themes.dark ? 'dark' : 'light'}
            </div>
            <Menu />
            <Todos />
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

function Todos() {
    const [{ todos }, setStore] = useStore();
    const getMaxId = todos.reduce(function (prev, current) {
        return (prev.id > current.id) ? prev : current
    })
    const addTodos = () => {
        setStore(old => ({
            ...old,
            todos: [...old.todos, { task: 'Brand New Todos', id: getMaxId + 1 }]
        }))
    }
    return (
        <ul>
            {todos.map((item) => {
                return <li key={item.id}>{item.task}</li>
            })}
        </ul>
    )
}


export default CustomHooks;