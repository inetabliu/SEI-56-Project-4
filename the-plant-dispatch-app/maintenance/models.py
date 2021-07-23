from django.db import models



class Maintenance(models.Model):
    ACTION_CHOICES = [
      ('WATERED ON', 'Watered on'),
      ('REPOTTED ON', 'Repotted On'),
      ('FERTILIZED ON', 'Fertilized On'),
      ('PEST TREATMENT', 'Treated for pests'),
    ]

    task = models.CharField(max_length=50, choices=ACTION_CHOICES, default=None)
    carried_on = models.DateField(auto_now=False, editable=True)
    plant = models.ForeignKey(
      "plants.Plant",
      related_name="maintenance",
      on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.task} - {self.carried_on} - {self.plant}"
