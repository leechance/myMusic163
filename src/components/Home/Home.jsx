import React,{ Component } from 'react';
import {Drawer} from 'antd-mobile'
import HomeSidebar from './HomeSidebar'
import HomeTabwrap from './HomeTabwrap'
import Header from '../Header'
class Mod extends Component {
  state = {
    open: false
  }
  
  render() {
    return (
      <div className='page home'>
        <Header title='我的云音乐' key='header'
          leftBtn={(<i className='iconfont icon-category' key='lb' onClick={this.onOpenChange}></i>)}
          rightBtn={(<i className='iconfont icon-icon-11' key='rb' onClick={this.goSearchPage}></i>)}
        />
        <Drawer
          className="my-drawer"
          style={{ maxHeight: document.documentElement.clientHeight-45,marginTop:45}}
          sidebar={<HomeSidebar />}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        >

          <HomeTabwrap />

        </Drawer>
      </div>
    );
  }
  onOpenChange=(...args)=>{
    this.setState({ open: !this.state.open });
  }
  goSearchPage=()=>{
    this.props.history.push('/search')
  }
}

export default Mod;