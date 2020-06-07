import React,{Fragment,useEffect} from 'react';
import { withAlert } from 'react-alert';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alerts = ({errors,alert,messages}) => {
    useEffect(() => {

        if(Object.keys(errors.msg).length > 0){
            if(errors.msg.title){
                alert.error(`picture : ${errors.msg.picture.join()}`);
            }
            else{
                alert.error("SOme Ting Went Wrong");
            }
        }

        if(messages.imageAdded){
            alert.success(messages.imageAdded);
        }

    },[errors,messages])

    return (
        <Fragment />
    )
}

Alerts.propTypes = {
    errors : PropTypes.object.isRequired,

};
const mapStateToProps = state => ({
    errors : state.error,
    messages : state.message
});


export default connect(mapStateToProps)(withAlert()(Alerts));

