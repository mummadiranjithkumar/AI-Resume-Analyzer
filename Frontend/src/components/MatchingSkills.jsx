function MatchingSkills({ skills }) {

    return (

        <div className="bg-slate-700 rounded-xl p-6 shadow-lg">

            <h2 className="text-2xl font-bold text-green-400 mb-6">
                ✅ Matching Skills
            </h2>

            <div className="flex flex-wrap gap-3">

                {skills.map((item, index) => (

                    <span
                        key={index}
                        className="bg-green-600 px-4 py-2 rounded-full text-white text-sm"
                    >
                        {typeof item === "object" ? item.skill : item}
                    </span>

                ))}

            </div>

        </div>

    );

}

export default MatchingSkills;