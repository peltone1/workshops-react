import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'

class SideBar extends React.Component {
    state = {
        isOpen: true
    }

    toogleHandler = () => {
        this.setState (
            {  
                isOpen: !this.state.isOpen

            }
        )
    }

    render () {
    return (

        <Drawer open={this.state.isOpen} >
        <MenuItem
        onClick= {this.toogleHandler}
        >Close</MenuItem>
            <Link
                to={'/dashboard'}
                style={{ textDecoration: 'none' }}>
                <MenuItem> Dashboard</MenuItem></Link>
            <Link
                to={'/basic-components'}
                style={{ textDecoration: 'none' }}>
                <MenuItem> Basic components</MenuItem> </Link>
            <Link
                to={'/passing-parameters/cosik'}
                style={{ textDecoration: 'none' }}>
                <MenuItem> Parameters dup</MenuItem> </Link>
        </Drawer>

        )
    }
}

export default SideBar