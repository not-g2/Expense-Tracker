from django.contrib import admin

# Register your models here.
from .models import CustomUser, CategoryExpenditure

admin.site.register(CustomUser)
admin.site.register(CategoryExpenditure)