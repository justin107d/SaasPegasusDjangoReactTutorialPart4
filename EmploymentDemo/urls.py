from django.urls import path
from rest_framework import routers

from. import views

urlpatterns = [
    path('', views.EmployeeView.as_view())
]

# basename is now required by django
router = routers.DefaultRouter()
router.register('api/employees', views.EmployeeViewSet, basename='Employee')

urlpatterns += router.urls