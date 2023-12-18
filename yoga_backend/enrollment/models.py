from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Participant(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField(validators=[MinValueValidator(18), MaxValueValidator(65)])
    batch_id = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(4)])
    fee_paid = models.BooleanField(default=False)  # Added field for fee payment

    def __str__(self):
        return self.name
