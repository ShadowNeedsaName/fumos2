from django.db import models

# Create your models here.
class Producto(models.Model):
    id = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=50, verbose_name="Titulo")
    descripcion = models.TextField(null=True, verbose_name="Descripcion")
    precio = models.IntegerField(verbose_name="Precio", default=0)

    def __str__(self):
        fila = "titulo " + self.titulo +" - "+ "Descripcion" + self.descripcion
        return fila
    
class Cliente(models.Model):
    id = models.AutoField(primary_key=True)
    Email = models.EmailField(null=False, verbose_name="Email")
    contraseña = models.TextField(null=False, verbose_name="contraseña")
    def __str__(self):
        filacliente = "Email " + self.Email +" - "+ "contraseña" + self.contraseña
        return filacliente

class Venta(models.Model):
    id = models.AutoField(primary_key=True)
    id_cliente = models.ForeignKey(Cliente,on_delete=models.CASCADE)
    fecha_pedido = models.DateField(auto_now_add=True,verbose_name="Fecha_Pedido")
    Total_Bruto = models.IntegerField(verbose_name="Bruto", default=0)
    Total_Neto = models.IntegerField(verbose_name="Neto", default=0)
    def __str__(self):
        filaVenta = "fecha_pedido " + self.fecha_pedido +" - "+ "Total_Bruto" + self.Total_Bruto +" - "+ "Total_Neto" + self.Total_Neto
        return filaVenta
    
class DVenta(models.Model):
    id = models.AutoField(primary_key=True)
    id_cliente = models.ForeignKey(Cliente,on_delete=models.CASCADE)
    id_productos = models.ForeignKey(Producto,on_delete=models.CASCADE)
    cantidad = models.IntegerField(verbose_name="Cantidad", default=0)
    subtotal = models.IntegerField(verbose_name="Subtotal", default=0)
    def __str__(self):
        filaDVenta = "cantidad " + self.cantidad +" - "+ "subtotal" + self.subtotal
        return filaDVenta