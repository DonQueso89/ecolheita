from core.models import UUIDModel
from django.db import models
from djmoney.models.fields import MoneyField


class Organization(UUIDModel):
    name = models.CharField(max_length=128)
    website = models.URLField(blank=True)
    logo = models.FileField(upload_to="logos/", blank=True, null=True)

    def __str__(self):
        return f"{self.name}"


class Vendor(UUIDModel):
    name = models.CharField(max_length=128)
    organization = models.ForeignKey(Organization, on_delete=models.PROTECT)
    open_from = models.TimeField()
    open_until = models.TimeField()
    website = models.URLField(blank=True)
    logo = models.FileField(upload_to="logos/", blank=True, null=True)
    default_backdrop = models.FileField(
        upload_to="vendor_backdrops/", blank=True, null=True
    )
    #  location

    def __str__(self):
        return f"{self.name}"


class Offer(UUIDModel):
    name = models.CharField(max_length=128)
    vendor = models.ForeignKey(Vendor, on_delete=models.PROTECT)
    unit_price = MoneyField(max_digits=5, decimal_places=2, default_currency="BRL")
    num_left = models.PositiveSmallIntegerField()
    collect_from = models.TimeField()
    collect_until = models.TimeField()
    #  collect_location =
    backdrop = models.FileField(upload_to="offer_backdrops/", blank=True, null=True)

    def __str__(self):
        return f"{self.name}"
