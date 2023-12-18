# views.py

from rest_framework import generics, status
from rest_framework.response import Response
from .models import Participant
from .serializers import ParticipantSerializer

class Enroll(generics.CreateAPIView):
    serializer_class = ParticipantSerializer

    def perform_create(self, serializer):
        serializer.save()


class Feepayment(generics.UpdateAPIView):
    queryset = Participant.objects.all()
    serializer_class = ParticipantSerializer
    lookup_field = 'id'

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.fee_paid = True
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)