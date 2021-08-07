import { Component, AfterViewInit,ViewChild,OnInit  } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import {ProductServiceService} from '../product-service.service'
import {MatSort} from '@angular/material/sort'
import { getLocaleDateFormat } from '@angular/common';
import { Product } from '../model/product';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit{
  

  form: FormGroup;
  id: number;
  name='';
  
  active:any=["active ","Inactive"];
  expirationDate='';

  onSelectedChange(value: number) {
    // do something else with the value
    console.log(value);

    
  }
  show(){
    $(".template2").show();
    $(".template1").hide();
  }
  selectdevice(){
    $(".template2").hide();
    $(".template1").show();
  }
  editbtnhid(){
    $(".hidethis").hide()
  }
  
  result:Product[]=[];
  
  displayedColumns: string[] = [ 'Id','Name', 'Expiration Date', 'Active'];
  dataSource =new  MatTableDataSource<Product>(this.result);
   //dataSource = new MatTableDataSource<any>(this.result);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  title:string="Products"

  
  constructor(public service:ProductServiceService, private router:Router,){}
  ngOnInit() {
    
  this.service.all().subscribe((posRes)=>{
        this.result=posRes;
       this.dataSource=new MatTableDataSource<Product>(this.result);
      this.dataSource.paginator=this.paginator;
      
      this.dataSource.sort=this.sort
  
      },(errRes:HttpErrorResponse)=>{
        console.log(errRes);
        
      })
      }
      //add data to mongodb
      submit(): void {
     
        const data = {
          name: this.name,
          active: this.active,
          expirationDate:this.expirationDate

        }
        
        this.service.create(data).subscribe(
          () => {
            this.router.navigate(['/admin/products'])
          }
        )
      }

      //edit and update data to mongo db
      
//delete data from mongodb
productDel(id: number): void {
  
  if(window.confirm('Are you sure you want to delete this product ?')){
    this.service.delete(id).subscribe(status => {
        this.getProducts();
    });
}
}
getProducts() {
  this.service.all().subscribe(result => {
      this.result = result;
  });
}
}   
  


