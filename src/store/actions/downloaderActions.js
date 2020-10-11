import axios from 'axios'
export const GET_VIDEO_INFO_START = "GET_VIDEO_INFO_START";
export const GET_VIDEO_INFO_SUCCESS = "GET_VIDEO_INFO_SUCCESS";
export const GET_VIDEO_INFO_FAILED = "GET_VIDEO_INFO_FAILED";
export const DOWNLOAD_VIDEO_START = "DOWNLOAD_VIDEO_START";
export const DOWNLOAD_VIDEO_SUCCESS = "DOWNLOAD_VIDEO_SUCCESS";
export const DOWNLOAD_VIDEO_FAILED = "DOWNLOAD_VIDEO_FAILED";

export const getVideoInfoStart=()=>{
    return{
        type:GET_VIDEO_INFO_START
    }
}
export const getVideoInfoSuccess=(info)=>{
    return{
        type:GET_VIDEO_INFO_SUCCESS,
        info
    }
}
export const getVideoInfoFailed=(error)=>{
    return{
        type:GET_VIDEO_INFO_FAILED,
        error,
    }
}



export const downloadVideoStart=()=>{
    return{
        type:DOWNLOAD_VIDEO_START
    }
}
export const downloadVideoSuccess=(message)=>{
    return{
        type:DOWNLOAD_VIDEO_SUCCESS,
        message
    }
}
export const downloadVideoFailed=(error)=>{
    return{
        type:DOWNLOAD_VIDEO_FAILED,
        error,
    }
}




export const getVideo=(link)=>{
    return dispatch=>{
        dispatch(getVideoInfoStart())
        axios.get('http://127.0.0.1:8000/video/get/',{headers:{'link':link}})
        .then(res=>{
            dispatch(getVideoInfoSuccess(res.data))
            localStorage.setItem('link',link)
        }).catch(err=>{
            const error='couldn\'t find any matches for this link'
            dispatch(getVideoInfoFailed(error))
        })
    }
}



export const downloadVideo=(link,quality,type,filename)=>{
    return dispatch=>{
        dispatch(downloadVideoStart())
        axios.post('http://127.0.0.1:8000/video/download/',{link:link,quality:quality,type:type})
        .then(res=>{
            const message='downloaded successfully'
            dispatch(downloadVideoSuccess(message))
        }).catch(err=>{
            console.log(err);
            const error='couldn\'t download this video'
            dispatch(downloadVideoFailed(error))
        })
    }
}