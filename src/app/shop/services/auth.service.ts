import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";



@Injectable({
    providedIn:'root'
})

export class AuthService{


    constructor(
        private httpService: HttpClient
    ){}




    hideSubject =new Subject<any>();
    openLoginService =new  Subject<any>()

    cartSubject=new  Subject<any>()
}