import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Audifono } from '../model/audifono.model';
import { AudifonoService } from '../services/audifono.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    // Marca, Modelo, Color
    dataSource = new MatTableDataSource<Audifono>();
    columns = ['marca', 'modelo', 'color', 'actions', 'delete'];

  constructor( private dataService: DataService, private audifono: AudifonoService, private router: Router) {
      this.loadData();
   }

  ngOnInit(): void {
  }

  loadData(): void {

    this.dataService.isLoading.next(true);
    this.audifono.getAudifonos().subscribe(audifonos =>{  
      this.dataSource.data = audifonos;
      this.dataService.isLoading.next(false);
    }, ()=>{
      this.dataService.isLoading.next(false);
      this.dataService.message.next('no se pudieron cargar los elementos');
      // alert('no se pudieron cargar los elementos');
    });
  }

  edit(item: Audifono): void{
    console.log(item);
    this.router.navigate(['audifono', item._id])
  }

  newItem():void {
    this.router.navigate(['audifono']);
  }

  deleteItem(id: string):void {
    this.dataService.isLoading.next(true);

    this.audifono.deleteAudifonos(id).subscribe(deleteAudifono =>{
      this.dataService.message.next('Audifono Borrado');

      this.loadData();
      this.dataService.isLoading.next(false);
    }, () =>{
      this.dataService.isLoading.next(false);
      this.dataService.message.next('no se pudo borrar el Audifono');
    });
  }

}
