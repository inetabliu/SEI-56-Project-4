from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Plant
from .serializers import PlantSerializer

class PlantListView(APIView):

    def get(self, _request):
        plants = Plant.objects.all()
        serialized_plants = PlantSerializer(plants, many=True)
        return Response(serialized_plants.data, status=status.HTTP_200_OK)