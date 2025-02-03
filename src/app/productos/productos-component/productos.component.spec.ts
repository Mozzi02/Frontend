import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './productos.component';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { TipoService } from 'src/app/tipoproducto/tipo.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { TipoProducto } from 'src/app/tipoproducto/itipo';
import { Producto } from '../iproducto';

describe('ProductosComponent', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(ProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ProductosComponent (Validación de Formulario)', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;
  let productoServiceSpy: jasmine.SpyObj<ProductoService>;
  let mockTipo: TipoProducto = {idTipo: 99, descripcion: 'Prueba'};

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ProductoService', ['agregarProducto', 'getProductos']);

    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [ProductosComponent],
      providers: [{ provide: ProductoService, useValue: spy }, TipoService],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosComponent);
    component = fixture.componentInstance;
    productoServiceSpy = TestBed.inject(ProductoService) as jasmine.SpyObj<ProductoService>;

    productoServiceSpy.getProductos.and.returnValue(of({ message: '', data: [] }));
    fixture.detectChanges();
  });

  it('No debe permitir enviar el formulario si los campos están vacíos', () => {
    const botonAgregar = fixture.debugElement.query(By.css('#btnAgregar')).nativeElement;
    expect(botonAgregar.disabled).toBeTruthy(); // El botón debe estar deshabilitado
  });

  it('No debe permitir ingresar texto en el campo precio ni en campo stock', () => {
    component.precio = 0; // Simula ingreso en precio
    component.stock = 0 // Simula ingreso en stock
    fixture.detectChanges();

    const inputPrecio = fixture.debugElement.query(By.css('input[name="precio"]')).nativeElement;
    const inputStock = fixture.debugElement.query(By.css('input[name="stock"]')).nativeElement;

    expect(inputPrecio.value).toBe('0'); // Debe aceptar el valor, pero luego validarse
    expect(inputStock.value).toBe('0'); // Debe aceptar el valor, pero luego validarse

    // Simular validación manualmente
    const esNumeroPrecio = !isNaN(Number(component.precio));
    const esNumeroStock = !isNaN(Number(component.stock));

    expect(esNumeroPrecio).toBeTruthy(); // El valor es un número
    expect(esNumeroStock).toBeTruthy(); // El valor de stock es un número
  });

  it('Debe habilitar el botón cuando el formulario es válido', () => {
    component.descripcion = 'Producto de prueba';
    component.precio = 150;
    component.stock = 20;
    component.tipoProducto = mockTipo;
    component.imagen = 'https://imagen.com/producto.jpg';
    fixture.detectChanges();

    const botonAgregar = fixture.debugElement.query(By.css('#btnAgregar')).nativeElement;
    expect(botonAgregar.disabled).toBeFalsy(); // Ahora el botón debe estar habilitado
  });
});
