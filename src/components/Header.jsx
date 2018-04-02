import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
class Mod extends Component {
    render() {
        const props = this.props;
        return (
            <NavBar
                mode="dark"
                leftContent={[props.leftBtn]}
                rightContent={[props.rightBtn]}
                style={{flex:'none'}}
            >{props.title}</NavBar>
        );
    }
}

export default Mod;