/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, Inject, OnInit } from '@angular/core';
import { StateParams } from '@uirouter/core';
import { EMPTY, interval, Subject, timer } from 'rxjs';
import { catchError, filter, switchMap, take, takeUntil } from 'rxjs/operators';

import { DebugRequest } from './models/DebugRequest';
import { DebugResponse } from './models/DebugResponse';
import { PolicyStudioDebugService } from './policy-studio-debug.service';

import { SnackBarService } from '../../../../services-ngx/snack-bar.service';
import { UIRouterStateParams } from '../../../../ajs-upgraded-providers';

@Component({
  selector: 'policy-studio-debug',
  template: require('./policy-studio-debug.component.html'),
  styles: [require('./policy-studio-debug.component.scss')],
})
export class PolicyStudioDebugComponent implements OnInit {
  public debugResponse: DebugResponse;

  private apiId: string;
  private unsubscribe$ = new Subject<boolean>();

  constructor(
    @Inject(UIRouterStateParams) private readonly ajsStateParams: StateParams,
    private readonly policyStudioDebugService: PolicyStudioDebugService,
    private readonly snackBarService: SnackBarService,
  ) {}

  ngOnInit() {
    this.apiId = this.ajsStateParams.apiId;
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  onRequestSubmitted(debugRequest: DebugRequest) {
    this.debugResponse = {
      isLoading: true,
      request: debugRequest,
    };

    const maxPollingTime$ = timer(10000);
    this.policyStudioDebugService
      .sendDebugEvent(this.apiId, debugRequest)
      .pipe(
        // Poll each 1s to find success event. Stops after 10 seconds
        switchMap((debugEventId) =>
          interval(1000).pipe(switchMap(() => this.policyStudioDebugService.getDebugEvent(this.apiId, debugEventId))),
        ),
        takeUntil(maxPollingTime$),
        takeUntil(this.unsubscribe$),
        filter((event) => event.status === 'SUCCESS'),
        take(1),
        catchError(() => {
          this.snackBarService.error('Unable to try the request, please try again');
          this.debugResponse = {
            isLoading: false,
            request: debugRequest,
          };
          return EMPTY;
        }),
      )
      .subscribe((event) => {
        this.debugResponse = {
          isLoading: false,
          response: JSON.parse(event.payload).response,
          request: debugRequest,
        };
      });
  }
}