import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-administracion-productos',
  templateUrl: './administracion-productos.component.html',
  styleUrls: ['./administracion-productos.component.css']
})
export class AdministracionProductosComponent implements OnInit {

  productos: Product[];
  titulo = 'Administración de Productos';
  constructor(private service: ProductoService) { }

  ngOnInit(){

    this.service.listar().subscribe(productos =>this.productos = productos);
  }

  public eliminar(producto: Product): void{

    if(confirm(`¿Seguro que desea eliminar a ${producto.descripcion} ?`)){
      this.service.eliminar(producto.sku).subscribe(() => {
        this.productos = this.productos.filter(a => a !== producto);
        alert(`Alumno ${producto.descripcion} eliminando con éxito`);
      });
    }
  }

}
