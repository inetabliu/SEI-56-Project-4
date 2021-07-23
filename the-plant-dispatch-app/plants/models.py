from django.db import models


class Plant(models.Model):
    plant_name = models.CharField(max_length=100, unique=True)
    genus = models.CharField(max_length=100)
    image = models.CharField(max_length=100, default="https://res.cloudinary.com/inetab/image/upload/c_scale,h_400,w_600/v1627030331/SEI_Project_4/sblkzvbotq3ndadygtsy.jpg")
    origin = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.plant_name}"