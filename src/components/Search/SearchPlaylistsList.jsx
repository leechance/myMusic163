import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../../store/store';
import { PullToRefresh } from 'antd-mobile';

function simpleCount(count) {
    if (count > 99999999) {
        return (count / 100000000).toFixed(1) + '亿'
    } else if (count > 9999) {
        return (count / 10000).toFixed(1) + '万'
    } else {
        return count
    }
}
class Mod extends Component {
    state = {
        height: document.documentElement.clientHeight - 43.5 - 45 - 44,
    };
    render() {
        let list = store.getState().searchPlaylists;
        let { refreshing, addData } = this.props
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
                                <img src={item.coverImgUrl} style={styles.img} alt={item.name} />
                                <p style={styles.right}>
                                    <span style={styles.lname}>
                                        {item.name}
                                    </span>
                                    <i style={styles.cname}>
                                        {item.trackCount + '首 by ' + item.creator.nickname + '，播放' + simpleCount(item.playCount) + '次'}
                                    </i>
                                </p>
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
    lname: {
        color: "#333",
        padding: '8px 0',
        display: 'block',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    cname: {
        fontSize: '80%',
        color: '#99a'
    }
}

export default Mod;