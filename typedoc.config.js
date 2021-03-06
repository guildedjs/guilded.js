module.exports = {
    name: 'Guilded.JS',
    mode: 'modules',
    out: 'docs',
    theme: 'minimal',
    exclude: ['**/node_modules/**', '**/dist/**', '**/types/**', '**/@types/**'],
    ignoreCompilerErrors: true,
    preserveConstEnums: true,
    excludeExternals: true,
    excludeNotExported: true,
    'external-modulemap': '.*packages/([^/]+)/.*',
    stripInternal: true,
    media: 'media',
    readme: 'README.md',
    tsconfig: 'tsconfig.base.json',
};
