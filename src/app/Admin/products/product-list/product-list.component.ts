import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { BsModalRef, BsModalService } from 'ngx-modal-bootstrap';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  modalRef?: BsModalRef;
  Products: any;
  TotalProd: any;
  
  constructor(private modalService: BsModalService,private fb:FormBuilder , public service:AdminService) { }
  ngOnInit(): void {
    
    this.getprodData();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  productForm = this.fb.group({
    'name': new FormControl('', Validators.required),
    'mrp': new FormControl('', Validators.required),
    'sellprice': new FormControl('', Validators.required),
    'sstatus': new FormControl('', Validators.required),
    'desc': new FormControl('', Validators.required),
    'discount': new FormControl('', Validators.required),
    'category': new FormControl('', Validators.required),
    'file': new FormControl('', Validators.required),
  })

 
  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
         this.productForm.patchValue({
        file: file
        });
    }
  }

  

  onProdAdd(){
    console.log(this.productForm.value)
    if(this.productForm.valid){
      console.log(this.productForm.value)

      this.modalRef?.hide();

    this.service.postproData(this.productForm.value).subscribe((res) => {

    });}
    else{
      alert('All fields are required');
    }
  }

  getprodData(){
    this.service.getprodData().subscribe((res)=>{

    this.Products = res; 
    this.TotalProd = this.Products.length
      });
    }


    
 deleteprodbyId(ProdId:any){
  this.service.deleteprodbyId(ProdId).subscribe((res)=>{
  this.getprodData();
    });
  }
  

}
