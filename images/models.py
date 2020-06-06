from django.db import models

# Create your models here.


class Image(models.Model):
    picture = models.ImageField(upload_to='article_images')
    classified = models.CharField(max_length=200, blank=True)
    uploaded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.classified
