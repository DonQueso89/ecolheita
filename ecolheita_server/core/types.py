from graphene import relay


class UUIDNode(relay.Node):
    class Meta:
        name = "UUIDNode"

    @staticmethod
    def to_global_id(type, id):
        return str(id)

    @staticmethod
    def get_node_from_global_id(info, global_id: str, only_type=None):
        raise NotImplementedError()
