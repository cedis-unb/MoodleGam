module.exports = {
  env: {
    browser: true, // Define variáveis globais comuns em ambientes de navegador
    es2021: true, // Habilita as funcionalidades do ES12
    node: true, // Define variáveis globais do Node.js e escopo
  },
  extends: [
    'eslint:recommended', // Conjunto básico de regras recomendadas pelo ESLint
    'plugin:prettier/recommended', // Habilita a integração do ESLint com o Prettier
  ],
  parserOptions: {
    ecmaVersion: 12, // Permite a análise de modernas funcionalidades do ECMAScript
    sourceType: 'module', // Permite o uso de módulos ECMAScript
  },
  plugins: [
    'prettier', // Habilita o plugin do Prettier para o ESLint
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false, // Instrui o Prettier (via ESLint) a não adicionar ponto e vírgula
        endOfLine: 'auto', // Ajuda a evitar problemas com quebras de linha entre diferentes sistemas operacionais
      },
    ],
    semi: ['error', 'never'], // Regra do ESLint para não exigir ponto e vírgula
    'no-extra-semi': 'error', // Evita pontos e vírgulas extras
    'no-console': 'warn', // Avisa sobre o uso de console.log
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Avisa sobre variáveis não utilizadas, exceto aquelas que começam com '_'
    'no-undef': 'error', // Erro quando uma variável indefinida é utilizada
  },
}
