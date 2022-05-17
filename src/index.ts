import { checker } from "./helper/checker";
import {
  anyObjectType,
  data_type,
  SortType,
  structureType,
} from "./interfaces/interfaces";

export class sort {
  /**
   *
   * @param data
   * list of data that will be sorted must be type of Array or Object
   * @param type
   * data type contain either "string" or "integer" value
   * @param key
   * anchor key value from data that will be sorted
   * @param structure
   * define the structure of the data
   * - AO stands for Array of objects
   * @returns sorted data
   */
  desending(
    data: any[],
    type: data_type,
    structure?: structureType,
    key?: string
  ): anyObjectType {
    const is_valid_parameter = checker.data_validation(
      data,
      type,
      structure,
      key
    );
    return data;
  }
}
