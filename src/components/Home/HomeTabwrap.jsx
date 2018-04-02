import React,{ Component } from 'react';
import {Tabs} from 'antd-mobile';
import store from '../../store/store';

const tabs=[
  {title:'发现'},
  {title:'我的'},
  {title:'电台'}
]

class Mod extends Component {
  state={

  }
  render() {
    
    return (
      <div className='home'>
        <Tabs tabs={tabs}
          initialPage={0}
          onChange={tab => { console.log('aaa') }}
          useOnPan={false}
        >

        </Tabs>
      </div>
    );
  }
  addItem=()=>{
    let val=this.refs.item.value;
    store.dispatch({
      type:"ADD_ITEM",
      data:val
    })
  }
  delItem=(index)=>{
    store.dispatch({
      type:"DEL_ITEM",
      data:index
    })
  }
}

export default Mod;