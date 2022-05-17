export type anyObjectType = Record<string, any>;
export type data_type = "string" | "integer";
export type structureType = "AO";
export type SortType = {
  data: anyObjectType;
  type: data_type;
  key?: string;
};
