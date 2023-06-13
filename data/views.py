from django.shortcuts import render
from django.http import HttpResponseRedirect, request, HttpResponse
from django.urls import reverse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as django_login, logout as django_logout
from django.contrib.auth.decorators import login_required
from . import models

##########################################################################################################################

def calc_experimento(request) -> list:
    experimentos = list()
    for experimento in models.Experimento.objects.all():
        temporario = [experimento.concentracao, experimento.temperatura]
        experimentos.append(temporario[:])

    return experimentos


##########################################################################################################################

# Create your views here.
def index(request):
    if request.user.is_authenticated:
        experimentos = calc_experimento(request)
        return render(request, 'data/index.html', {
            'login': True,
            'experimentos': experimentos,
        })
    
    return render(request, 'data/index.html')

def login(request):

    if request.method == 'POST':
        username = request.POST.get('name')
        password = request.POST.get('password')
        email = request.POST.get('email')

        user = authenticate(request, username = username, password = password)

        if user:
            django_login(request, user)
            return render(request, 'data/index.html', {
                'login': True,
            })
        
        else:
            return HttpResponseRedirect(reverse('login'))

    return render(request, 'data/login.html')

def cadastro(request):

    if request.method == 'POST':      
        username = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save() 
            user = authenticate(request, username=username, password=password)
            django_login(request, user)
            return HttpResponseRedirect(reverse('index'))
        
        except:
            user = authenticate(request, username=username, password=password)
            django_login(request, user=user)
            return HttpResponseRedirect(reverse('index'))

    return render(request, 'data/cadastro.html')

def logout(request):
    django_logout(request)
    return render(request, 'data/index.html', {
        'login': False
    })

##########################################################################################################

@login_required(login_url='/login')
def dados(request):

    experimentos = models.Experimento.objects.all()

    return render(request, 'data/dados.html', {
        'login': True,
        'experimentos': experimentos,
    })

def inserir(request):
    if request.method == "POST":

        concentracao = request.POST.get('concentracao')
        temperatura = request.POST.get('temperatura')
        user = str(request.user)

        print(request.user)

        if request.user.is_authenticated:
            
            experimento = models.Experimento.objects.create(concentracao = concentracao, temperatura = temperatura, usuario = user)
            experimento.save()

            return HttpResponseRedirect(reverse('dados'))
        
    return HttpResponseRedirect(reverse('dados'))

def alterar(request):
    if request.method == "POST":

        experimento_id = request.POST.get('id')
        experimento = models.Experimento.objects.get(id = experimento_id)
        nova_concentracao = request.POST.get('concentracao')
        nova_temperatura = request.POST.get('temperatura')

        if nova_concentracao == '':
            nova_concentracao = experimento.concentracao
        
        if nova_temperatura == '':
            nova_temperatura = experimento.temperatura

        if request.user.is_authenticated:
            experimento.concentracao = nova_concentracao
            experimento.temperatura = nova_temperatura
            experimento.save()

    return HttpResponseRedirect(reverse('dados'))

def excluir(request):
    if request.method == "POST":

        experimento_id = request.POST.get('id')
        experimento = models.Experimento.objects.get(id = experimento_id)

        if request.user.is_authenticated:
            experimento.delete()

    return HttpResponseRedirect(reverse('dados'))

