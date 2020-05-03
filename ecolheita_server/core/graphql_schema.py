import graphene
from vendors.graphql_schema import Query as VendorQuery
from vendors.graphql_schema import Mutation as VendorMutation
from orders.graphql_schema import Query as OrderQuery
from orders.graphql_schema import Mutation as OrderMutation


class Query(VendorQuery, OrderQuery, graphene.ObjectType):
    node = graphene.relay.Node.Field()


class Mutation(VendorMutation, OrderMutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
