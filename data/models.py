from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Experimento(models.Model):
   
   concentracao = models.FloatField()
   temperatura = models.FloatField()
   usuario = models.ManyToManyField(User, related_name="experimentos", blank=True)

   def __str__(self):
      return f"{self.concentracao} --> {self.temperatura}"



