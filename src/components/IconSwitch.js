export default function IconSwitch({icon, onSwitch}) {
    return(
        <>
            <div className="material-icons" onClick={(icon) => onSwitch(icon !=='view_list' ? 'view_list' : 'view_module')}>
                {icon === 'view_module' ? 'view_module' : 'view_list'}
            </div>
        </>
    );
}