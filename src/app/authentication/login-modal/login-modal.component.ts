import { Component, OnInit } from '@angular/core';
import {SuiModal, ComponentModalConfig, ModalSize, SuiModalService} from 'ng2-semantic-ui';


interface IConfirmModalContext {
  title: string;
  question: string;
}

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  constructor(public modal: SuiModal<IConfirmModalContext, void, void>) { }

  ngOnInit() { }

}

export class ConfirmModal extends ComponentModalConfig<IConfirmModalContext, void, void> {

  constructor(title: string, question: string, size = ModalSize.Small) {

    super(LoginModalComponent, { title, question });

    this.isClosable = false;
    this.transitionDuration = 200;
    this.size = size;
  }
}
