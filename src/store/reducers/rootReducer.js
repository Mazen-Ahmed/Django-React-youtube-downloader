import {combineReducers} from 'redux'
import authReducer from './authReducer'
import  DownloaderReducer  from './downloaderReducers';
const RootReducer=combineReducers({
        'auth':authReducer,
        'downloader':DownloaderReducer,
})

export default RootReducer;