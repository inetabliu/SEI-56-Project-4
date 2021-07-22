from django.db import models


class Plant(models.Model):
    plant_name = models.CharField(max_length=100, unique=True)
    genus = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    origin = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.plant_name} - {self.genus}"