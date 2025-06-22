import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Observable } from 'rxjs';
import { Account } from '../employee';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts:Account[]=[];

  constructor(private accountService:AccountService) { }

  ngOnInit() {
    this.getAllAccounts();
  }

  getAllAccounts():void {
    this.accountService.getAllAccounts().subscribe( data =>{
      this.accounts=data;
  },(error) => {
        console.error('Error fetching accounts:', error);
      });
   
    //return 
  }

deleteAccount(id: number): void {
  this.accountService.deleteAccount(id).subscribe(
    data => {
      this.getAllAccounts();
console.log(`Account with ID ${id} deleted`);
     // this.accounts = this.accounts.filter(account => account.id !== id);
      // this.getAllAccounts(); // Uncomment if you want to refresh the list
    },
    error => {
      console.error('Error deleting account:', error);
    }
  );
}

}
