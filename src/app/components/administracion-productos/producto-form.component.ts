import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  titulo = 'Agregar Producto';
  producto: Product = new Product();
  error: any;
  constructor(private service: ProductoService,
              private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const sku: number  = +params.get('sku');
      if(sku){
        this.service.ver(sku).subscribe(producto => this.producto = producto)
      }
    })
  }

  public crear():void{
    this.service.crear(this.producto).subscribe( producto =>{
      console.log(producto);
      alert(`Producto ${producto.descripcion} creado con exito`);
        this.router.navigate(['/productos']);
    }, err => {
      if(err.status === 500){
        this.error  = err.error;
        console.log(this.error)
      }
    });
  }


 public editar():void{
  this.service.editar(this.producto).subscribe( producto =>{
    console.log(producto);
    alert(`Producto ${producto.descripcion} actualizado con exito`);
      this.router.navigate(['/productos']);
  }, err => {
    if(err.status === 500){
      this.error  = err.error;
      console.log(this.error)
    }
  });
 }
}
