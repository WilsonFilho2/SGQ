from django.db import models

# Create your models here.

class Experimento(models.Model):
   
   concentracao = models.FloatField()
   temperatura = models.FloatField()

   def __str__(self):
      return f"{self.concentracao} --> {self.temperatura}"

'''
class Info(models.Model):

   agente = models.CharField(max_length=100)
   acao = models.CharField(max_length=10) # Incluir, Excluir, Alterar
   momento = models.CharField(max_length=100)
   detalhe = models.CharField(max_length=100 default = '')
                              
'''

