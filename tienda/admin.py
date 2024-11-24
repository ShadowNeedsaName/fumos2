from django.contrib import admin
from .models import Producto
from .models import Cliente
from .models import DVenta
from .models import Venta
# Register your models here.
admin.site.register(Producto)
admin.site.register(Cliente)
admin.site.register(DVenta)
admin.site.register(Venta)
