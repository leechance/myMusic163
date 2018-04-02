import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import SearchSongsList from './SearchSongsList'
import SearchArtistsList from './SearchArtistsList'
import SearchAlbumsList from './SearchAlbumsList'
import SearchPlaylistsList from './SearchPlaylistsList'
class Mod extends Component {
    render() {
        const tabs = [
            { title: '单曲', code: 1, type: 'songs' },
            { title: '歌手', code: 100, type: 'artists' },
            { title: '专辑', code: 10, type: 'albums' },
            { title: '歌单', code: 1000, type: 'playlists' }
        ];
        let { showList, tabChange, addData, refreshing } = this.props;
        return (
            <div className='search-tab-wrap' style={{ display: showList ? 'block' : 'none', ...styles.wrap }}>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={tab => { tabChange(tab) }}
                    useOnPan={false}
                >
                    <SearchSongsList addData={addData} refreshing={refreshing} />
                    <SearchArtistsList addData={addData} refreshing={refreshing} />
                    <SearchAlbumsList addData={addData} refreshing={refreshing} />
                    <SearchPlaylistsList addData={addData} refreshing={refreshing} />
                </Tabs>
            </div>
        )
    }
}

const styles = {
    wrap: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        overflow: 'hidden'
    }
}
export default Mod;