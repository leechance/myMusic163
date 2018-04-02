import React from 'react';

import Wrap from './SearchPullToRefreshWrap';

import store from '../../store/store';

let Mod = props => {
    let list = store.getState().searchAlbums;
    return (
        <ul>
            {list.map(item => {
                return (
                    <li key={item.id + 'li'} style={styles.item}>
                        <img src={item.blurPicUrl} style={styles.img} alt={item.name} />
                        <p style={styles.right}>
                            <span style={styles.aname}>
                                {item.name}
                                <i style={styles.cname}>{item.containedSong ? `（包含单曲：${item.containedSong}）` : ''}</i>
                            </span>
                            <i style={styles.cname}>
                                {item.artists.map((art, index) => index === 0 ? art.name : ' / ' + art.name)} -- {dateString(item.publishTime)}
                            </i>
                        </p>
                    </li>
                )
            })}
        </ul>
    )
}

function dateString(time) {
    let date = new Date(time)
    return date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate()
}
const styles = {
    item: {
        backgroundColor: '#fff',
        borderBottom: '1px solid #EFEFF4',
        padding: 8,
        display: 'flex'
    },
    img: {
        marginRight: 8,
        width: 50,
        height: 50,
        flowat: 'left',
        verticalAlign: 'middle',
        flex: 'none'
    },
    right: {
        flowat: 'left',
        verticalAlign: 'middle',
        flex: 1
    },
    aname: {
        color: "#333",
        padding: '8px 0',
        display: 'block'
    },
    cname: {
        fontSize: '80%',
        color: '#99a'
    }
}

export default Wrap(Mod);