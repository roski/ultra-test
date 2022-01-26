import { TestBed } from '@angular/core/testing';
import { ApiUtilsService } from './api-utils.service';
import { HttpParams } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';

describe('ApiUtilsService', () => {
  let service: ApiUtilsService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
  );

  beforeEach(() => {
    service = TestBed.inject(ApiUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return base url', () => {
    expect(service.getGiphyBackendUrl('/test')).toEqual(
      `${environment.giphyApiUrl}/test`
    );
  });

  it('should return params object', () => {
    let params = new HttpParams();
    params = params.append('name', 'test');
    expect(service.makeOptions({ params }).params).toBeTruthy();
  });
});
