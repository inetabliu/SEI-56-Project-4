from maintenance.serializers.common import MaintenanceSerializer
from .common import PlantSerializer

class PopulatedPlantSerializer(PlantSerializer):
    maintenance = MaintenanceSerializer(many=True)