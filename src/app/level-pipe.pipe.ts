import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'levelPipe'
})
export class LevelPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
