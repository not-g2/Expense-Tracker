# Generated by Django 3.2.23 on 2023-11-12 18:51

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(default='abcde', max_length=100),
        ),
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.TextField(default='abcde', max_length=100),
        ),
    ]