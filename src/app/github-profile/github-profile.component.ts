import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.route.snapshot.paramMap.get(id) if you are 100% sure that the user MUST navigate away 
    // from the page and the page does not need to be reloaded
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      console.log('User id: ' + id);
      // in real world application we would use service.getProfile(id)
    });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: {
        page: 1, order: 'newest'
      }
    });
  }

}
