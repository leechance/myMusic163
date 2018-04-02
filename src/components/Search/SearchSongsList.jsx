import React, { Component } from 'react';
import { PullToRefresh } from 'antd-mobile';
import store from '../../store/store';

class Mod extends Component {
    render() {
        let { refreshing, addData } = this.props
        let list = store.getState().searchSongs

        return (
            <PullToRefresh
                ref={el => this.ptr = el}
                style={styles.wrap}
                direction='up'
                refreshing={refreshing}
                distanceToRefresh={40}
                onRefresh={addData}
            >
                <ul>
                    {list.map(item => {
                        return (
                            <li key={item.id + 'li'} style={styles.item}>
                                <p key={item.id + 'p'} style={styles.songName}>{item.name}</p>
                                <span key={item.id + 'sp'} style={styles.songFrom}>
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
    wrap: {
        overflow: 'auto',
        height: '100%'
    },
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