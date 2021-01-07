import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllApiService {
  
  constructor(private httpClient: HttpClient) { }


  url = 'https://tameenjo.com/tamenjo/temenjo/api/'

  async getAbout() {

    return (<any>await this.httpClient.get(this.url+'about_app').toPromise());

  }

  async getPolicy() {

    return (<any>await this.httpClient.get(this.url+'policy_app').toPromise());

  }

  async register(data) {

    return (<any>await this.httpClient.post(this.url+'register_user', data).toPromise());

  }


  async login(data) {

    return (<any>await this.httpClient.post(this.url+'login_user', data).toPromise());

  }

  async step1InForm(data) {

    return (<any>await this.httpClient.post(this.url+'step1', data).toPromise());

  }

  async step2InForm(data) {

    return (<any>await this.httpClient.post(this.url+'step2', data).toPromise());

  }

  async step3InForm(data) {

    return (<any>await this.httpClient.post(this.url+'step3', data).toPromise());

  }


  async step4InForm(data) {

    return (<any>await this.httpClient.post(this.url+'step4', data).toPromise());

  }

  async getCompany(data) {

    return (<any>await this.httpClient.post(this.url+'get_company', data).toPromise());

  }


  async getCategory(data) {

    return (<any>await this.httpClient.post(this.url+'get_category', data).toPromise());

  }


  async contactUs(data) {

    return (<any>await this.httpClient.post(this.url+'get_contact_form', data).toPromise());

  }


  async uploadingAttachment(data) {

    return (<any>await this.httpClient.post(this.url+'uploading_attachments', data).toPromise());

  }



  async forgetPassword(data) {

    return (<any>await this.httpClient.post(this.url+'forget_password', data).toPromise());

  }

  async modelOfMarka(data) {

    return (<any>await this.httpClient.post(this.url+'get_model_of_marka', data).toPromise());

  }



  async userDocuments(data) {

    return (<any>await this.httpClient.post(this.url+'get_user_documents', data).toPromise());

  }




  async userDocumentById(data) {

    return (<any>await this.httpClient.post(this.url+'get_user_document_by_id', data).toPromise());

  }




}
