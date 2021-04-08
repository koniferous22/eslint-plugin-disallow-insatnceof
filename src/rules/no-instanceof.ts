import * as ESTree from "estree";
import { Rule } from "eslint";

export const noInstanceOfRule: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: {
      description: 'Disallows use of instance of to restrict logic based on prototype hierarchy',
      category: 'Best Practices',
      recommended: true,
      url: 'TBD'
    }
  },
  create: function (context) {
    return {
      BinaryExpression: function (node: ESTree.Node) {
        if (node.type === 'BinaryExpression' && node.operator === 'instanceof') {
          context.report({
            node,
            message: 'Use of "instanceof" operator is forbidden'
          })
        }
      }
    };
  }
};
