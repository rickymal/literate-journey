# Generated by Django 3.1.1 on 2021-04-12 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_auto_20201102_1619'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='description',
            field=models.TextField(blank=True, max_length=300, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='function',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
