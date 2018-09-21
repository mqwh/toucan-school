import { Injectable } from '@angular/core';
import { zipObject } from '@toucan/common';

@Injectable({
  providedIn: 'root'
})
export class ExcelTableService {
  async read<T>(tableName: string): Promise<T[]> {
    try {
      return await Excel.run(async context => {
        const table = context.workbook.tables.getItem(tableName);
        const headers = table.getHeaderRowRange().load('values');
        const body = table.getDataBodyRange().load('values');
        await context.sync();

        return body.values.map(row => zipObject(headers.values[0], row));
      });
    } catch (reason) {
      console.error(reason);
      throw reason;
    }
  }
}
