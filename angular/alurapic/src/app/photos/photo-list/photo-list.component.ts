import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  title = 'Alurapic';
  photos : Photo[] = [];
  filter : string = '';
  
  constructor(private activatedRoute: ActivatedRoute){}
  
  ngOnInit():void{
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

}
