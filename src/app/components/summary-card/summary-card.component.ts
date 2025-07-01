import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClient } from '@angular/common/http';
import { appEnv } from '../../../environment/app.environment';
import SummaryCardService from '../../services/summary-card.service';
import { combineLatest, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-card',
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    CommonModule,
  ],
  providers:[SummaryCardService],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss',
})
export class SummaryCardComponent {
  totalUsers$!: Observable<Number>;
  disabledUsers$!: Observable<Number>;
  activeUsers$!: Observable<Number>;
  inactiveUsers$!: Observable<Number>;
  enforcedUsers$!:  Observable<Number>;
  notEnforcedUsers$!: Observable<Number>;

  totalUsersPresent: number = 0;
  disabledUsersPresent: number = 0;
  activeUsersPresent: number = 0;
  inactiveUsersPresent: number = 0;
  enforcedUsersPresent: number = 0;
  notEnforcedUsersPresent: number = 0;

  constructor(private summaryService: SummaryCardService) {}

  async ngOnInit() {
    this.totalUsers$ = this.summaryService.getAmountOfUsers();
    this.totalUsersPresent = 100 / Number(this.totalUsers$);
    this.disabledUsers$ = this.summaryService.getAmountOfDisabledUsers();
    this.disabledUsersPresent =
      Number(this.disabledUsers$) * this.totalUsersPresent;
    this.activeUsers$ = this.summaryService.getAmountOfAactiveUsers();
    this.activeUsersPresent = Number(this.activeUsers$) * this.totalUsersPresent;
    this.inactiveUsers$ = this.summaryService.getAmountOfInactiveUsers();
    // console.log(`inactive: ${this.inactiveUsers$}`)
    this.inactiveUsersPresent = Number(this.inactiveUsers$) * this.totalUsersPresent;
    this.enforcedUsers$ = this.summaryService.getAmountOfEnforcedUsers();
    this.enforcedUsersPresent =
      Number(this.enforcedUsers$) * this.totalUsersPresent;
    this.notEnforcedUsers$ = this.summaryService.getAmountOfNotEnforcedUsers();
    this.notEnforcedUsersPresent =
      Number(this.notEnforcedUsers$) * this.totalUsersPresent;
  }
}
