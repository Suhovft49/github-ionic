import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GitHubService } from '../../services/github.services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubService]
})
export class HomePage {
  public foundRepos;
  public username;

  constructor(public navCtrl: NavController, private github:GitHubService) {}

  getRepos() {
    this.github.getRepos(this.username).subscribe(
      data => this.foundRepos = data.json(), 
      err => console.error(err), 
      () => console.info('getRepos completed'));
  }

}
