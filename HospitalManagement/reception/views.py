from django.shortcuts import render


# Create your views here.

def home(request):
    return render(request, 'home.html')


def patient(request):
    return render(request, 'patient.html')


def employe(request):
    return render(request, 'employe.html')

