from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Experimento(models.Model):
   
   concentracao = models.FloatField()
   temperatura = models.FloatField()
   usuario = models.CharField(max_length=100, default='')

   def __str__(self):
      return f"{self.id} - {self.concentracao}mol --> {self.temperatura}ºC"



