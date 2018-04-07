import React, { Component } from 'react';

import store from '../store/store';
const autoTypeList = [
  { name: '列表循环', type: 0, icon: 'icon-icon-10' },
  { name: '单曲循环', type: 1, icon: 'icon-icon-9' },
  { name: '随机播放', type: 2, icon: 'icon-icon-12' }
]
class Mod extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: store.getState().player,
      paused: false,
      showList: false,
    }
  }
  render() {
    let { url, playlist, autoPlay, index, autoType } = this.state.player;
    let item = { album: {}, artists: [{}] }
    if (index !== -1) {
      item = playlist[index]
    }
    return (
      <div className='footer' style={{ display: 'flex', ...styles.wrap }}>
        <audio src={url}
          loop={playlist.length <= 1 || autoType === 1 ? true : false}
          autoPlay={autoPlay}
          onEnded={this.autoNextSong}
          ref={el => this.audio = el}
        >您的浏览器不支持 audio 标签。</audio>
        <button className={'iconfont ' + autoTypeList[autoType].icon}
          style={styles.icon}
          onClick={this.setAutoType}
        ></button>
        <div style={styles.playing}>
          <span style={styles.songName}>{item.name}</span>
          <i style={styles.songFrom}>{item.artists.map((person, index) => index === 0 ? person.name : (' / ' + person.name))}</i>
        </div>
        <button className={this.state.paused ? 'iconfont icon-icon-4' : 'iconfont icon-icon-8'}
          style={styles.icon}
          onClick={this.switchPaused}
        ></button>
        <button className='iconfont icon-icon-5'
          style={styles.icon}
          onClick={this.nextSong}
        ></button>
        <button className='iconfont icon-icon-1'
          style={styles.icon}
          onClick={this.switchShowList}
        ></button>
      </div>
    );
  }
  nextSong = () => {
    store.dispatch({
      type: "NEXT_SONG"
    })
    this.audio.currentTime = 0
    this.setState({ paused: false }, () => this.audio.load())
  }
  switchShowList = () => {
    store.dispatch({
      type: 'SHOW_FOOTER_PLAYLIST',
    })
  }
  switchPaused = () => {
    if (this.audio.paused) {
      this.setState({ paused: false }, () => this.audio.play())
    } else {
      this.setState({ paused: true }, () => this.audio.pause())
    }
  }
  autoNextSong = () => {
    store.dispatch({
      type: "AUTO_NEXT_SONG"
    })
    this.audio.currentTime = 0
  }
  setAutoType = () => {
    let { autoType } = this.state.player
    autoType++
    if (autoType === autoTypeList.length) {
      autoType = 0
    }
    store.dispatch({
      type: "SET_AUTOTYPE",
      data: autoType
    })
  }
}

const styles = {
  playing: {
    flex: 1,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  wrap: {
    height: 40,
    padding: 8,
    flex: 'none',
    backgroundColor: '#EFEFF4'
  },
  icon: {
    fontSize: '40px',
    marginRight: '8px',
    width: 40,
    height: 40,
    lineHeight: '40px',
    color: '#108ee9',
    background: 'none',
    border: 0,
    flex: 'none'
  },
  songName: {
    paddingBottom: 8,
    display: 'block',
  },
  songFrom: {
    fontSize: '80%',
    color: '#99a',
  },
}

export default Mod;