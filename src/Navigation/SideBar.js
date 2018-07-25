import React from 'react'
import Drawer from 'material-ui/Drawer';


import SideBarItem from './SideBarItem.js'

class SideBar extends React.Component {
    render() {
        return (

            <Drawer
                open={this.props.isSideBarOpen}
                docked={false}
                onRequestChange={this.props.toogleSideBar}>
                <SideBarItem
                    to={'/dashboard'}
                    label={'Dashboard'}
                    toogleSideBar={this.props.toogleSideBar}
                />
                <SideBarItem
                    to={'/basic-components'}
                    label={'Basic Components'}
                    toogleSideBar={this.props.toogleSideBar}
                />
                <SideBarItem
                    to={'/todo'}
                    label={'To do'}
                    toogleSideBar={this.props.toogleSideBar}
                />
                 <SideBarItem
                    to={'/counter'}
                    label={'Counter'}
                    toogleSideBar={this.props.toogleSideBar}
                />
                
            </Drawer>

        )
    }
}

export default SideBar