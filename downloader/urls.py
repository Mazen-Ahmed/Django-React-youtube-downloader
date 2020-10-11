from django.urls import path,include
from .views import getVideo,DownloadVideo


urlpatterns = [
    path('get/', getVideo.as_view()),
    path('download/', DownloadVideo.as_view()),

]
