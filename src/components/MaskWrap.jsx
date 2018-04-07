import React,{ Component } from 'react';
import store from '../store/store';
export default function (Content){
    return class Mod extends Component {
      render() {
        let {show} =this.props
        return (
          <div className='mask'
            onClick = {this.hideMask}
            ref={el=>this.wrap=el}
            style={{display:show?'block':'none'}}
          >
            <Content {...this.props} hideMask={this.hideMask}/>
          </div>
        );
      }
      
      hideMask=()=>{
          store.dispatch({
            type:"HIDE_MASK"
          })
      }
    }
}