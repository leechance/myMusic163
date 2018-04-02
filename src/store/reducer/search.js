export default {
    searchSuggest(state = [], { type, data }) {
        switch (type) {
            case "SET_SEARCH_SUGGEST":
                return data
            default:
                return state
        }
    },
    searchSongs(state = [], { type, data }) {
        switch (type) {
            case "SET_SEARCH_SONGS":
                return data
            case "ADD_SEARCH_SONGS":
                return [...state,...data]
            default:
                return state
        }
    },
    searchArtists(state = [], { type, data }) {
        switch (type) {
            case "SET_SEARCH_ARTISTS":
                return data
            case "ADD_SEARCH_ARTISTS":
                return [...state,...data]
            default:
                return state
        }
    },
    searchAlbums(state = [], { type, data }) {
        switch (type) {
            case "SET_SEARCH_ALBUMS":
                return data
            case "ADD_SEARCH_ALBUMS":
                return [...state,...data]
            default:
                return state
        }
    },
    searchPlaylists(state = [], { type, data }) {
        switch (type) {
            case "SET_SEARCH_PLAYLISTS":
                return data
            case "ADD_SEARCH_PLAYLISTS":
                return [...state,...data]
            default:
                return state
        }
    },
};