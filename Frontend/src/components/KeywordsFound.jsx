function KeywordsFound({ keywords }) {

    return (

        <div className="bg-slate-700 rounded-xl shadow-lg p-6">

            <h2 className="text-2xl font-bold text-green-400 mb-6">
                ✅ Keywords Found
            </h2>

            <div className="flex flex-wrap gap-3">

                {keywords.map((item, index) => (

                    <span
                        key={index}
                        className="bg-green-600 px-4 py-2 rounded-full"
                    >
                        {item}
                    </span>

                ))}

            </div>

        </div>

    );

}

export default KeywordsFound;