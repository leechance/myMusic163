import React, { Component } from 'react';
import { PullToRefresh } from 'antd-mobile';

function Wrap(Content) {
  return class Mod extends Component {
    state = {
      height: document.documentElement.clientHeight - 43.5 - 45 - 44 - 56,
    };
    render() {
      let { refreshing, addData } = this.props
      return (
        <PullToRefresh
          onScroll={this.setScroll}
          ref={el => this.ptr = el}
          style={{ height: this.state.height, overflow: 'auto' }}
          direction='up'
          refreshing={refreshing}
          onRefresh={addData}
        >
          <Content />
        </PullToRefresh>
      );
    }
  }
}



export default Wrap;