from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog 
        fields = ('pk', 'title', 'article', 'created_date', 'author')