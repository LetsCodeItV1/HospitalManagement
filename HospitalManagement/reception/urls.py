from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("patient/", views.patient, name="patient"),
    path("employe/", views.employe, name="employe")
]
