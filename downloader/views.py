from django.shortcuts import render
from rest_framework.views import APIView
from pytube import YouTube
from rest_framework.response import Response
from django.http import HttpResponse
import youtube_dl
import sys
from django.http import FileResponse


class getVideo(APIView):
    def get(self,request):
        vids=[]
        aud=[]
        link=request.META.get('HTTP_LINK',None)
        video_qualitys=YouTube(link)
        for i in video_qualitys.streams.filter(progressive=True):
           if(i.resolution!=None and i.resolution not in vids):
             vids.append(i.resolution)
        for i in video_qualitys.streams.filter(only_audio=True):
           if(i.abr!=None and i.abr not in vids):
             aud.append(i.abr)
        data={
            'video_qualitys':vids,
            'audio_qualitys':aud,
            'name':video_qualitys.title,
            'cover':video_qualitys.thumbnail_url,
            'author':video_qualitys.author
        }
        return Response(data)





class DownloadVideo(APIView):
    def post(self,request):
        link=request.data.get('link',None)
        quality=request.data.get('quality',None)
        type=request.data.get('type',None)
        qual=quality[:-4]
        video=YouTube(link)
        
        if type=='vid':
            strs=video.streams.filter(progressive=True,resolution=quality)
            for i in strs:
                i.download(skip_existing=True)
            return Response('downloaded successfully') 
        else:
            params ={
                'format': 'bestaudio/best',
                'postprocessors':[{
                    'key': 'FFmpegExtractAudio',
                    'preferredcodec': 'mp3',
                    'preferredquality': qual,
                }],
            }

            youtube= youtube_dl.YoutubeDL(params)
            youtube.download([link])
            return Response('downloaded successfully')