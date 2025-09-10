import { default as Ajv } from "ajv";
import camelcaseKeys from "camelcase-keys";

const spec = {
  type: "object",
  properties: {
    concurrency: { type: "integer" },
    exampleProperty: { type: "string" },
  },
  required: ["example_property"],
};

const ajv = new Ajv.default();
const validate = ajv.compile(spec);

export type Spec = {
  concurrency: number;
  exampleProperty: string;
};

export const parseSpec = (spec: string): Spec => {
  const parsed = JSON.parse(spec) as Partial<Spec>;
  const valid = validate(parsed);
  if (!valid) {
    throw new Error(`Invalid spec: ${JSON.stringify(validate.errors)}`);
  }
  const { concurrency = 10_000, exampleProperty = "value" } =
    camelcaseKeys(parsed);
  return { concurrency, exampleProperty };
};
