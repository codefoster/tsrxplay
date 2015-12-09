import * as Rx from "rxjs/Rx";
let nn = Rx.Observable.of(1,2,3);

nn.subscribe(n => console.log(n));