import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../model/product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  

  form: FormGroup;
  id: number;
  active:any=['active','inactive'];


  constructor(public service:ProductServiceService,public router:Router,public formBuilder: FormBuilder,private route: ActivatedRoute,) { }
  
  
  

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      active:[''],
      expirationDate:[],
  
    })
    this.id = this.route.snapshot.params.id;

    this.service.get(this.id).subscribe(
      product => this.form.patchValue(product)
    ) 
    
  }
  submited(): void {
    this.service.update(this.id, this.form.getRawValue()).subscribe(
      () => {
        this.router.navigate(['/product'])
      }
    )
  }
 

}
