const FormGroup = ({label,inputField,fistCol,secondCol}) => {
    return ( <div>
        <div className=" grid grid-cols-12 items-center text-base">
                    <label className={`text-black ${fistCol??"col-span-2"}`}>{label}</label>
                    <div className={` ${secondCol??"col-span-10"}`}>
                     {inputField}
                    </div>
                   
                </div>
    </div> );
}
 
export default FormGroup;