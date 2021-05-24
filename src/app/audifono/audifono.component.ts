import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Audifono } from '../model/audifono.model';
import { AudifonoService } from '../services/audifono.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-audifono',
  templateUrl: './audifono.component.html',
  styleUrls: ['./audifono.component.css']
})
export class AudifonoComponent implements OnInit {
  formAudifono: FormGroup= this. formBuilder.group({});
  disableButton=  false;
  id: string = '';
  title = 'crear elemento';

  constructor(private formBuilder: FormBuilder,  
              private dataService: DataService, 
              private router: Router, 
              private audifono: AudifonoService,
              private activedRoute: ActivatedRoute) { 

    this.formAudifono = this.formBuilder.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      color: ['', Validators.required]
    });
    this.dataService.isLoading.subscribe(isLoading =>{
      this.disableButton= isLoading;
    });

    this.activedRoute.params.subscribe(parameters => {
      if(parameters.id){
        console.log(parameters);
        this.id = parameters.id;
        this.title = 'actualizar elemento';

        this.dataService.isLoading.next(true);
        this.audifono.getSingleAudifono(parameters.id).subscribe(item =>{
          this.formAudifono.patchValue(item);
          this.dataService.isLoading.next(false);
        });
      }
    });
  }

  ngOnInit(): void {
  }

  save(): void{
    const data = { 
      marca: this.formAudifono.get('marca')?.value,
      modelo: this.formAudifono.get('modelo')?.value,
      color: this.formAudifono.get('color')?.value,
     } as Audifono


    

     console.log(data);

     this.dataService.isLoading.next(true);
     
     this.audifono.saveAudifonos(data, this.id).subscribe(() => {
      this.dataService.isLoading.next(false);
      this.router.navigate(['home']);
     }, () => {
      this.dataService.isLoading.next(false);
      //  alert('ocurrio un error')
      this.dataService.message.next('ocurrio un error');
     });
  }
  
}
