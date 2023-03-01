export default function IconSwitch({icon}) {
    return(
        <>
            <div className="material-icons" onClick={(e) => console.log(e.target.textContent)}>
                {icon === 'view_module' ? 'view_module' : 'view_list'}
            </div>
        </>
    );
}