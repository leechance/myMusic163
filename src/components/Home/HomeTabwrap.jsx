import React,{ Component } from 'react';
import {Tabs} from 'antd-mobile';

import HomeFind from '../HomeFind/HomeFind';

import store from '../../store/store';

const tabs=[
  {title:'发现',type:'find'},
  {title:'我的',type:'user'},
  {title:'电台',type:'dj'}
]

class Mod extends Component {
  state={

  }
  render() {
    
    return (
      <div className='home'>
        <Tabs tabs={tabs}
          initialPage={0}
          swipeable={false}
          useOnPan={false}
        >
        <HomeFind />
        </Tabs>
      </div>
    );
  }
}

export default Mod;