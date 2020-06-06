from rest_framework import serializers
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Image


class ImageSerializer(serializers.ModelSerializer):
    parser_classes = (MultiPartParser, FormParser,)
    # owner = serializers.StringRelatedField(many=True)

    class Meta:
        model = Image
        fields = ('id', 'picture', 'classified', 'uploaded',)
