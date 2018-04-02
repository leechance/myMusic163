import React,{ Component } from 'react';
import store from '../../store/store'

class Mod extends Component {
  state={

  }
  render() {
    
    return (
      <div className=''>
        <input type="text" ref='item'/><button onClick={this.addItem}>add</button>
        <ul>
          {store.getState().todoReducer.map((item,index)=>(
            <li key={item+index}>
              {item}---{index}
              <button onClick={this.delItem.bind(this,index)}>删除</button>
            </li>
            ))}
        </ul>
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