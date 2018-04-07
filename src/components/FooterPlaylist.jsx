import React, { Component } from 'react';
import Mask from './MaskWrap';
import store from '../store/store';
class Mod extends Component {
    render() {
        let { playlist, index } = store.getState().player;
        let { hideMask, show } = this.props;
        let Con = ({ i, item }) => {
            if (i === index) {
                return (
                    <p style={{ ...styles.song, color: "#108ee9" }} onClick={this.playTheSong.bind(this, item)}>
                        <span style={{ ...styles.songName, color: "#108ee9" }}><i className="iconfont icon-icon-6" style={{ fontSize: '100%' }}></i>{item.name}</span>
                        <i style={{ ...styles.songFrom, color: "#108ee9" }}> - {item.artists.map((person, index) => index === 0 ? person.name : (' / ' + person.name))}</i>
                    </p>
                )
            } else {
                return (
                    <p style={styles.song} onClick={this.playTheSong.bind(this, item)}>
                        <span style={styles.songName}>{item.name}</span>
                        <i style={styles.songFrom}> - {item.artists.map((person, index) => index === 0 ? person.name : (' / ' + person.name))}</i>
                    </p>
                )
            }
        }

        return (
            <div className='footer-playlist'
                style={styles.wrap}
                ref={el => this.wrap = el}
                onClick={this.onClick}
            >
                <strong className='iconfont icon-guanbi' style={styles.close} onClick={hideMask}></strong>
                <p style={styles.title}>播放列表</p>
                <ul style={styles.list}>
                    {
                        playlist.map((item, i) => {
                            return (
                                <li key={item.id} style={styles.item}>
                                    <Con i={i} item={item} />
                                    <b style={styles.drop} onClick={this.dropOneSong.bind(this, i)}>ｘ</b>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    onClick = (e) => {
        e.stopPropagation()
    }
    playTheSong = item => {
        console.log(item)
        store.dispatch({
            type: "PLAY_ONE_SONG",
            data: item
        })
    }
    dropOneSong = (i) => {
        store.dispatch({
            type: "DROP_ONE_SONG",
            data: i
        })
    }
}
const styles = {
    wrap: {
        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        width: '100%',
        height: '60%',
        bottom: 0,
        display: 'flex',
        flexDirection: 'column'
    },
    list: {
        flex: 1,
        overflow: 'auto'
    },
    title: {
        height: 40,
        lineHeight: '40px',
        fontSize: '140%',
        paddingLeft: 12,
        borderBottom: '1px solid #EFEFF4',        
    },
    item: {
        padding: 8,
        height: 30,
        lineHeight: '30px',
        borderBottom: '1px solid #EFEFF4',
        display: 'flex',
        flex: 'none'
    },
    song: {
        flex: 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    drop: {
        flex: 'none',
        width: 30,
        textAlign: 'center',
        fontWeight: 'normal',
        color: '#99a'
    },
    songName: {
        color: "#333",
        fontSize: "110%"
    },
    songFrom: {
        fontSize: '60%',
        color: '#99a'
    },
    close: {
        position: 'absolute',
        top: 8,
        right: 8,
        color: '#108ee9',
    }
}
export default Mask(Mod);