# Generated by Django 3.1.1 on 2021-04-14 05:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_auto_20210412_0301'),
    ]

    operations = [
        migrations.AddField(
            model_name='mentor',
            name='description',
            field=models.TextField(blank=True, max_length=300, null=True),
        ),
        migrations.AddField(
            model_name='mentor',
            name='function',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
