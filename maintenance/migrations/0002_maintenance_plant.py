# Generated by Django 3.2.5 on 2021-07-23 11:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0004_alter_plant_image'),
        ('maintenance', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='maintenance',
            name='plant',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='maintenance', to='plants.plant'),
            preserve_default=False,
        ),
    ]
