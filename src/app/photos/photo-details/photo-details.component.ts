import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
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
    private router: Router, private alertService: AlertService, private userService: UserService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.photoId
    this.photo$ = this.photoService.findById(this.id)
    this.photo$.subscribe(() => { }, error => {
      console.error(error);
      this.router.navigate(['not-found'])
    })
  }

  remove() {
    this.photoService.remove(this.id).subscribe(() => {
      this.alertService.sucess('Photo removed', true)
      this.router.navigate(['/user', this.userService.getUserName()])
    }, error => {
      console.error(error);
      this.alertService.warnning('Could not delete the photo!', true)
    })
  }

  like(photo: Photo) {
    this.photoService.like(photo.id).subscribe(liked => {
      if (liked) {
        this.photo$ = this.photoService.findById(photo.id)
      }
    })
  }

}
