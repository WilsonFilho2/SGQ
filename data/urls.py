from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    
    path('login', views.login, name='login'),
    path('cadastro', views.cadastro, name='cadastro'),
    path('logout', views.logout, name='logout'),

    path('dados', views.dados, name='dados'),
    path('dados/inserir', views.inserir, name='dados/inserir'),
    path('dados/alterar', views.alterar, name='dados/alterar'),
    path('dados/excluir', views.excluir, name='dados/excluir'),
]