import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieServiceService]
})
export class MovieListComponent implements OnInit {
  collection: any = []
  constructor(private mov: MovieServiceService, private router: ActivatedRoute) { }
  id: any
  data: any
  ngOnInit(): void {
    this.mov.getData().subscribe((data: any) => {
      console.log(data)
      this.collection = data
    },
      error => {
        console.log(error)
      }
    )
  }
  Upvote(i: any) {
    console.log(i)
    this.mov.currentMovi(this.data, i).subscribe((data) => {
      console.log(data)
    }),
      setTimeout(function () {
        location.reload();
      }, 500)
  }
}
