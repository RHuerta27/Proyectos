import {SPANISH_LANGUAGE} from '../utils/Language'

const Instructions = () =>{
    return(
    <>
    <div className="mt-5">
        <h5>{SPANISH_LANGUAGE.instructionsOne}</h5>
        <ul>
            {SPANISH_LANGUAGE.instructionsOptionsOne.map((Options) => (
            <li key={Options.id}>{Options.instruction}</li>
            ))}
        </ul>
    </div>
    </>
    );
};

export default Instructions;