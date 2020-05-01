# Generated by Django 3.0.5 on 2020-05-01 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendors', '0001_initial'),
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='ecolheitauser',
            name='allow_push_notifications',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='ecolheitauser',
            name='favorite_vendors',
            field=models.ManyToManyField(related_name='favorite_of', to='vendors.Vendor'),
        ),
        migrations.AddField(
            model_name='ecolheitauser',
            name='region',
            field=models.CharField(blank=True, choices=[('Acre', 'Acre'), ('Alagoas', 'Alagoas'), ('Amapá', 'Amapá'), ('Amazonas', 'Amazonas'), ('Bahia', 'Bahia'), ('Ceará', 'Ceará'), ('Distrito Federal', 'Distrito Federal'), ('Espírito Santo', 'Espírito Santo'), ('Goiás', 'Goiás'), ('Maranhão', 'Maranhão'), ('Mato Grosso', 'Mato Grosso'), ('Mato Grosso do Sul', 'Mato Grosso do Sul'), ('Minas Gerais', 'Minas Gerais'), ('Pará', 'Pará'), ('Paraíba', 'Paraíba'), ('Paraná', 'Paraná'), ('Pernambuco', 'Pernambuco'), ('Piauí', 'Piauí'), ('Rio de Janeiro', 'Rio de Janeiro'), ('Rio Grande do Sul', 'Rio Grande do Sul'), ('Rondônia', 'Rondônia'), ('Roraima', 'Roraima'), ('Santa Catarina', 'Santa Catarina'), ('São Paulo', 'São Paulo'), ('Sergipe', 'Sergipe'), ('Tocantins', 'Tocantins')], max_length=30),
        ),
    ]