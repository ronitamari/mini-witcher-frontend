import { HttpClient } from '@angular/common/http';
import { types, typesAmount } from '../models/resUser.model';
import { appEnv } from '../../environment/app.environment';
import { map } from 'rxjs';
import { CHART_COLORS } from '../extensions/utils';
import { Chart } from 'chart.js';

class UserDistributionService {
  constructor(private http: HttpClient) {}

  getAllType = () => {

    return this.http
      .get<types[]>(`${appEnv.baseUrl}users-type/get-all`)
      .pipe(
        map( AllTypesRes => AllTypesRes)
      );
  };

  getDistribution = (alltypes: string[], DATA_COUNT: number) => {
    this.http
      .get<typesAmount[]>(`${appEnv.baseUrl}ad-users/get-users-amount-by-type/`)
      .pipe(
        map((res) => {
          const amountOfAllTypes = res.map((obj) => Number(obj.count));
          const data = {
            labels: alltypes,
            datasets: [
              {
                label: 'amount in AD',
                data: amountOfAllTypes,
                backgroundColor: Object.values(CHART_COLORS),
              },
            ],
            hoverOffset: DATA_COUNT,
          };
    
          new Chart('PieChart', {
            type: 'pie',
            data: data,
            options: {
              responsive: true,
              plugins: {
                legend: {
                  position: 'left',
                },
                title: {
                  display: true,
                },
              },
            },
          });
        })
      )
      .subscribe((amountOfAllTypes) => {
      });
  };
}

export default UserDistributionService;
