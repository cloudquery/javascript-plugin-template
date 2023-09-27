/* eslint-disable @typescript-eslint/naming-convention */
import { Utf8 } from "@cloudquery/plugin-sdk-javascript/arrow";
import type {
  Column,
  ColumnResolver,
} from "@cloudquery/plugin-sdk-javascript/schema/column";
import type {
  Table,
  TableResolver,
} from "@cloudquery/plugin-sdk-javascript/schema/table";
import { createTable } from "@cloudquery/plugin-sdk-javascript/schema/table";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import timezone from "dayjs/plugin/timezone.js";
import utc from "dayjs/plugin/utc.js";


/* eslint-disable import/no-named-as-default-member */
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);

const getColumnResolver = (c: string): ColumnResolver => {
  return (meta, resource) => {
    const dataItem = resource.getItem();
    resource.setColumData(c, (dataItem as Record<string, unknown>)[c]);
    return Promise.resolve();
  };
};

// eslint-disable-next-line @typescript-eslint/require-await
const getTable = async (): Promise<Table> => {
  
  const columnNames = ["First Name", "Last Name"];
  const tableRecords = [{"First Name": "Jack", "Last Name": "Bauer"}, {"First Name": "Thomas", "Last Name": "Kirkman"}]
  const columnDefinitions: Column[] = columnNames.map((c) => ({
    name: c,
    type: new Utf8(),
    description: "",
    primaryKey: false,
    notNull: false,
    incrementalKey: false,
    unique: false,
    ignoreInTests: false,
    resolver: getColumnResolver(c),
  }));

  const tableResolver: TableResolver = (clientMeta, parent, stream) => {
    for (const r of tableRecords) stream.write(r)
    return Promise.resolve();
  };
  return createTable({ name: "Names", columns: columnDefinitions, resolver: tableResolver });
};

export const getTables = async (
): Promise<Table[]> => {
 
  const table = await getTable();
  return [table];
};
