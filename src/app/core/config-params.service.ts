import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { ConfigParams } from '../shared/models/config-params';

@Injectable({
  providedIn: 'root',
})
export class ConfigParamsService {
  constructor() {}

  configurationParams(config: ConfigParams): HttpParams {
    let httpparams = new HttpParams();

    if (config.search) {
      httpparams = httpparams.set('q', config.search);
    }

    // Default JSON Server
    httpparams = httpparams.set('_sort', 'id');
    httpparams = httpparams.set('_order', 'desc');

    return httpparams;
  }
}
