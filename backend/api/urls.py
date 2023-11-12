from . import views
from django.urls import path

urlpatterns = [
    path('', views.getDetails, name="Details")
]
