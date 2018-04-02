import React from 'react';

import Wrap from './SearchPullToRefreshWrap';

import store from '../../store/store';

let Mod = props => {
    let list = store.getState().searchArtists;
    return (
        <ul>
            {list.map(item => {
                return (
                    <li key={item.id + 'li'} style={styles.item}>
                        <img src={item.img1v1Url} style={styles.img} alt={item.name} />
                        <span style={styles.name}>{item.name} <i style={styles.cname}>{item.alias.map(cname => '(' + cname + ')')}</i></span>
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
    name: {
        flowat: 'left',
        lineHeight: '50px',
        verticalAlign: 'middle',
        flex: 1
    },
    cname: {
        fontSize: '80%',
        color: '#99a'
    }
}

export default Wrap(Mod);