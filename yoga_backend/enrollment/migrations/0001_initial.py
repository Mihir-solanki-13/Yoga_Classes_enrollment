# Generated by Django 4.2.7 on 2023-12-18 16:50

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Participant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('age', models.IntegerField(validators=[django.core.validators.MinValueValidator(18), django.core.validators.MaxValueValidator(65)])),
                ('batch_id', models.IntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(4)])),
                ('fee_paid', models.BooleanField(default=False)),
            ],
        ),
    ]
