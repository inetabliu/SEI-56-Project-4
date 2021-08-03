from django.urls import path
from .views import MaintenanceListView

urlpatterns = [
  path('', MaintenanceListView.as_view())
  ]