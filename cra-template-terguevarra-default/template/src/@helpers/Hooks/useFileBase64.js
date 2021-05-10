import React, { useState } from 'react';

function useFileBase64(isMultiple){
    const [file, setFile] = useState(null);

    const onChange = (e) => {
        let files = e.target.files;
        let allFiles = []

        for (let i = 0 ; i < files.length ; i++){
            let file = files[i];
            let reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => {
                let tmpFileObj = {
                    filesize: file.size,
                    filetype: file.type,
                    filename: file.name,
                    base64: reader.result.split(',')[1]
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