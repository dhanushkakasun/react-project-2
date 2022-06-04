import './HeaderComponent.css';
function HeaderComponent(props){
    return(
        <h1 className="hc-header">{props.name} New Train Schedule</h1>
    );
}
export default HeaderComponent;