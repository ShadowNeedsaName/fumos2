from django.shortcuts import render
from .models import Producto

# Create your views here.
def tienda(request):

    productos = Producto.objects.all()
    print(productos)
    return render(request, 'tienda/index.html', {"productos":productos})