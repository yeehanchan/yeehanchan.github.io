import {AppComponent} from './ts/app.component';
import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {BrowserXhr, HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';
import {BaseRequestOptions, RequestOptions} from 'angular2/http';
import {Headers} from 'angular2/http';

@Injectable()
export class CORSBrowserXHr extends BrowserXhr {
	build(): any {
		var x: any = super.build();
		x['withCredentials'] = true;
		return x;
	}
}

class MyBaseRequestOptions extends BaseRequestOptions {
	headers: Headers = new Headers({
		'X-Requested-With': 'XMLHttpRequest'
	});
	withCredentials: boolean = true;
}

// Add all operators to Observable
import 'rxjs/Rx';
bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide(BrowserXhr, { useClass: CORSBrowserXHr }),
	provide(RequestOptions, {useClass: MyBaseRequestOptions})
]);