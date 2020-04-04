import pytest
from django.contrib.auth import get_user_model


@pytest.fixture(scope="function")
@pytest.mark.django_db
def create_user():
    return get_user_model().objects.create(username="test", password="test")
