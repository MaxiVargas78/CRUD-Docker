# Generated by Django 3.2.7 on 2021-10-04 02:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Juegos', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Juego',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nombre', models.TextField()),
                ('Categoria', models.CharField(choices=[('Accion', 'Accion'), ('Aventura', 'Aventura'), ('MMO', 'Mmo'), ('Carreras', 'Carreras'), ('Arcade', 'Arcade'), ('Mesa', 'Mesa'), ('Simulacion', 'Simulacion'), ('Rol', 'Rol'), ('Casino', 'Casino'), ('Estrategia', 'Estrategia'), ('Deporte', 'Deporte')], max_length=100)),
                ('Lanzamiento', models.CharField(max_length=8)),
                ('Resenha', models.TextField()),
            ],
        ),
        migrations.DeleteModel(
            name='Juegos',
        ),
    ]
