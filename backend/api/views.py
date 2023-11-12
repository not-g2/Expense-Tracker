from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User

def checkUserExists(providedUsername, providedPassword):
    if User.objects.filter(username = providedUsername).exists() and User.objects.filter(password = providedPassword).exists():
        return True
    else:
        return False

@api_view(['GET'])
def getDetails(request):
    param1 = request.GET.get('param1')
    param2 = request.GET.get('param2')

    return Response(checkUserExists(param1, param2))
