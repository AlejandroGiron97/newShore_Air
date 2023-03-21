import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  showModal(message:string,title:string){
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,

    })
  }

}
