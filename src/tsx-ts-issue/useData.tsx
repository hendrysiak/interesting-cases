import dataJson from './data.json';

// type getValuesType = <T>(varName: string) => T | undefined;

const useData = () => {

    const getValue = (varName: string) => dataJson?.[varName as keyof typeof dataJson];

    
    // export const getValue = <T>(varName: string): T => {
    //     return dataJson?.[varName as keyof typeof dataJson] as T;
    // };

    return (
        {
            property1: getValue('id'),
            property2: getValue('name'),
        }
    )
}

export default useData;