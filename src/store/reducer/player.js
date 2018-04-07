const getUrl = id => 'http://music.163.com/song/media/outer/url?id=' + id + '.mp3'

let playerDefaultState = {
    url: '',//当前播放歌曲的地址
    playlist: [],//当前播放列表
    autoPlay: false,//是否自动播放
    index: -1,//playlist中对应的正在播放歌曲的下标,-1为未播放
    autoType: 0,//自动播放顺序，列表循环：0，单曲循环：1，随机：2
    time: 0,
}

export default {
    player(state = playerDefaultState, { type, data }) {
        let len = state.playlist.length;
        switch (type) {
            /* 播放单曲 */
            case "PLAY_ONE_SONG":
                //如果新播放歌曲存在于列表则直接改变当前播放下标，否则放在当前歌曲之后
                let newIndex = -1;
                for (let i = 0; i < len; i++) {
                    if (data.id === state.playlist[i].id) {
                        newIndex = i;
                    }
                }
                if (newIndex !== -1) {
                    state.index = newIndex
                } else {
                    state.index++;
                    state.playlist.splice(state.index, 0, data);
                }
                //根据新下标获取对应的id再获取对应的播放地址
                state.url = getUrl(state.playlist[state.index].id)
                state.autoPlay = true;//播放开始默认打开自动播放
                return state;
            /* 删除单曲 */
            case "DROP_ONE_SONG":
                state.playlist.splice(data, 1);//根据下标截去相应数组中数据
                len = state.playlist.length;
                //当前播放歌曲下标大于目标时，下标回退1；
                //当前播放歌曲即为目标时，播放下一首，如果不存在，则停止
                if (state.index > data) {
                    state.index--
                } else if (state.index === data) {
                    if (len < 1) {
                        state.index = -1
                    } else if (state.index === len) {
                        state.index = 0
                    }
                }
                if (state.index === -1) {
                    state.url = ''
                } else {
                    state.url = getUrl(state.playlist[state.index].id)
                }
                return state;
            case "NEXT_SONG":
                switch (state.autoType) {
                    case 2:
                        state.index = Math.floor(Math.random() * len)
                        break;
                    default:
                        state.index++;
                        if (state.index >= len) {
                            state.index = 0
                        }
                }
                state.time = 0;
                state.url = getUrl(state.playlist[state.index].id);
                return state;
            case "AUTO_NEXT_SONG":
                switch (state.autoType) {
                    case 0:
                        state.index++;
                        if (state.index >= len) {
                            state.index = 0
                        }
                        break;
                    case 2:
                        state.index = Math.floor(Math.random() * len)
                        break;
                    default:
                }
                state.time = 0;
                state.url = getUrl(state.playlist[state.index].id);
                return state;
            case "SET_AUTOTYPE":
                state.autoType = data;
                return state
            default:
                return state
        }
    },
};