# Generated by Django 5.0.2 on 2024-03-23 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('channels', '0003_alter_channel_unique_together'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='promptfeedback',
            name='channel',
        ),
        migrations.AddField(
            model_name='channel',
            name='activated',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='channel',
            name='connected',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='apicredentials',
            name='key_1',
            field=models.CharField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='apicredentials',
            name='key_2',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='apicredentials',
            name='key_3',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='apicredentials',
            name='key_4',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
    ]
