import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {
    transform(items: any[], criteria: string): any {
        return criteria === 'all' ? items : items.filter(item => item.category === criteria);
    }
}