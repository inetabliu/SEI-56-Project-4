from django.db import models



class Maintenance(models.Model):
    ACTION_CHOICES = [
      ('WATERED_ON', 'Watered on'),
      ('REPOTTED_ON', 'Repotted On'),
      ('FERTILIZED_ON', 'Fertilized On'),
      ('PEST_TREATMENT', 'Treated for pests'),
    ]

    task = models.CharField(max_length=50, choices=ACTION_CHOICES, default=None)
    carried_on = models.DateField(auto_now=False, editable=True)
