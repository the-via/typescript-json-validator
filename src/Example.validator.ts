/* tslint:disable */
// generated by typescript-json-validator
import inspect from 'util-inspect';
import Ajv = require('ajv');
import ExampleType from './Example';
export const ajv = new Ajv({
  allErrors: true,
  coerceTypes: false,
  format: 'fast',
  nullable: true,
  unicode: true,
  uniqueItems: true,
  useDefaults: true,
});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

export {ExampleType};
export const ExampleTypeSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  defaultProperties: [],
  properties: {
    answer: {
      default: 42,
      type: 'number',
    },
    email: {
      type: 'string',
    },
    value: {
      type: 'string',
    },
  },
  required: ['answer', 'value'],
  type: 'object',
};
export type ValidateFunction<T> = ((data: unknown) => data is T) &
  Pick<Ajv.ValidateFunction, 'errors'>;
export const isExampleType = ajv.compile(ExampleTypeSchema) as ValidateFunction<
  ExampleType
>;
export default function validate(value: unknown): ExampleType {
  if (isExampleType(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(
        isExampleType.errors!.filter((e: any) => e.keyword !== 'if'),
        {dataVar: 'ExampleType'},
      ) +
        '\n\n' +
        inspect(value),
    );
  }
}
