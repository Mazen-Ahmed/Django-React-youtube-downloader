from django.db import models
from django.contrib.auth.models import AbstractUser
from backend import settings

class User(AbstractUser):
    avatar=models.ImageField(default='default-user-icon.jpg',upload_to='pics')
    def __str__(self):
        return self.username


