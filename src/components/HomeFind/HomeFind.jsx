import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

import api from '../../api/api';
class Mod extends Component {
  state = {
    banner: [{}, {}],
    imgHeight: 176,
  }
  componentDidMount() {
    api.banner({
      success: json => {
        this.setState({ banner: json.banners })
      }
    })
  }
  render() {
    return (
      <div className='home-find'>
        <Carousel
          autoplay={true}
          infinite
          selectedIndex={0}
          dotActiveStyle={{ backgroundColor: '#108ee9' }}
        >
          {this.state.banner.map(item => (
            <a key={item.encodeId + 'a'}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={item.pic}
                alt={item.typeTitle}
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Mod;