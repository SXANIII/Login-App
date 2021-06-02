import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private service: ValidateService, private modalService: NgbModal) { }

  formdata: any;
  result:any;

  emailResponse: any;
  emailValue: string = '';

  emailMessage:any;

  closeResult = '';

  ngOnInit(): void {
  }

  public getEmailValid(inputEmail: string){
    this.service.ValidateEmail(inputEmail).subscribe(data=>{
      this.emailResponse = data;
    })
  }

  public ViewResponse(result:any){
      this.emailMessage = this.emailResponse.email;
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
