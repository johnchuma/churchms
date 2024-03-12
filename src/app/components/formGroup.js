const FormGroup = ({label,inputField}) => {
    return ( <div>
        <div className=" grid grid-cols-12 items-center text-base">
                    <label className="text-black col-span-2">{label}</label>
                    <div className="col-span-10">
                     {inputField}
                    </div>
                   
                </div>
    </div> );
}
 
export default FormGroup;