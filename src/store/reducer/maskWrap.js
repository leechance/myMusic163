let defaultState = {
    mask:false,
    footerPlaylist: false,
}
export default {
    maskWrap(state = defaultState, { type, data }) {
        switch (type) {
            case "SHOW_FOOTER_PLAYLIST":
                state.footerPlaylist = true;
                state.mask = true;
                return state
            case "HIDE_MASK":
                return {mask:false}
            default:
                return state
        }
    }
};