import React,{Fragment,useEffect} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Sugar from 'sugar';

import { connect } from 'react-redux';
import { getImages } from '../../actions/imageActions';

const Images = ({images,getImages}) => {
    useEffect(() => {
        getImages();
        // eslint-disable-next-line
    },[])

    return (
        <Fragment>

            <div className="row">
                <div className="col-md-6 mx-auto my-3">
                    <h2 className="text-center text-dark">All Images</h2>
                </div>
            </div>
            <hr/>


            <div className="row">
                { images.map(image => (
                    <div className="col-md-4 mx-auto" key={image.id}>
                        <div className="card border-primary mb-3" style={{maxWidth: "25rem"}}>
                            <img className="card-img-top" src={image.picture} alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title">{image.classified}</h4>
                                <p className="card-text">Uploaded At : {Sugar.Date.format(new Date(image.uploaded), '%Y-%m-%d')}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>




        </Fragment>
    )
}

Images.propTypes = {
    images : PropTypes.array.isRequired,
    getImages : PropTypes.func.isRequired,

};
const mapStateToProps = state => ({
    images : state.image.images,
});

export default connect(mapStateToProps,{getImages})(Images);

