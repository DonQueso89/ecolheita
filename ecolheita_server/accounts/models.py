import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _


class EcolheitaUser(AbstractUser):
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    STATE_ACRE = "Acre"
    STATE_ALAGOAS = "Alagoas"
    STATE_AMAPÁ = "Amapá"
    STATE_AMAZONAS = "Amazonas"
    STATE_BAHIA = "Bahia"
    STATE_CEARÁ = "Ceará"
    STATE_DISTRITO_FEDERAL = "Distrito Federal"
    STATE_ESPÍRITO_SANTO = "Espírito Santo"
    STATE_GOIÁS = "Goiás"
    STATE_MARANHÃO = "Maranhão"
    STATE_MATO_GROSSO = "Mato Grosso"
    STATE_MATO_GROSSO_DO_SUL = "Mato Grosso do Sul"
    STATE_MINAS_GERAIS = "Minas Gerais"
    STATE_PARÁ = "Pará"
    STATE_PARAÍBA = "Paraíba"
    STATE_PARANÁ = "Paraná"
    STATE_PERNAMBUCO = "Pernambuco"
    STATE_PIAUÍ = "Piauí"
    STATE_RIO_DE_JANEIRO = "Rio de Janeiro"
    STATE_RIO_GRANDE_DO_SUL = "Rio Grande do Sul"
    STATE_RONDÔNIA = "Rondônia"
    STATE_RORAIMA = "Roraima"
    STATE_SANTA_CATARINA = "Santa Catarina"
    STATE_SÃO_PAULO = "São Paulo"
    STATE_SERGIPE = "Sergipe"
    STATE_TOCANTINS = "Tocantins"

    STATE_CHOICES = [
        (STATE_ACRE, "Acre"),
        (STATE_ALAGOAS, "Alagoas"),
        (STATE_AMAPÁ, "Amapá"),
        (STATE_AMAZONAS, "Amazonas"),
        (STATE_BAHIA, "Bahia",),
        (STATE_CEARÁ, "Ceará"),
        (STATE_DISTRITO_FEDERAL, "Distrito Federal"),
        (STATE_ESPÍRITO_SANTO, "Espírito Santo"),
        (STATE_GOIÁS, "Goiás"),
        (STATE_MARANHÃO, "Maranhão"),
        (STATE_MATO_GROSSO, "Mato Grosso"),
        (STATE_MATO_GROSSO_DO_SUL, "Mato Grosso do Sul"),
        (STATE_MINAS_GERAIS, "Minas Gerais"),
        (STATE_PARÁ, "Pará"),
        (STATE_PARAÍBA, "Paraíba"),
        (STATE_PARANÁ, "Paraná"),
        (STATE_PERNAMBUCO, "Pernambuco"),
        (STATE_PIAUÍ, "Piauí"),
        (STATE_RIO_DE_JANEIRO, "Rio de Janeiro"),
        (STATE_RIO_GRANDE_DO_SUL, "Rio Grande do Sul"),
        (STATE_RONDÔNIA, "Rondônia"),
        (STATE_RORAIMA, "Roraima"),
        (STATE_SANTA_CATARINA, "Santa Catarina"),
        (STATE_SÃO_PAULO, "São Paulo"),
        (STATE_SERGIPE, "Sergipe"),
        (STATE_TOCANTINS, "Tocantins"),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(
        max_length=150,
        help_text=_(
            "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."
        ),
    )
    email = models.EmailField(_("email address"), blank=True, unique=True)
    phone_number = models.CharField(max_length=64, blank=True)
    favorite_vendors = models.ManyToManyField(
        "vendors.Vendor", related_name="favorite_of"
    )
    allow_push_notifications = models.BooleanField(default=False)
    region = models.CharField(max_length=30, choices=STATE_CHOICES, blank=True)

    def __str__(self):
        return f"{self.email}"
