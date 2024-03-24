

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('channels', '0004_remove_promptfeedback_channel_channel_activated_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Campaign',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('budget', models.PositiveIntegerField()),
                ('objective', models.TextField()),
                ('channel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='channels.channel')),
            ],
        ),
        migrations.CreateModel(
            name='AudienceDemographics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('agerange', models.CharField(max_length=50)),
                ('gender', models.CharField(max_length=10)),
                ('location', models.CharField(max_length=100)),
                ('interest', models.CharField(max_length=100)),
                ('campaign', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dummy.campaign')),
            ],
        ),
        migrations.CreateModel(
            name='AdSet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('targeting_details', models.TextField()),
                ('budget', models.PositiveIntegerField()),
                ('campaign', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dummy.campaign')),
            ],
        ),
        migrations.CreateModel(
            name='Ads',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('creative', models.FileField(upload_to='ADS')),
                ('url', models.URLField()),
                ('is_active', models.BooleanField(default=True)),
                ('adset', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dummy.adset')),
                ('campaign', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dummy.campaign')),
            ],
        ),
        migrations.CreateModel(
            name='PerformanceMetric',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('impressions', models.PositiveIntegerField()),
                ('clicks', models.PositiveIntegerField()),
                ('conversions', models.PositiveIntegerField()),
                ('spend', models.PositiveIntegerField()),
                ('ctr', models.PositiveIntegerField()),
                ('conversion_rate', models.FloatField()),
                ('ad', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dummy.ads')),
            ],
        ),
        migrations.CreateModel(
            name='SentimentAnalysis',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('positivementions', models.IntegerField(default=0)),
                ('neutralmentions', models.IntegerField(default=0)),
                ('negativementions', models.IntegerField(default=0)),
                ('analysisdata', models.JSONField(blank=True, null=True)),
                ('ad', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dummy.ads')),
            ],
        ),
    ]