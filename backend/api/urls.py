from . import views
from django.urls import path

urlpatterns = [
    path('login/', views.getDetails, name="Details"),
    path('expenditure/', views.getExpenditureTransaction, name="Transaction History"),
    path('register/', views.registerUser, name="Register User")
]
