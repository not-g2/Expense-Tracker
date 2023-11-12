from django.db import models


class User(models.Model):
    name = models.TextField()
    savings = models.FloatField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


