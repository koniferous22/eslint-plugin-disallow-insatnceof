import { RuleTester } from "eslint";
import { noInstanceOfRule } from "./no-instanceof";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

tester.run("no-literal", noInstanceOfRule, {
  valid: [{ code: `let x` }],
  invalid: [
    {
      code: `const y = x instanceof Boolean`,
      errors: [{ message: 'Use of "instanceof" operator is forbidden' }],
    },
  ],
});
