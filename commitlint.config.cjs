module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'bug',
      ],
    ],
    'subject-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [0],
  },
};
