# Generated by Django 5.0.2 on 2024-04-04 22:32

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('channels', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameModel(
            old_name='PromptInput',
            new_name='Prompt',
        ),
        migrations.AddField(
            model_name='promptfeedback',
            name='prompt',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='channels.prompt'),
            preserve_default=False,
        ),
    ]