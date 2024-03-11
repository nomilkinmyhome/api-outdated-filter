export const tableNames = ['dataA', 'dataB'] as const;
export type tableName = (typeof tableNames)[number];
