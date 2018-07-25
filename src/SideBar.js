import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'

const SideBar = (props) => (

        <Drawer open={true} >
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


export default SideBar