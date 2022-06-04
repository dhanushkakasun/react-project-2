function MainButton(props){
    return(
        <button onClick={addSchedule} type="button" className="btn btn-primary">{props.name} Schedule</button>
    );
}export default MainButton;