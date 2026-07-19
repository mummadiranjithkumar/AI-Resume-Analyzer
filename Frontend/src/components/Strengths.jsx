function Strengths({ strengths }) {

    return (

        <div className="bg-slate-700 rounded-xl shadow-lg p-6">

            <h2 className="text-2xl font-bold text-green-400 mb-6">
                💪 Strengths
            </h2>

            <ul className="space-y-4">

                {strengths.map((item, index) => (

                    <li
                        key={index}
                        className="bg-slate-800 rounded-lg p-4"
                    >
                        ✅ {item}
                    </li>

                ))}

            </ul>

        </div>

    );

}

export default Strengths;