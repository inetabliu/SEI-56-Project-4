# Generated by Django 3.2.5 on 2021-07-22 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Plant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plant_name', models.CharField(max_length=100)),
                ('genus', models.CharField(max_length=100)),
                ('image', models.CharField(max_length=100)),
                ('origin', models.CharField(max_length=100)),
            ],
        ),
    ]
