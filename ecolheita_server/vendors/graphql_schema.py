from graphene_django.filter import DjangoFilterConnectionField
from vendors import types


class Query:
    vendors = DjangoFilterConnectionField(types.VendorNode)
    offers = DjangoFilterConnectionField(types.OfferNode)


class Mutation:
    pass
