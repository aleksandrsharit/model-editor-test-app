export type ParamType = {
  id: string;
  name: string;
};

export type ParamValueType = {
  paramId: string;
  value: string;
};

export type ModelType = {
  paramValues: ParamValueType[];
};

export type ProductType = {
  param: ParamType;
  model: ModelType;
} 