import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../movie-service.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

  constructor(private router:ActivatedRoute,private mov:MovieServiceService) { }

  ngOnInit(): void {}

}
