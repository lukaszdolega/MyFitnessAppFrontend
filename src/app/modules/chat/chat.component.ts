import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chatForm!: FormGroup;
  question?: string;
  response?: string;
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.chatForm = this.formBuilder.group({
      question: [''],
      response: ['']
    });
  }

  submit() {
    this.question = this.chatForm.value.question;
    this.response = '';
    this.isLoading = true; 
    this.chatService.saveNewChat({ question: this.question }).subscribe(response => {
      this.response = response.response;
      this.isLoading = false; 
      this.chatForm.reset();
    });
  }

  getLoaderVisibility(): boolean {
    return this.isLoading && !this.response;
  }

}