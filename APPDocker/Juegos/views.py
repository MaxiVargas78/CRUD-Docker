from django.shortcuts import render
from rest_framework import viewsets
from .models import Juego
from .serializers import JuegoSerializer
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView, ListAPIView

class JuegoViewSet(viewsets.ModelViewSet):
    serializer_class = JuegoSerializer
    permission_classes = (permissions.AllowAny,)
    ##http_method_names = ['get', 'head', 'post', 'update','delete']
    
    def get_queryset(self):
        return Juego.objects.all()
'''
    def get(self, request, *args, **kwargs):
        serializer = JuegoSerializer(Juego.objects.all(), many=True)

        return Response(serializer.data)
    
    def post(self, request, format=None):
        data = self.request.data
        queryset = Juego.objects.all()
        serializer = JuegoSerializer(queryset, many=True)

        return Response(serializer.data)
'''

