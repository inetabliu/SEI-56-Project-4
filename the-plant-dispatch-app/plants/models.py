from django.db import models


class Plant(models.Model):
    plant_name = models.CharField(max_length=100, unique=True)
    botanical_name = models.CharField(max_length=100, null=True, blank=True)
    nickname = models.CharField(max_length=100, null=True, blank=True)
    genus = models.CharField(max_length=100)
    nursery_pot = models.PositiveIntegerField(null=True, blank=True)
    image = models.CharField(max_length=100, default="https://res.cloudinary.com/inetab/image/upload/c_scale,h_400,w_600/v1627030331/SEI_Project_4/sblkzvbotq3ndadygtsy.jpg")
    origin = models.CharField(max_length=100)
    description = models.TextField(max_length=300, null=True, blank=True)

    def __str__(self):
        return f"{self.plant_name}"