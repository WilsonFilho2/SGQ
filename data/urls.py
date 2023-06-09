from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    
    path('login', views.login, name='login'),
    path('cadastro', views.cadastro, name='cadastro'),
    path('logout', views.logout, name='logout'),
    path('dados', views.dados, name='dados'),

    
]