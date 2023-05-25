from django.shortcuts import render
from django.http import HttpResponseRedirect, request
from django.urls import reverse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as django_login, logout as django_logout


# Create your views here.
def index(request):
    return render(request, 'data/index.html')

def login(request):

    if request.method == 'POST':
        username = request.POST.get('name')
        password = request.POST.get('password')

        user = authenticate(request, username = username, password = password)

        if user:
            django_login(request, user)
            return HttpResponseRedirect(reverse('index'))
        
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
            return HttpResponseRedirect(reverse('login'))

    return render(request, 'data/cadastro.html')

def logout(request):
    django_logout(request)
    return HttpResponseRedirect(reverse('login'))
