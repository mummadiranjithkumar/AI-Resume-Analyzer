function ResumeSummary({ summary }) {

    return (

        <div className="bg-slate-700 rounded-xl shadow-lg p-6">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                📝 Resume Summary
            </h2>

            <p className="text-slate-200 leading-8">
                {summary}
            </p>

        </div>

    );

}

export default ResumeSummary;