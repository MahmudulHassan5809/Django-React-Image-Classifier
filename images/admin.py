from django.contrib import admin
from django.utils.html import format_html
from .models import Image
# Register your models here.


class ImageAdmin(admin.ModelAdmin):
    def image_tag(self, obj):
        if obj.picture:
            return format_html('<img src="{}" />'.format(obj.picture.url))

    image_tag.short_description = 'Picture'

    list_display = ["image_tag", "classified", "uploaded"]
    search_fields = ('classified',)
    list_per_page = 20


admin.site.register(Image, ImageAdmin)
