from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    full_name = models.CharField(max_length=50)
    profile_image = models.CharField(max_length=300)