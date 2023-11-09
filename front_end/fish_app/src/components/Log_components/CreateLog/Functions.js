export function formDatas(Fish_Species,Image,Fish_Released,Fish_Method,weight,Length,Equipment,Weather,Date)
{
    const formData = new FormData();
    formData.append('file',Image);
    formData.append('Fish_Species', Fish_Species);
    formData.append('Fish_Released', Fish_Released);
    formData.append('Fish_Method', Fish_Method);
    formData.append('weight', weight);
    formData.append('Length',Length);
    formData.append('Equipment',Equipment);
    formData.append('Weather',Weather);
    formData.append('Date',Date);
    return formData;
}


export function InputField({label, typeofinput, classname,setter})
{
    return(
        <div className={classname}>
            <label>{label}: </label>
            <input type={typeofinput} onChange={(e)=>setter(e.target.value)}></input>
        </div>
    )
}

export function InputFieldNumerical({label, typeofinput, classname,setter})
{
    return(
        <div className={classname}>
            <label>{label}: </label>
            <input type={typeofinput} min='0' onChange={(e)=>setter(e.target.value)}></input>
        </div>
    )
}