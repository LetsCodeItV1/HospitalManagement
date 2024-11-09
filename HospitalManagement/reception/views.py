from django.shortcuts import render


# Create your views here.

def home(request):
    return render(request, 'home.html')


def patient(request):
    return render(request, 'GestionPatients/patient.html')


def employe(request):
    return render(request, 'employe.html')

def detailPatient(request):
    return render(request, 'GestionPatients/detail_patient.html')
