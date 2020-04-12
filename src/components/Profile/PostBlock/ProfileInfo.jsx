import React from 'react';
import cl from './PostBlock.module.css';




class ProfileInfo extends React.Component{
statusInputRef = React.createRef();
    state = {
        editMode: false,
        status: this.props.status
    }
componentDidUpdate(prevProps, prevState){
//если использовать установку локалього state внутри этого метода, 
//то надо задать условие его выполнения, иначе будет бесконечнй цикл
    if(prevProps.status !== this.props.status){
        this.setState({
            status: this.props.status
        })
    }
}
activateEditMode = () => {
   
   
    //асинхронный метод. выполняется параллельно. сначала отрабатывает код в методе, а потом уже меняется state
   this.setState({
       
    editMode: true
   });
    //костыльный метод изменения локального стэйта. так делать не нужно 
    // this.state.editMode = true;
    // this.forceUpdate();
}
deactivateEditMode = () => {
    this.setState({
        editMode: false,
        
       });

       this.props.updateStatus(this.state.status);
}
onStatusChange = (e) => {
    this.setState({
        status: e.currentTarget.value
    });
}

render(){
    console.log('render');
    return (
        <> {/*пример, вместо тернарного выражения */}
            { !this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode }>Статус: {this.props.status || '---------------------'}</span>
                </div>
            }
            { this.state.editMode &&
                <div>
                    <input onChange={ this.onStatusChange } onBlur={ this.deactivateEditMode } value={this.state.status} autoFocus={true}/>
                </div>
            }
        </>
    )
}
}

export default ProfileInfo;