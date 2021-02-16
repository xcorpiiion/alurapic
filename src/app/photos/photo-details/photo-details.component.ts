import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>
  id: number

  constructor(private route: ActivatedRoute, private photoService: PhotoService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.photoId
    this.photo$ = this.photoService.findById(this.id)
  }

  remove() {
    this.photoService.remove(this.id).subscribe(() => {
      this.router.navigate([''])
    })
  }

}
