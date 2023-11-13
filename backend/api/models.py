from django.db import models
import random

def generate_unique_account_number():
    while True:
        account_number = random.randint(100_000_000_000_000, 999_999_999_999_999)
        if not User.objects.filter(account_no=account_number).exists():
            return account_number

class User(models.Model):
    name = models.TextField()
    savings = models.FloatField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    account_no = models.FloatField(default=generate_unique_account_number)
    username = models.TextField(max_length=100, blank=False, null=False, default='abcde')
    password = models.CharField(max_length=100, blank=False, null=False, default='abcde')

    def __str__(self):
        return f'{self.name}({self.account_no})'
    
class ExpenditureTransaction(models.Model):
    account_no = models.ForeignKey(User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    amount = models.FloatField()
    category = models.TextField()

    def __str__(self):
        return f'{self.account_no}'