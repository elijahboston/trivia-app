/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * We need to tell @babel/register to transpile .ts and .tsx files
 * unfortunately this needs to be done with a require() call
 */
require('@babel/register')({extensions: ['.js', '.jsx', '.ts', '.tsx']});
