import React,{ Component } from 'react';
import Header from './Header'
class Mod extends Component {
  render() {
    return (
      <div className='page'>
        <Header title='个人中心' key='header' leftBtn={<i className="iconfont icon-back"></i>}/>
      </div>
    );
  }
  back(){
    this.props.history.go(-1)
  }
}

export default Mod;