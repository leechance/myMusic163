import React, { Component } from 'react';
import store from '../../store/store'

class Mod extends Component {
    render() {
        let data = store.getState().searchSuggest;
        let { showSug, keywords = '' } = this.props;
        const translater = {
            songs: '单曲',
            artists: '歌手',
            albums: '专辑',
            playlists: '歌单'
        }
        return (
            <ul className="suggest-list" onTouchStart={e => { e.stopPropagation() }}
                style={{
                    display: showSug ? 'block' : 'none',
                    backgroundColor: '#fff',
                    position: 'absolute',
                    top: 82,
                    left: 7,
                    width: document.documentElement.clientWidth - 56,
                    borderRight: '1px solid #efeff4',
                    borderLeft: '1px solid #efeff4',
                    boxShadow: '4px 4px 4px #aaa',
                    borderRadius: '4px',
                    zIndex: 2
                }}
            >
                <li key='default-sug' style={{
                    borderBottom: '1px solid #efeff4',
                    height: '28px',
                    lineHeight: '28px',
                    display: 'flex',
                    color: '#108ee9'
                }} onClick={this.props.submitKeywords}>
                    <i style={{ padding: '0 8px 0 15px', flex: 'none' }}>搜索</i>
                    <span style={styles.name}>
                        {keywords}
                    </span>
                </li>
                {
                    data.map(ele => {
                        return (
                            <li key={ele.id} className='search-list'
                                style={styles.item}
                                onClick={this.toDetailPage.bind(this, ele)}
                            >
                                <i style={styles.tip}>
                                    {translater[ele.type]}
                                </i>
                                <span style={styles.name}>
                                    {ele.name}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    toDetailPage(data) {
        console.log(data)
    }
}
const styles = {
    item: {
        borderBottom: '1px solid #efeff4',
        height: '28px',
        lineHeight: '28px',
        display: 'flex',
        color: "#333"
    },
    tip: {
        padding: '0 8px 0 15px',
        flex: 'none',
        color: '#999'
    },
    name: {
        flex: 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    }
}
export default Mod;

