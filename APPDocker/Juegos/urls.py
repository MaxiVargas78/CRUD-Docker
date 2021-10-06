from django.urls import path
from . import views
from .views import JuegoViewSet
from rest_framework import routers

app_name = 'Games'
router = routers.SimpleRouter()
router.register(r'Juego', JuegoViewSet, basename='Juego')



