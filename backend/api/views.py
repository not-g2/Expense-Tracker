from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User, ExpenditureTransaction
from rest_framework import status
from .serilaizers import UserSerializer

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

    if checkUserExists(param1, param2):
        user = User.objects.get(username = param1, password = param2)
        user_dict = {
            'id': user.id,
            'name': user.name,
            'savings': user.savings,
            'created': user.created,
            'updated': user.updated,
            'username': user.username,
            'password': user.password,
            'account no': user.account_no
        }
        return Response(user_dict)
    else:
        return Response({'detail': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)

#https:127.0.0.1/8000/expenditure/?param1={User Account no}
@api_view(['GET'])
def getExpenditureTransaction(request):
    #Account_no
    param1 = request.GET.get('param1')
    if User.objects.filter(account_no = param1).exists():
        account_no_id = User.objects.get(account_no = param1).id
        History = retrieveHistory(account_no_id)
        return Response(History)
    
#https:127.0.0.1/8000/register
@api_view(['POST'])
def registerUser(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)