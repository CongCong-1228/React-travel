// import 以css为后缀的文件时，遵循以下约定

declare module "*.css" {
  const css: { [key: string]: string };
  export default css;
}

// declare module "*.css"
