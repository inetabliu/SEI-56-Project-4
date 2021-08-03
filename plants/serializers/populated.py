from maintenance.serializers.common import MaintenanceSerializer
from .common import PlantSerializer
from jwt_auth.serializer import UserSerializer

class PopulatedPlantSerializer(PlantSerializer):
    maintenance = MaintenanceSerializer(many=True)
    owner = UserSerializer()