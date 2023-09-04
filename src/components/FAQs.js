
import Faq from "react-faq-component";

const data = {
    title: "FAQ's (About Animals)",
    rows: [
        {
            title: "How do Animals communicate with each other ?",
            content: `Animals communicate using signals, which can include visual; auditory, or sound-based; chemical, 
		involving pheromones; or tactile, touch-based, cues.`,
        },
        {
            title: "Why do Humans eat animals ?",
            content:
                `Scientists long believed that eating meat helped our ancestors develop more human-like body shapes
	 and that eating meat and bone marrow gave the Homo erectus the energy it needed to form and feed a larger brain around 2 million years ago.`,
        },
        {
            title: "Which language is used to build this Site ?",
            content: `Frontend-ReactJS, Backend-NodeJS, Database-MongoDB`,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles={
    bgColor: 'white',
    titleTextColor: 'green',
    titleTextSize: '40px',
    rowTitleColor: 'green',
    rowTitleTextSize: 'medium',
    ContentPaddingLeft:'20px',
    rowContentColor: 'grey',
    rowContentTextSize: '16px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '40px',
    rowContentPaddingRight: '50px',
    arrowColor: "red",
    transitionDuration: "1s",
    timingFunc: "ease",

  
};

const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "click",
    collapseIcon: "--",
};

export default function FAQs(props){

    return(

        <div className='faq'>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
</div>
    );
}