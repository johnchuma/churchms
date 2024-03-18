const VerticalFormGroup = ({label,inputField,fistCol,secondCol}) => {
    return ( <div>
        <div className=" flex flex-col text-base w-full">
                    <label className={`text-black`}>{label}</label>
                    <div className={`mt-1`}>
                     {inputField}
                    </div>
                   
                </div>
    </div> );
}
 
export default VerticalFormGroup;