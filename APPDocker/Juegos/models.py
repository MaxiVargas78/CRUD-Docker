from django.db import models


class Categoria(models.TextChoices):
    Accion = 'Accion'
    Aventura = 'Aventura'
    MMO = 'MMO'
    Carreras = 'Carreras'
    Arcade = 'Arcade'
    Mesa = 'Mesa'
    Simulacion = 'Simulacion'
    Rol = 'Rol'
    Casino = 'Casino'
    Estrategia = 'Estrategia'
    Deporte = 'Deporte'

class Juego(models.Model):
    Nombre = models.CharField(max_length=100)
    Categoria = models.CharField(max_length=100)
    #Categoria = models.CharField(choices = Categoria.choices, max_length=100)
    Lanzamiento = models.CharField(max_length=8)
    Reseña = models.TextField()

    def _str_(self):
        return self.name
