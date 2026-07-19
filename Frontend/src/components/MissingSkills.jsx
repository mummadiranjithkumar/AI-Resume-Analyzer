function MissingSkills({ skills }) {

    return (

        <div className="bg-slate-700 rounded-xl p-6 shadow-lg">

            <h2 className="text-2xl font-bold text-red-400 mb-6">
                ❌ Missing Skills
            </h2>

            <div className="flex flex-wrap gap-3">

                {skills.map((item, index) => (

                    <span
                        key={index}
                        className="bg-red-600 px-4 py-2 rounded-full text-white text-sm"
                    >
                        {item}
                    </span>

                ))}

            </div>

        </div>

    );

}

export default MissingSkills;