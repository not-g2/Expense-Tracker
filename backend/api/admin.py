from django.contrib import admin

# Register your models here.
from .models import User, ExpenditureTransaction


admin.site.register(User)
admin.site.register(ExpenditureTransaction)