# Generated by Django 3.0.1 on 2019-12-25 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('planes', '0002_auto_20191225_1518'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plan',
            name='descripcion',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
