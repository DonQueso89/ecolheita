from graphene_django import DjangoObjectType
from vendors.models import Vendor, Offer, Organization
from core.types import UUIDNode


class VendorNode(DjangoObjectType):
    class Meta:
        model = Vendor
        interfaces = (UUIDNode,)
        filter_fields = ("name",)


class OfferNode(DjangoObjectType):
    class Meta:
        model = Offer
        interfaces = (UUIDNode,)
        fields = ("name", "status", "offer", "quantity", "collected_at")
        filter_fields = ("name",)


class OrganizationNode(DjangoObjectType):
    class Meta:
        model = Organization
        interfaces = (UUIDNode,)
