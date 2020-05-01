from django.conf import settings
from django.db import models
from core.models import UUIDModel

from django.utils.translation import gettext_lazy as _


class Order(UUIDModel):
    STATUS_PAID = 0
    STATUS_COLLECTED = 1

    STATUS_CHOICES = [
        (STATUS_PAID, _("paid")),
        (STATUS_COLLECTED, _("collected")),
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    offer = models.ForeignKey("vendors.Offer", on_delete=models.PROTECT)
    quantity = models.PositiveSmallIntegerField(default=1)
    status = models.PositiveSmallIntegerField(
        choices=STATUS_CHOICES, default=STATUS_PAID
    )
    collected_at = models.DateTimeField(blank=True, null=True)
