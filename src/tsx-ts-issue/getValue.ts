import dataJson from './data.json';

export const getValue = <T>(varName: string): T => {
    return dataJson?.[varName as keyof typeof dataJson] as T;
};