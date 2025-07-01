import { HttpClient } from '@angular/common/http';
import { appEnv } from '../../environment/app.environment';
import { map } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
class SummaryCardService {
  constructor(private http: HttpClient) {}

  getAmountOfUsers = () => {
    return this.http
    .get<string>(`${appEnv.baseUrl}ad-users/get-amount`).pipe(
      map((item)=> Number(item))
    )
    // let totalUsers = 0;
    // this.http
    //   .get<string>(`${appEnv.baseUrl}ad-users/get-amount`)
    //   .subscribe((buffer) => {
    //     totalUsers = Number(buffer);
    //   });

    // return totalUsers;
  };

  getAmountOfDisabledUsers = () => {
    return this.http
    .get<string>(`${appEnv.baseUrl}ad-users/get-disabled-users-amount`).pipe(
      map((item)=> Number(item))
    )
    // let disabledUsers = 0;
    // this.http
    //   .get<string>(`${appEnv.baseUrl}ad-users/get-disabled-users-amount`)
    //   .subscribe((buffer) => {
    //     disabledUsers = Number(buffer);
    //   });
    // return disabledUsers;
  };

  getAmountOfAactiveUsers = () => {
    return this.http
      .get<string>(`${appEnv.baseUrl}ad-users/get-active-users-amount`).pipe(
        map((item)=> Number(item))
      )
    // let activeUsers = 0;

    // this.http
    //   .get<string>(`${appEnv.baseUrl}ad-users/get-active-users-amount`)
    //   .subscribe((buffer) => {
    //     activeUsers = Number(buffer);
    //   });
    // return activeUsers;
  };

  getAmountOfInactiveUsers = () => {
    // let inactiveUsers = 0;
    return this.http
      .get<string>(`${appEnv.baseUrl}ad-users/get-inctive-users-amount`).pipe(
        map((item)=> Number(item))
      )
    //   .subscribe((buffer) => {
    //     inactiveUsers = Number(buffer);
    //   });
    // return inactiveUsers;
  };

  getAmountOfEnforcedUsers = () => {
    return this.http
      .get<string>(`${appEnv.baseUrl}ad-users/get-enforced-users-amount`).pipe(
        map((item)=> Number(item))
      )
    // let enforcedUsers = 0;
    // this.http
    //   .get<string>(`${appEnv.baseUrl}ad-users/get-enforced-users-amount`)
    //   .subscribe((buffer) => {
    //     enforcedUsers = Number(buffer);
    //   });
    // return enforcedUsers;
  };

  getAmountOfNotEnforcedUsers = () => {
    return this.http
      .get<string>(`${appEnv.baseUrl}ad-users/get-not-enforced-users-amount`).pipe(
        map((item)=> Number(item))
      )
  //   let notEnforcedUsers = 0;
  //   this.http
  //     .get<string>(`${appEnv.baseUrl}ad-users/get-not-enforced-users-amount`)
  //     .subscribe((buffer) => {
  //       notEnforcedUsers = Number(buffer);
  //     });
  //   return notEnforcedUsers;
  };
}

export default SummaryCardService;
