# Generated by Django 3.2.5 on 2021-07-22 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0002_alter_plant_plant_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plant',
            name='image',
            field=models.CharField(default='https://upload.wikimedia.org/wikipedia/commons/f/fe/Starr_080731-9572_Monstera_deliciosa.jpg', max_length=100),
        ),
    ]
