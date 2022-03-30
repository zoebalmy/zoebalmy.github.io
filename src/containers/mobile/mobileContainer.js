import { connect } from 'react-redux';
import Mobile from '../../components/mobile/mobile.js';
import { withRouter } from 'react-router-dom';
import { changePageTitle } from '../../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onPageUpdate: (text) => {
            dispatch(changePageTitle(text));
        }
    };
};

const FinalMobile = withRouter(connect(null, mapDispatchToProps)(Mobile));

export default FinalMobile;
