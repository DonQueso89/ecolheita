from graphene_django import DjangoObjectType
from orders.models import Order
from core.types import UUIDNode


class OrderNode(DjangoObjectType):
    class Meta:
        model = Order
        interfaces = (UUIDNode,)
