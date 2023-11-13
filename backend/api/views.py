from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User, ExpenditureTransaction

def checkUserExists(providedUsername, providedPassword):
    if User.objects.filter(username = providedUsername).exists() and User.objects.filter(password = providedPassword).exists():
        return True
    else:
        return False

def retrieveHistory(providedAccount_no_id):
    history = ExpenditureTransaction.objects.filter(account_no_id = providedAccount_no_id)
    history_dict = []
    for obj in history:
        dict = {
            'id': obj.id,
            'amount': obj.amount,
            'created': obj.created,
            'category': obj.category
        }
        history_dict.append(dict)
    return history_dict

#https:127.0.0.1/8000/login/?param1={User given username}&param2={User given password}
@api_view(['GET'])
def getDetails(request):
    #Username
    param1 = request.GET.get('param1')
    #Password
    param2 = request.GET.get('param2')

    return Response(checkUserExists(param1, param2))

#https:127.0.0.1/8000/expenditure/?param1={User Account no}
@api_view(['GET'])
def getExpenditureTransaction(request):
    #Account_no
    param1 = request.GET.get('param1')
    if User.objects.filter(account_no = param1).exists():
        account_no_id = User.objects.get(account_no = param1).id
        History = retrieveHistory(account_no_id)
        return Response(History)