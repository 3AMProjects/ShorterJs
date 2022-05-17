class Checker {
  data = (data) => Array.isArray(data) || typeof data == "object";
  type = (type) => type === "integer" || typeof type === "string";
  structure = (structure) => structure === "AO" || "OBJ";
}
class DataChecker {
  data_check = new Checker();
  /**
   *
   * @param data
   * list of data that will be sorted must be type of Array or Object
   * @param type
   * data type contain either "string" or "integer" value
   * @param structure
   * define the structure of the data
   * - AO stands for Array of objects
   * - OBJ stand for Object
   * @param key
   * anchor key value from data that will be sorted
   */
  data_validation = (data, type, structure, key?) => {
    const is_valid_data = this.data_check.data(data);
    const is_valid_type = this.data_check.type(type);
    const is_valid_structure = this.data_check.structure(structure);
    if (is_valid_data && is_valid_type && is_valid_structure) return true;
    return false;
  };
}
export const checker = new DataChecker();
