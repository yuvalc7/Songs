
import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        {
            title:'No Scrubs', 
            duration: '4:05'
        },
        {
            title:'macarena', 
            duration: '2:30'
        },
        {
            title:'All Star', 
            duration: '3:15'
        },
        {
            title:'I Want It That Way', 
            duration: '1:45'
        }
    ];
};

const selecteSongReducer = (selectedSong = null , action) => {
    if (action.type === 'SONG_SELECTED'){
            return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selecteSongReducer
});

