import React from 'react'
import SideBar from './SideBar.js'
import AppBar from 'material-ui/AppBar'

class Navigation extends React.Component {
    state = {
        isOpen: false
    }

    toogleHandler = () => {
        this.setState (
            {  
                isOpen: !this.state.isOpen

            }
        )
    }

    render() {
        return (

            <div>
                <AppBar
                    title = {"OSH app"}
                    onLeftIconButtonClick = {this.toogleHandler}
                />
                <SideBar 
                    isSideBarOpen={this.state.isOpen}
                    toogleSideBar={this.toogleHandler}/>
            </div>
        )
    }
}
export default Navigation