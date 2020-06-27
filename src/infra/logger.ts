export interface WinstonCompatibleLoggerInterface {
  debug(message: string, ...meta: any[]): void;
  info(message: string, ...meta: any[]): void;
  warn(message: string, ...meta: any[]): void;
  error(message: string | Error, ...meta: any[]): void;
}
export type AppLogger = WinstonCompatibleLoggerInterface;

const getCallingModuleName = (callingModule: NodeModule): string => {
  const parts = callingModule.filename.split('/');
  return `${parts[parts.length - 2]}/${parts.pop()}`;
};

const createLogger = (module: string | NodeModule | null): AppLogger => {
  let moduleName: string = '';
  if (typeof module === 'string') {
    moduleName = module;
  } else if (module !== null) {
    moduleName = getCallingModuleName(module);
  }

  // console.debug = console.log.bind(console);
  return console as WinstonCompatibleLoggerInterface;
};

export default createLogger;
