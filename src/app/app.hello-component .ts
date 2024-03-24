import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './app.hello-component.html',
  styleUrls: ['./app.component.css']
})
export class AppHelloComponent implements OnInit {
  helloMessage: string="";

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
    this.fetchHelloMessage();
  }

  fetchHelloMessage(): void {
    this.helloService.getHelloMessage().subscribe(
      (message: string) => {
        this.helloMessage = message;
      },
      (error: any) => { // Specify the type of 'error' parameter
        console.error('Error occurred while fetching hello message:', error);
        this.helloMessage = 'Failed to fetch hello message';
      }
    );
  }
  
}
