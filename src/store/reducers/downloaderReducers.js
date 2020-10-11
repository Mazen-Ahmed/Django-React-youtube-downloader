import * as downloaderActions from "../actions/downloaderActions";

const updateObject=(state,newState)=>{
    return{
        ...state,
        ...newState
    }
}


const initialState = {
  info: null,
  error: null,
  loading: false,
  success:false,
  message:null,
  download:false
};


const getVideoInfoStart=(state,action)=>{
    return updateObject(state,{
        loading:true,
        error:false,
        success:false,
        download:false,
        message:null,

        info:null

    })
}
const getVideoInfoSuccess=(state,action)=>{
    return updateObject(state,{
        loading:false,
        error:false,
        info:action.info,
        success:true,
        message:null,

        download:false,

    })
}
const getVideoInfoFailed=(state,action)=>{
    return updateObject(state,{
        loading:false,
        error:action.error,
        success:false,
        info:null,
        download:false,
        message:null,



    })
}




const downloadVideoStart=(state,action)=>{
    return updateObject(state,{
        loading:false,
        download:true,
        error:false,
        success:false,
        message:null,

    })
}
const downloadVideoSuccess=(state,action)=>{
    return updateObject(state,{
        loading:false,
        error:false,
        download:false,
        success:true,
        message:action.message

    })
}
const downloadVideoFailed=(state,action)=>{
    return updateObject(state,{
        loading:false,
        error:action.error,
        success:false,
        info:null,
        download:false,
        message:null

    })
}


const DownloaderReducer=(state=initialState,action)=>{
    switch (action.type) {
        case downloaderActions.GET_VIDEO_INFO_START : return getVideoInfoStart(state,action);
        case downloaderActions.GET_VIDEO_INFO_SUCCESS : return getVideoInfoSuccess(state,action);
        case downloaderActions.GET_VIDEO_INFO_FAILED : return getVideoInfoFailed(state,action);
        case downloaderActions.DOWNLOAD_VIDEO_START : return downloadVideoStart(state,action);
        case downloaderActions.DOWNLOAD_VIDEO_SUCCESS : return downloadVideoSuccess(state,action);
        case downloaderActions.DOWNLOAD_VIDEO_FAILED : return downloadVideoFailed(state,action);

        default: return state;
    }
}
export default DownloaderReducer;