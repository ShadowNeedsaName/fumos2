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