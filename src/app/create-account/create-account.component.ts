import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account:Account=new Account();

  constructor(private accountService:AccountService, private router:Router ) { }

  ngOnInit() {
  }

  saveAccount(){
      this.accountService.createAccount(this.account).subscribe(
        data=>{
           console.log('Account created successfully', data);
        this.goToAccountList();
        },error => console.error(error)
    );
  }

  goToAccountList() {
    this.router.navigate(['/accounts']);
  }

   onSubmit() {
    console.log(this.account);
    this.saveAccount();
  }

}
