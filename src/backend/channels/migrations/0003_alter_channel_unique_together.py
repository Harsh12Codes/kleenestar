# Generated by Django 5.0.2 on 2024-03-21 13:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('channels', '0002_initial'),
        ('workspaces', '0002_alter_workspace_users'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='channel',
            unique_together={('workspace', 'channel_type')},
        ),
    ]
