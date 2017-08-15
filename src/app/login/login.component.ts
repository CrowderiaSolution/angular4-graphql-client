import { Component, OnInit } from '@angular/core';

// Anytime this configuration can be chnaged, demonstration perpose only
import { Apollo } from 'apollo-angular';

// Load queries
import { CurrentUserForProfile } from '../../graphql/query';

// Load interfaces
import { QueryResponse } from '../../graphql/interfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean;
  currentUser: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<QueryResponse>({
      query: CurrentUserForProfile
    })._subscribe(({data}) => {
      this.loading = data.loading;
      this.currentUser = data.currentUser;
    });
  }

}
