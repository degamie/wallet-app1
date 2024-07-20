import React,{Component} from 'react';
class ErrorPage extends Component{
    constructor(props){
        super(props);
        this.state={hasError:false};
    }
    static getDrivedStateFromError(error){
        return {hasError:true};

    }
    componentDidCatch(error,ErrorInfo){
        console.error('Error caught by Error Page:',error,ErrorInfo);
    }
    render(){
        if(this.state.hasError){
            return <h1>404 Bad Server Error Request!,Pls Try Again Later</h1>
        }
        return this.props.children;
    }
}
export default ErrorBoundry;