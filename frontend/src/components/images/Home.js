import React, {Fragment,useCallback,useState,useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addImage } from '../../actions/imageActions';

import Sugar from 'sugar';

import './Home.css'
import Spinner from '../layout/Spinner'

const Home = ({addImage,image_obj,loading}) => {

    const [image,setImage] = useState({
        files: null,
        filename: '',
        isLoading: false,
    });



    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        setImage({
            isLoading: true
        })
        loadImage(acceptedFiles)
    }, [])

    const loadImage = (files) => {
       setTimeout(() => {
        setImage({
            files : files[0],
            filename: files[0].name,
            isLoading: false
        })
       },1000)

    }



    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const { files,isLoading,filename } = image;


    const sendImage = () => {
        let form_data = new FormData();
        form_data.append('picture', files, filename);
        addImage(form_data);
        setImage({
            files : null,
            filename: '',
            isLoading: false
        })
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div {...getRootProps()} className='back text-center'>
                    <input {...getInputProps()} />
                    <i className="far fa-image fa-4x mb-2 text-muted"></i>
                    {
                    isDragActive ?
                      <p className="text-muted">Drop the file here ...</p> :
                      <p className="text-muted">Drag & drop some file here, or click to select files</p>
                    }


                    { isLoading && (<Spinner />)}


                </div>




                <p className="text-center">
                    {filename}
                </p>

                <div className="text-center">
                    {files ? <button onClick={sendImage} className="btn btn-dark">Upload</button> : ''}
                    {loading && <Spinner />}
                </div>

                {
                    image_obj && (
                        <div className="card mx-auto" style={{width: '18rem'}}>
                            <img src={image_obj.picture} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{image_obj.classified}</h4>
                                <p className="card-text">Uploaded At : {Sugar.Date.format(new Date(image_obj.uploaded), '%Y-%m-%d')}</p>
                            </div>
                        </div>
                    )
                }



            </div>
        </div>
    )
}

Home.propTypes = {
    addImage : PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    image_obj : state.image.image,
    loading: state.image.isLoading,
});


export default connect(mapStateToProps,{addImage})(Home);
