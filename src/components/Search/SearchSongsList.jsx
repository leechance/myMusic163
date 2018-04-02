import React from 'react';

import Wrap from './SearchPullToRefreshWrap'

import store from '../../store/store';

let Mod = props => {
    let list = store.getState().searchSongs    
    return (
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
    )
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

// export default Mod;
export default Wrap(Mod)