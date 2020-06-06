from images.models import Image
from images.serializers import ImageSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status


class ImageList(generics.ListAPIView):
    queryset = Image.objects.all().order_by('-uploaded')
    serializer_class = ImageSerializer


class CreateImage(generics.CreateAPIView):
    serializer_class = ImageSerializer

    def post(self, request, format=None):
        print(request.data)
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetImageById(APIView):
    def get(self, request, *args, **kwargs):
        image_id = kwargs.get('image_id')
        image_obj = Image.objects.get(id=image_id)
        serializer = ImageSerializer(image_obj)
        return Response(serializer.data)


class ImageDelete(generics.DestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    lookup_field = 'id'
