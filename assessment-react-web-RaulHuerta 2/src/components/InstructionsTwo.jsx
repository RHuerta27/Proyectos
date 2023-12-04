import {SPANISH_LANGUAGE} from '../utils/Language'

const InstructionsTwo = () =>{
    return(
    <>
    <div className="mt-5">
        <h5>{SPANISH_LANGUAGE.instructionsTwo}</h5>
        <ul>
            {SPANISH_LANGUAGE.instructionsOptionsTwo.map((Options) => (
            <li key={Options.id}>{Options.instruction}</li>
            ))}
        </ul>
    </div>
    </>
    );
};

export default InstructionsTwo;