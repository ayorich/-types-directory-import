declare module 'directory-import' {
  export default function directoryImport(
    options?: {
      directoryPath?: string;
      importMethod?: 'sync' | 'async';
      includeSubdirectories?: boolean;
      webpack?: boolean;
      limit?: number;
      exclude?: RegExp;
      include?: RegExp;
    },
    callback?: Function
  ): any | Promise<any>;
}
