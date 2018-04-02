import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PullToRefresh } from 'antd-mobile';
import store from '../../store/store';

class Mod extends Component {
    state = {
        height: document.documentElement.clientHeight - 43.5 - 45 - 44,
    };
    render() {
        let { refreshing, addData } = this.props
        let list = store.getState().searchSongs
        return (
            <PullToRefresh
                ref={el => this.ptr = el}
                style={{ height: this.state.height, overflow: 'auto' }}
                direction='up'
                refreshing={refreshing}
                onRefresh={addData}
            >
                <ul>
                    {list.map(item => {
                        return (
                            <li key={item.id + 'li'} style={styles.item}>
                                <p style={styles.songName}>{item.name}</p>
                                <span style={styles.songFrom}>
                                    {item.artists.map((person, index) => index === 0 ? person.name : (' / ' + person.name))} -- {item.album.name}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </PullToRefresh>
        );
    }
}
const styles = {
    item: {
        backgroundColor: '#fff',
        borderBottom: '1px solid #EFEFF4',
        padding: 8,
    },
    songName: {
        paddingBottom: 8
    },
    songFrom: {
        fontSize: '80%',
        color: '#99a'
    },
    btmBar: {
        padding: 8,
        textAlign: 'center',
        color: '#999'
    }
}

export default Mod;