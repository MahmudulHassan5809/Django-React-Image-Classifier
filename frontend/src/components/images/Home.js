import React, {useCallback,useState,useEffect} from 'react';
import {useDropzone} from 'react-dropzone';

import './Home.css'

const Home = () => {
    const [image,setImage] = useState({
        files: [],
    });

    const { files } = image;

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles[0].name)
        setImage({
            files: acceptedFiles[0].name,
        })
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})



    return (
        <div {...getRootProps()} className='back text-center'>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }

          {files ? files : ''}
        </div>
    )
}

export default Home;
