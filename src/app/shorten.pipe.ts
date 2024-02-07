import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";
@Pipe({
    name:'shorten'
})
export class shortenPipe implements PipeTransform{
transform(value: any,limit:number,anotherArg:number) {
    console.log(anotherArg);
    if(value.length>limit){
        return value.substr(0, limit)+'...';
    }
    return value;
}
}