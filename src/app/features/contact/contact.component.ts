import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public isMessageSent = false;
  public body: any;
  public isLoading = false;

  constructor(private messageService: MessageService, private http: HttpClient) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      message: new FormControl(null, Validators.required),
      subject: new FormControl(null, Validators.required),
    });
  }

  public onSubmit(): void {
    if (this.contactForm.valid) {
      this.body = JSON.stringify({
        fromName: this.contactForm.controls['name'].value,
        fromMail: this.contactForm.controls['email'].value,
        content: this.contactForm.controls['message'].value,
        subject: this.contactForm.controls['subject'].value,
        fromPhone: 'none',
      });
      this.isLoading = true;
      this.sendMail();
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warn',
        detail: 'Please fill the required fields.',
      });
    }
  }

  private sendMail() {
    const url = 'https://contact-mail.appit-online.de/v1/mail';

    this.http
      .post(url, this.body, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': '2d9fb583-0731-4c92-a01e-ad2a8f4fe4c5',
        },
      })
      .subscribe(() => {
        this.contactForm.reset();
        this.isMessageSent = true;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Message sent.',
        });
      });
    this.isLoading = false;
  }
}
