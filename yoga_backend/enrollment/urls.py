# urls.py

from django.urls import path
from .views import *
urlpatterns = [
    path('enroll/', Enroll.as_view(), name='Enroll'),
    path('fee_payment/<int:id>/', Feepayment.as_view(), name='participant-fee-payment'),
    # Add more URL patterns as needed
]
