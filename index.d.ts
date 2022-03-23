interface Options {
  target: 'html' | 'slack' | 'telegram' | 'discord' | 'safe-gfm';
  highlight: object;
}

declare module "transpile-md" {
  function transpileMd(markdown: string, options: Options): string;
  export = transpileMd;
}
