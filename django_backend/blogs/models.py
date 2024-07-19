from django.db import models
class Blog(models.Model):
    title = models.CharField("Title", max_length=20)
    article = models.TextField()
    created_date = models.DateTimeField("Created Date", auto_now_add=True)
    author = models.CharField("Author", max_length=50)
    def __str__(self):
        return self.title