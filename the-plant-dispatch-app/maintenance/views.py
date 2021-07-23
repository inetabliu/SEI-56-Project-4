from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status 
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied


from .serializers.common import MaintenanceSerializer
from .models import Maintenance

class MaintenanceListView(APIView):

    def post(self, request):
        record_to_create = MaintenanceSerializer(data=request.data) 
        if record_to_create.is_valid():
            record_to_create.save()
            return Response(record_to_create.data, status=status.HTTP_201_CREATED)
        return Response(record_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

