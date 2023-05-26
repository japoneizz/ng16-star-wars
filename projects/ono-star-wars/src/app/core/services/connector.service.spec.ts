import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ConnectorService } from './connector.service';

describe('ConnectorService', () => {
  let service: ConnectorService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConnectorService],
    });

    service = TestBed.inject(ConnectorService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('initialize', () => {
    it('can load instance', () => {
      expect(service).toBeTruthy();
    });
  });

  // describe('POST', () => {
  //   it('should post', () => {
  //     const req: IRequest = {
  //       endPoint: 'endpoint',
  //       body: { item: '' },
  //     };

  //     const url = '/api/' + req.endPoint;
  //     service.post(req).subscribe();
  //     expect(httpMock.post).toHaveBeenCalledWith(url, req.body, {});
  //   });
  // });

  // describe('GET', () => {
  //   it('should get', () => {
  //     const req: IRequest = {
  //       endPoint: 'endpoint',
  //       checkToken: false,
  //       queryString: { item: '' },
  //     };

  //     const url = configServiceMock.settings.baseUrl + '/api/' + req.endPoint;
  //     service.get(req).subscribe();
  //     expect(httpMock.get).toHaveBeenCalledWith(url, { params: { item: '' } });
  //   });
  // });

  // describe('PUT', () => {
  //   it('should put', () => {
  //     const req: IRequest = {
  //       endPoint: 'endpoint',
  //       checkToken: false,
  //       body: { item: '' },
  //     };

  //     const url = configServiceMock.settings.baseUrl + '/api/' + req.endPoint;
  //     service.put(req).subscribe();
  //     expect(httpMock.put).toHaveBeenCalledWith(url, req.body, {});
  //   });
  // });

  // describe('DELETE', () => {
  //   it('should delete', () => {
  //     const req: IRequest = {
  //       endPoint: 'endpoint',
  //       checkToken: false,
  //       queryString: { item: '' },
  //     };

  //     const url = configServiceMock.settings.baseUrl + '/api/' + req.endPoint;
  //     service.delete(req).subscribe();
  //     expect(httpMock.delete).toHaveBeenCalledWith(url, {
  //       params: { item: '' },
  //     });
  //   });
  // });
});
