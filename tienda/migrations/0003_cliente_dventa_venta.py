# Generated by Django 5.1.3 on 2024-11-23 21:40

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0002_producto_precio'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('Email', models.EmailField(max_length=254, verbose_name='Email')),
                ('contraseña', models.TextField(verbose_name='contraseña')),
            ],
        ),
        migrations.CreateModel(
            name='DVenta',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('cantidad', models.IntegerField(default=0, verbose_name='Cantidad')),
                ('subtotal', models.IntegerField(default=0, verbose_name='Subtotal')),
                ('id_cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tienda.cliente')),
                ('id_productos', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tienda.producto')),
            ],
        ),
        migrations.CreateModel(
            name='Venta',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('fecha_pedido', models.DateField(auto_now_add=True, verbose_name='Fecha_Pedido')),
                ('Total_Bruto', models.IntegerField(default=0, verbose_name='Bruto')),
                ('Total_Neto', models.IntegerField(default=0, verbose_name='Neto')),
                ('id_cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tienda.cliente')),
            ],
        ),
    ]
