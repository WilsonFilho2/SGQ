# Generated by Django 4.2.1 on 2023-06-11 00:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0002_experimento_usuario'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='experimento',
            name='usuario',
        ),
        migrations.AddField(
            model_name='experimento',
            name='usuario',
            field=models.CharField(default='0', max_length=100),
        ),
    ]
