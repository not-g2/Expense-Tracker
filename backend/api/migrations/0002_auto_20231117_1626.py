# Generated by Django 3.2.23 on 2023-11-17 10:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='savings',
            field=models.FloatField(default=0.0),
        ),
        migrations.CreateModel(
            name='CategoryExpenditure',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('expenditure', models.FloatField()),
                ('category', models.CharField(choices=[('fd', 'Food'), ('Et', 'Entertainment'), ('Rt', 'Rent'), ('Gr', 'Grocery'), ('Ot', 'Other')], max_length=50)),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
