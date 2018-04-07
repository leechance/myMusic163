import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import SearchSongsList from './SearchSongsList'
import SearchArtistsList from './SearchArtistsList'
import SearchAlbumsList from './SearchAlbumsList'
import SearchPlaylistsList from './SearchPlaylistsList'


class Mod extends Component {
    render() {
        const tabs = [
            { title: '单曲', code: 1, type: 'songs', component: SearchSongsList, index: 0 },
            { title: '歌手', code: 100, type: 'artists', component: SearchArtistsList, index: 1 },
            { title: '专辑', code: 10, type: 'albums', component: SearchAlbumsList, index: 2 },
            { title: '歌单', code: 1000, type: 'playlists', component: SearchPlaylistsList, index: 3 }
        ];
        let { showList, tabChange, addData, refreshing, onTabClick } = this.props;
        return (
            <div className='search-tab-wrap' style={{ display: showList ? 'block' : 'none', ...styles.wrap }}>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={tab => { tabChange(tab) }}
                    useOnPan={false}
                    onTabClick={onTabClick}
                >
                    {tabs.map(item => {
                        let Com = item.component
                        return (
                            <Com key={item.type} addData={addData} refreshing={refreshing} />
                        )
                    })}
                </Tabs>
            </div>
        )
    }
}

const styles = {
    wrap: {
        flex: 1,
        overflow: 'hidden'
    }
}
export default Mod;