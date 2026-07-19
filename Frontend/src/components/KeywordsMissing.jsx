function KeywordsMissing({ keywords }) {

    return (

        <div className="bg-slate-700 rounded-xl shadow-lg p-6">

            <h2 className="text-2xl font-bold text-red-400 mb-6">
                ❌ Keywords Missing
            </h2>

            <div className="flex flex-wrap gap-3">

                {keywords.map((item, index) => (

                    <span
                        key={index}
                        className="bg-red-600 px-4 py-2 rounded-full"
                    >
                        {item}
                    </span>

                ))}

            </div>

        </div>

    );

}

export default KeywordsMissing;