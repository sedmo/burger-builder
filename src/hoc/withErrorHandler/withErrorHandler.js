import React, {
    Component
} from 'react';
import Modal from '../../components/UI/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                //clears any past error responses
                this.setState({
                    error: null
                });
                return req;

            });
            this.resInterceptor = axios.interceptors.response.use(resp =>
                resp,
                error => {
                    this.setState({
                        error: error
                    });
                });
        }

        componentWillUnmount(){
            // problem is that we are creating multiple interceptors to the same axios
            // instace everytime we wrap this HOC around a component.
            // This is of course a huge problem as it can lead to performance issues (memory)
            // solution: is to remove the particular interceptor everytime the component is unmounted
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            });
        }
        render() {
            return (
                <>
                <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                    {this.state.error? this.state.error.message: null}
                </Modal>
                <WrappedComponent {...this.props} />
                </>
            )
        }
    }
}

export default withErrorHandler;