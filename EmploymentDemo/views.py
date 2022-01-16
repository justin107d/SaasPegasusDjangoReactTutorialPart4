from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from rest_framework import viewsets

from .models import Employee
from .serializers import EmployeeSerializer

# Create your views here.

# make sure this view is only accessible on login
@method_decorator(login_required, name='dispatch')
class EmployeeView(TemplateView):
    # our hybrid template, shown above
    template_name = 'EmploymentDemo/employment.html'

    def get_context_data(self, **kwargs):
        # passing the department choices to the template in the context
        return {
            'department_choices': [{
                'id': c[0],
                'name': c[1]
            } for c in Employee.DEPARTMENT_CHOICES],
        }


# View through serializer
class EmployeeViewSet(viewsets.ModelViewSet):
    serializer_class = EmployeeSerializer

    def get_queryset(self):
        # filter queryset based on logged in user
        return self.request.user.employees.all()

    def perform_create(self, serializer):
        # ensure current user is correctly populated on new objects
        serializer.save(user=self.request.user)
    