

function AboutPage() {
    const concepts = ["Sass", "TailWind", "React Router Dome", "Axios & Api", "Context", "Reducers", "Redux", "LocalStorage"];

    return (
        <div className="w-full h-[90vh] flex justify-center items-center">
            <div className="w-[90%] p-10 bg-white shadow-2xl rounded-md flex flex-col justify-center items-center font-semibold gap-1 text-center">
                <h3 className="text-2xl p-4">This is a very simple online shop site for training for basic concepts in React, like:</h3>
                {concepts.map(concept => <p>{concept}</p>)}
            </div>
        </div>
    )
}

export default AboutPage