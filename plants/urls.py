from django.urls import path
from .views import PlantDetailView, PlantListView, PlantMaintenanceView

urlpatterns = [
  path('', PlantListView.as_view()),
  path('<int:pk>/', PlantDetailView.as_view()),
  path('maintenance/<int:pk>/', PlantMaintenanceView.as_view())
]