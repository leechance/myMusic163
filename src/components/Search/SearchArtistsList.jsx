import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../../store/store';
import { PullToRefresh } from 'antd-mobile';

class Mod extends Component {
    state = {
        height: document.documentElement.clientHeight - 43.5 - 45 - 44,
    };
    render() {
        let list = store.getState().searchArtists;
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
                                <img src={item.img1v1Url} style={styles.img} alt={item.name} />
                                <span style={styles.name}>{item.name} <i style={styles.cname}>{item.alias.map(cname => '(' + cname + ')')}</i></span>
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

export default Mod;