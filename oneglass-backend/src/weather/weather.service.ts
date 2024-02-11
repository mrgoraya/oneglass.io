import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  constructor(private httpService: HttpService) {}

  async getWeatherForecast(
    city: string,
    startDate: string,
    endDate: string,
  ): Promise<any> {
    const apiKey = 'FXCTPT3UX2G5L4Q5L3KVRC25B';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}`;

    return this.httpService
      .get(url, {
        params: {
          unitGroup: 'metric',
          include: 'days',
          key: apiKey,
          contentType: 'json',
        },
      })
      .pipe(map((response) => response.data));
  }
}
