import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import {connect} from 'react-redux'
import * as downloaderActions from '../store/actions/downloaderActions'


class Home extends Component {
    state={
        type:null,
        quality:null
    }
    componentDidMount(){
        if(localStorage.getItem('link')){
            this.props.getVideo(localStorage.getItem('link'))
        }
    }
    handleLink=(e)=>{
    e.preventDefault()
    const link=e.target.link.value
    this.props.getVideo(link)
   
    }
    handleChange=(e)=>{
        this.setState({type:e.target.value},()=>this.setState({quality:null}))
       

    }

    handleQuality=(e)=>{
        this.setState({quality:e.target.value})
    }

    handleDownload=()=>{
        this.props.downloadVideo(localStorage.getItem('link'),this.state.quality,this.state.type,this.props.info.name)
    }
    render() {

        let select=null
        let btn=null
        const dis= this.props.loading ? 'disabled' : ''
        let sel=true

        if (this.state.quality===null) {
            sel=true
        }else{
            sel=false
        }
        if(this.state.type !== null && this.state.type !== 'Choose File Type' && this.state.type==='vid' ){
             select= <div class=" flex mb-2 justify-start pr-1  md:mb-0 md:justify-start md:flex-1 relative mt-1 w-auto">
            <select onChange={this.handleQuality.bind(this)} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option selected={sel} >Choose Quality</option>
                {this.props.info&&this.props.info.video_qualitys.map(q=>{
                        return(
                            <option value={q}>{q}</option>

                        )
                    })
                    
        }
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
            </div>
            
            
        }else if(this.state.type !== null && this.state.type !== 'Choose File Type' && this.state.type==='aud'){
            select= <div class=" flex mb-2 justify-start pr-1  md:mb-0 md:justify-start md:flex-1 relative mt-1 w-auto">
            <select onChange={this.handleQuality.bind(this)} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option selected={sel} >Choose Quality</option>
                {this.props.info&&this.props.info.audio_qualitys.map(q=>{
                        return(
                            <option value={q}>{q}</option>

                        )
                    })
                    
        }
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
            </div>
            


        }
           
        

        if( this.state.quality!=='Choose Quality' && this.state.quality!==null && this.state.type!==null){
            btn= 
            
           this.props.download
                
                ?
                <div class="inline-block relative m-auto mt-1 w-auto">
                <button className="w-auto pl-1 pr-1  md:text-md md:w-32 bg-red-500 inline-flex justify-center p-2 rounded text-white font-bold opacity-50 cursor-not-allowed" type="submit">
                <Loader
                        type="Bars"
                        color="#FFF"
                        height={15}
                        width={15}   
                        className='mr-2 mt-1 '     
                    />
                Downloading
                </button>
                </div>
                  :
                <div class="inline-block relative m-auto mt-1 w-auto">
                <button className='w-auto bg-red-500 ml-2 p-2 rounded text-white font-bold' onClick={()=>this.handleDownload()}>Download</button>

                </div>
            

        }else{
            btn=''
        }


        return (
            <center>
            <div className=' pb-4  mt-24' style={{marginLeft:'auto'}}> 

            {this.props.error
            ?
            <div class="bg-red-100 border border-red-400 mb-4 text-red-700 w-1/2 px-4 py-3 rounded relative" role="alert">
         
                        <span class="block sm:inline">{this.props.error}</span>
                    </div>
            :
            ''
            }     


            {this.props.message
            ?
            <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b w-1/2 text-teal-900 px-4 py-3 shadow-md"  role="alert" >
         
                        <span class="block sm:inline">{this.props.message}</span>
                    </div>
            :
            ''
            }     


               <span className=' text-1xl md:text-3xl font-mono text-red-500'>Copy your youtube video link and Paste here..</span>
               <div class="mb-4">
                  <form onSubmit={this.handleLink}>
                <input class="shadow appearance-none border rounded w-1/2 md:w-1/2 mt-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" disabled={dis} defaultValue={localStorage.getItem('link') ? localStorage.getItem('link'): ''} id="username" type="text" name='link' placeholder="Youtube Link"/>
                {this.props.loading
                
                ?
                <button className='w-32 pl-1 pr-1  md:text-md md:w-32 bg-red-500 ml-2 inline-flex justify-center p-2 rounded text-white font-bold opacity-50 cursor-not-allowed' > 
                 <Loader
                type="Bars"
                color="#FFF"
                height={15}
                width={15}   
                className='mr-2 mt-1 '     
            />
                Searching</button>
                :
                <button className='w-32 bg-red-500 ml-2 p-2 rounded text-white font-bold' type='submit'>Search</button>
                }
               </form> 
                </div>  


                {this.props.info&& this.props.info
                ?
                <div className='bg-white h-auto overflow-hidden  rounded-sm w-10/12 md:w-3/5'>
                <div className='flex'><img className=' rounded-sm sm:h-48 h-32 w-full object-cover' src={this.props.info&&this.props.info.cover} /><br/></div>
                <div className='p-6 md:flex'>
                <div className='flex mb-2 justify-start md:mb-0 md:justify-start md:flex-1'><span className='text-red-500 '>{this.props.info&&this.props.info.name}</span></div>
                <div className='flex justify-start md:justify-center md:flex-1'> <span className='text-red-500 '>by: {this.props.info&&this.props.info.author}</span></div>
                </div>
                

                <div className='p-6 md:flex '>
              

          



                <div class=" flex mb-2 pr-1 justify-start md:mb-0 md:justify-start md:flex-1 relative mt-1 w-auto">
            <select onChange={this.handleChange.bind(this)} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option >Choose File Type</option>
                <option value='vid'>Video</option>
                <option value='aud'>Audio</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
            </div>
                    {select}


                    {btn}


                </div>
                </div>
                :
                ''
                
                }
              

            </div>
            </center>
        )
    }
}
const mapStateToProps=state=>{
    return{
      isAuthenticated:state.auth.token !== null,
      error:state.downloader.error,
      loading:state.downloader.loading,
      success:state.downloader.success,
      info:state.downloader.info,
      message:state.downloader.message,
      download:state.downloader.download
    }
  }
  
  const mapDispatchToProps=dispatch=>{
    return{
      getVideo:(link)=>dispatch(downloaderActions.getVideo(link)),
      downloadVideo:(link,quality,type,filename)=>dispatch(downloaderActions.downloadVideo(link,quality,type,filename)),
    }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Home);
