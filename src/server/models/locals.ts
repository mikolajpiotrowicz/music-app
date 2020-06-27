export type InitialData = {
  name: string;
};

export type Locals = {
  appData: {
    initialData: InitialData | {};
    statusCode: number;
  }  
};
