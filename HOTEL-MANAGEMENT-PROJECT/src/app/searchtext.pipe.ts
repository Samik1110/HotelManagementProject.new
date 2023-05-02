import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchtext'
})
export class SearchtextPipe implements PipeTransform {

  transform(arrayOfObject: any, inputSearchTextValue: any): any {

    console.log('value', arrayOfObject);
    console.log('args', inputSearchTextValue);

    if (!inputSearchTextValue) {
      return arrayOfObject;
    }

    inputSearchTextValue = inputSearchTextValue.toLowerCase();
    return arrayOfObject.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(inputSearchTextValue)
    })
  }

}
