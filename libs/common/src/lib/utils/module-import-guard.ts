// https://angular.io/styleguide#!#04-12
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `模块 ${moduleName} 已经载入. 请确保核心模块仅能在根模块中载入.`
    );
  }
}
