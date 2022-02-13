import { useState } from 'react';

function useFileBase64(isMultiple : boolean){
    const [file, setFile] = useState<Array<any> | null>(null);

    const onChange = (e : any) => {
        let files = e.target.files;
        let allFiles : Array<any> = []

        for (let i = 0 ; i < files.length ; i++){
            let file = files[i];
            let reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => {
                let tmpFileObj = {
                    filesize: file.size,
                    filetype: file.type,
                    filename: file.name,
                    base64: (reader.result as string).split(',')[1]
                };
                allFiles.push(tmpFileObj);

                if(allFiles.length === files.length){
                    if(isMultiple) setFile(allFiles);
                    else setFile(allFiles[0]);
                }
            }
        }
    }

    return [
        file,
        onChange
    ];
}

export default useFileBase64;