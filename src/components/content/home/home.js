import React, { useState } from 'react';
import './home.css'
import Content_header from "../../../etc/ContentHeader/content_header";
import user_img from "../../../resources/user.png";
import Hint from "./hints/hint";
const firstComponent = () => {
    return <Hint
        header={"Introduction"}
        subheader={"Welcome to UORTMC"}
        message={"Welcome to the University of Reading's Thyroid Module Classifier, An AI-assisted decision-making system for thyroid nodule evaluation, classification, and prediction. It is a complete platform" +
        "for developing state-of-the-art algorithms and procedures, to increase our insights in the fight against thyroid cancer. Please Navigate to the next hint for more information" +
        "about how to use this software "}/>
}
const secondComponent = () => {
    return <div>
        <Hint
            header={"Create a Patient"}
            subheader={"How"}
            message={"Welcome to the University of Reading's Thyroid Module Classifier, An AI-assisted decision-making system for thyroid nodule evaluation, classification, and prediction. It is a complete platform" +
            "for developing state-of-the-art algorithms and procedures, to increase our insights in the fight against thyroid cancer. Please Navigate to the next hint for more information" +
            "about how to use this software "}/>
    </div>
}
const thirdComponent = () => {
    return <Hint
        header={"Introduction"}
        subheader={"Welcome to UORTMC"}
        message={"Welcome to the University of Reading's Thyroid Module Classifier, An AI-assisted decision-making system for thyroid nodule evaluation, classification, and prediction. It is a complete platform" +
        "for developing state-of-the-art algorithms and procedures, to increase our insights in the fight against thyroid cancer. Please Navigate to the next hint for more information" +
        "about how to use this software "}/>
}
const finalComponent = () => {
    return <Hint
        header={"Introduction"}
        subheader={"Welcome to UORTMC"}
        message={"Welcome to the University of Reading's Thyroid Module Classifier, An AI-assisted decision-making system for thyroid nodule evaluation, classification, and prediction. It is a complete platform" +
        "for developing state-of-the-art algorithms and procedures, to increase our insights in the fight against thyroid cancer. Please Navigate to the next hint for more information" +
        "about how to use this software "}/>
}

function Home() {

    const [steps, setSteps] = useState([
        { key: 'firstStep', label: 'Welcome', isDone: true, component: firstComponent },
        { key: 'secondStep', label: 'Create a Patient', isDone: false, component: secondComponent },
        { key: 'thirdStep', label: 'Create a Scan', isDone: false, component: thirdComponent },
        { key: 'finalStep', label: 'View results', isDone: false, component: finalComponent },
    ]);

    const [activeStep, setActiveStep] = useState(steps[0]);

    const handleNext = () => {
        if (steps[steps.length - 1].key === activeStep.key) {
            alert('You have completed all steps.');
            return;
        }

        const index = steps.findIndex(x => x.key === activeStep.key);
        setSteps(prevStep => prevStep.map(x => {
            if (x.key === activeStep.key) x.isDone = true;
            return x;
        }))
        setActiveStep(steps[index + 1]);
    }

    const handleBack = () => {
        const index = steps.findIndex(x => x.key === activeStep.key);
        if (index === 0) return;

        setSteps(prevStep => prevStep.map(x => {
            if (x.key === activeStep.key) x.isDone = false;
            return x;
        }))
        setActiveStep(steps[index - 1]);
    }

    return (
        <div className="container-fluid tmc_container_fluid">
            <div className="row">
                <Content_header img={user_img} message="Home"/>
            </div>
            <div className="row">
                    <div className="box col-12">
                        <div className="steps">
                            <ul className="nav">
                                {steps.map((step, i) => {
                                    return <li key={i} className={`${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>
                                        <div>Step {i + 1}<br /><span>{step.label}</span></div>
                                    </li>
                                })}
                            </ul>
                        </div>
                        <div className="step-component">
                            {activeStep.component()}
                        </div>
                        <div className="btn-component">
                            <input type="button" className="btn btn-primary" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
                            <input type="button" className="btn btn-primary" value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Done'} onClick={handleNext} />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Home;