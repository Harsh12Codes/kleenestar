# Generated by Django 5.0.2 on 2024-03-20 16:23

import django.db.models.deletion
import django.utils.timezone
import workspaces.models
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='WorkSpace',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('business_name', models.CharField(max_length=80)),
                ('website_url', models.URLField(unique=True)),
                ('industry', models.CharField(blank=True, choices=[('E-commerce', 'E-commerce'), ('Sales', 'Sales'), ('Enterprise', 'Enterprise')], max_length=60, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('root_user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='work_space_root_user', to=settings.AUTH_USER_MODEL)),
                ('users', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='WorkSpaceInvite',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('invite_code', models.CharField(default=workspaces.models.create_workspace_invite, max_length=20)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('accepted', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('workspace', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='workspaces.workspace')),
            ],
        ),
    ]
