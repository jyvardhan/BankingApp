import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../employee';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

   id:number;
   account:Account=new Account();

  constructor(private accountService:AccountService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params["id"];

   
    this.accountService.getAccountById(this.id).subscribe(
      data => this.account = data,
      error => console.error(error)
    );
  }

  onSubmit(): void {
    this.accountService.updateAccount(this.id, this.account).subscribe(
      data => this.router.navigate(['accounts']),
      error => console.error(error)
    );
  }

}
