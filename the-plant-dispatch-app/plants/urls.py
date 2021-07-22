from django.urls import path
from .views import PlantListView

urlpatterns = [
  path('', PlantListView.as_view())
]