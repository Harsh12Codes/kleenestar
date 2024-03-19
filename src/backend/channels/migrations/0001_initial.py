# Generated by Django 5.0.2 on 2024-03-19 08:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='APICredentials',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key_1', models.CharField(max_length=255)),
                ('key_2', models.CharField(blank=True, max_length=255, null=True)),
                ('key_3', models.CharField(blank=True, max_length=255, null=True)),
                ('key_4', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='PromptFeedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Channel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.IntegerField(choices=[(1, 'Google ads'), (2, 'Meta'), (3, 'X (Twitter)'), (4, 'Linkedin')])),
                ('credential', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='channels.apicredentials')),
            ],
        ),
    ]
