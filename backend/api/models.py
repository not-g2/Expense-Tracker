from django.db import models
import random

def generate_unique_account_number():
    while True:
        account_number = random.randint(100_000_000_000_000, 999_999_999_999_999)  # Replace with your desired range
        if not User.objects.filter(account_no=account_number).exists():
            return account_number

class User(models.Model):
    name = models.TextField()
    savings = models.FloatField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    account_no = models.IntegerField(default=generate_unique_account_number, unique=True)
    username = models.TextField()
    password = models.TextField()