import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private router:Router, private Route:ActivatedRoute) { }

  ngOnInit() {
    const id=+this.Route.snapshot.params['id'];
    this.server=this.serversService.getServer(id);
    this.Route.params
    .subscribe((params:Params)=>{
      this.server=this.serversService.getServer(+params['id'])})
  
  }
  onReload(){
  //this.router.navigate(['servers'],{relativeTo:this.Route})
  }

}
