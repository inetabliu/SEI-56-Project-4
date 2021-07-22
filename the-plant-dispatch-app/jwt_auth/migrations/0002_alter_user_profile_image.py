# Generated by Django 3.2.5 on 2021-07-22 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_image',
            field=models.CharField(default='data:image/jpeg;base64,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', max_length=300),
        ),
    ]