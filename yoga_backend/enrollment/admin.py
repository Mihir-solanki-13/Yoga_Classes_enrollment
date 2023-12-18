# admin.py
from django.contrib import admin
from .models import Participant

@admin.register(Participant)
class ParticipantAdmin(admin.ModelAdmin):
    list_display = ('name', 'age', 'batch_id', 'fee_paid')
    list_filter = ('batch_id', 'fee_paid')
    search_fields = ('name',)
