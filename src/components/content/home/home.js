import React, { useState } from 'react';
import './home.css'
import Content_header from "../../../etc/ContentHeader/content_header";
import home_img from "../../../resources/icons/home.png";
import Hint from "./hints/hint";
import create_patient from '../../../resources/hint-videos/create-patient.mp4'
import create_scan from '../../../resources/hint-videos/create-scan.mp4'
import view_scan_results from '../../../resources/hint-videos/view-scan-results.mp4'

const firstComponent = () => {
    return <div className="tmc_home_enclosing_div_hint">
        <Hint
            header={"Introduction"}
            subheader={"Welcome to Tmc v1.0"}
            message={"Welcome to the University of Reading's Thyroid Module Classifier, An AI-assisted decision-making system for thyroid nodule evaluation, classification, and prediction. " +
            "It is a complete platform for developing and testing state-of-the-art algorithms and procedures, to increase our insights in the fight against thyroid cancer. " +
            "Please Navigate to the next hint for more information about how to use this software "}/>
        </div>
}
const secondComponent = () => {
    let c = <div >
        <video className="tmc_home_hint_video" controls autoPlay src={create_patient} type="video/mp4" />
        <p className="tmc_home_hint_txt">
            Before we submit our scan into the system, it is essential to create the associated patient for that scan. This will allow us to compare scans of different algorithms, and track a
            patient's progress. Navigate into the 'New Patient' button at your left. You will be redirected into the 'Patient submission form. By submitting the relevant information, a new entry will
            be now visible into the 'My Patients' menu.

        </p>
    </div>
    return<div className="tmc_home_enclosing_div_hint">
        <Hint
            header={"Creating patient"}
            subheader={"Concepts and Handling"}
            message={c}/>
    </div>
}
const thirdComponent = () => {
    let c = <div >
        <video className="tmc_home_hint_video" controls autoPlay src={create_scan} type="video/mp4" />
                <p className="tmc_home_hint_txt">
                    After submitting the patient into our system, we are free to create our scan task. Please navigate to the 'New Scan' button at your left.
                    After inputting the necessary information of the system, a new entry will be now visible under 'My Scans' menu.
                </p>
    </div>
    return<div className="tmc_home_enclosing_div_hint">
        <Hint
            header={"Creating scan"}
            subheader={"Concepts and Handling"}
            message={c}/>
    </div>
}
const finalComponent = () => {
    let c = <div >
        <video className="tmc_home_hint_video" controls autoPlay src={view_scan_results} type="video/mp4" />
        <p className="tmc_home_hint_txt">
            The final step is to view the scan results. Please click the 'My Scans' button at the left of the screen. Click on the 'Details' button, and you will be redirected to the 'Scan view' page.
            By Clicking the 'Results' tab, you will see the output of the prediction algorithm.
        </p>
    </div>
    return<div className="tmc_home_enclosing_div_hint">
        <Hint
            header={"View scan results"}
            subheader={"Concepts and Handling"}
            message={c}/>
    </div>
}

function Home() {

    const [steps, setSteps] = useState([
        { key: 'firstStep', label: 'Welcome', isDone: true, component: firstComponent },
        { key: 'secondStep', label: 'Create patient', isDone: false, component: secondComponent },
        { key: 'thirdStep', label: 'Create scan', isDone: false, component: thirdComponent },
        { key: 'finalStep', label: 'View results', isDone: false, component: finalComponent },
    ]);

    const [activeStep, setActiveStep] = useState(steps[0]);

    const handleNext = (e) => {
        if (steps[steps.length - 1].key === activeStep.key) {
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
    return <div className="container-fluid">
            <div className="row">
                <Content_header img={home_img} message="Home"/>
            </div>
            <div className="row">
                    <div className="box col-12">
                        <div className="steps tmc_home_steps_fullspan">
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
                            <input type="button" className="btn btn-outline-primary" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
                            <input type="button" className="btn btn-outline-primary" value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Done'} onClick={handleNext} />
                        </div>
                    </div>
                </div>
        </div>
    ;
}

export default Home;