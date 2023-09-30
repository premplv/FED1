import react,{component} from 'react';
class Countclass extends Component{
    constructor(props){
        super(props){
            this.state={
                count:0;
            }
        }
        incrementHandler=()=>{
            this.setstate({count:this.state.count+1})
        }
        decrementHandler=()=>{
            this.setstate({count:this.state.count-1})
        }
        render(){
            return(
                <div><button type="button"
                onclick={this.incrementHandler}>
                    increment</button>&nbsp;&nbsp;{this.state.count}&nbsp;&nbsp;
                    <button type="button"
                    onclick={this.decrementHandler}>
                        decrement</button></div>
            )
        }
    }
}
export default Countclass;