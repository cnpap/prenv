module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  rules: {
    // 请使用箭头函数作为回调
    'prefer-arrow-callback': 'error',
    // 模板字符串中的花括号内部两侧是否留有空格
    'template-curly-spacing': 'error',
    // 无所谓是否 const 声明
    'prefer-const': 'off'
  }
};
