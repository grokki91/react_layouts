export default function IconSwitch({icon, onSwitch}) {
    return(
        <>
            <div className="material-icons" onClick={onSwitch}>
                {icon === 'view_module' ? 'view_list' : 'view_module'}
            </div>
        </>
    );
}