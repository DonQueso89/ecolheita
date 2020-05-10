from graphene_django import DjangoObjectType
from graphene_django.fields import DjangoConnectionField
from vendors.models import Vendor, Offer, Organization
from core.types import UUIDNode


class OfferNode(DjangoObjectType):
    class Meta:
        model = Offer
        interfaces = (UUIDNode,)
        fields = ("name", "vendor", "num_left", "collect_until", "collect_from", "unit_price")
        filter_fields = ("name",)
    
    @staticmethod
    def resolve_unit_price(root, info):
        return root.unit_price.amount

class VendorNode(DjangoObjectType):
    offers = DjangoConnectionField(OfferNode)

    class Meta:
        model = Vendor
        interfaces = (UUIDNode,)
        filter_fields = ("name",)
        fields = ("name", "organization", "open_from", "open_until", "website", "logo", "default_backdrop")

    @staticmethod
    def resolve_offers(root, info):
        return root.offer_set.all()



class OrganizationNode(DjangoObjectType):
    class Meta:
        model = Organization
        interfaces = (UUIDNode,)
