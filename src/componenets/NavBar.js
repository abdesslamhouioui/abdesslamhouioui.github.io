import React from 'react'
import { NavRapper, Logo, MenuIcon } from '../styles/Styles'

const NavBar = () => {
    return (
        <NavRapper>
            <Logo />
            <MenuIcon>
                <hr />
                <hr />
            </MenuIcon>
        </NavRapper>
    )
}

export default NavBar