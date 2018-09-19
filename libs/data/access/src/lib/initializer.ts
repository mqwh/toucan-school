import { APP_INITIALIZER, Provider } from '@angular/core';
// import { Utilities } from '@microsoft/office-js-helpers';
// import { Store } from '@ngxs/store';
// import { UpdateRuntime } from '@toucan/runtime';

export const OFFICE_INITIALIZER: Provider = {
  provide: APP_INITIALIZER,
  useFactory: officeInitializerFactory,
  // deps: [Store],
  multi: true
};

export function officeInitializerFactory() {
  return async () => {
    await Office.onReady();
    console.warn('office-js initialized');
    // store.dispatch(
    //   new UpdateRuntime({
    //     addins: {
    //       host: `${Utilities.host}`.toLowerCase(),
    //       platform: `${Utilities.platform}`.toLowerCase()
    //     }
    //   })
    // );
  };
}
