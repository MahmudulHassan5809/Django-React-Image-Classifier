from rest_framework import serializers

from .models import Image


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'picture', 'classified', 'uploaded',)

    def create(self, validated_data):
        return Image.objects.create(**validated_data)
