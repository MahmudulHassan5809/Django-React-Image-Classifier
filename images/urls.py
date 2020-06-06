from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from images import api

urlpatterns = [
    path('api/images/', api.ImageList.as_view()),
    path('api/image/create/', api.CreateImage.as_view()),
    path('api/image/<int:image_id>', api.GetImageById.as_view()),
    path('api/image/delete/<int:id>', api.ImageDelete.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
