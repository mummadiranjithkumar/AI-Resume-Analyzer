function ATSScore({ score }) {

    let color = "text-red-500";

    if (score >= 80) {
        color = "text-green-400";
    } else if (score >= 60) {
        color = "text-yellow-400";
    }

    return (

        <div className="bg-slate-700 rounded-xl shadow-lg p-8 text-center">

            <h2 className="text-2xl font-bold mb-6">
                ATS Match Score
            </h2>

            <div className={`text-7xl font-extrabold ${color}`}>
                {score}%
            </div>

            <p className="text-slate-300 mt-4 text-lg">

                {score >= 80
                    ? "Excellent Match"
                    : score >= 60
                    ? "Good Match"
                    : "Needs Improvement"}

            </p>

        </div>

    );

}

export default ATSScore;