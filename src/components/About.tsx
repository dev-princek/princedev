import { Download } from "@mui/icons-material";

export default function AboutMe() {
    return (
        <div className="container h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-800">
            <div className="bg-black text-white py-10 px-5">
                <h1 className="text-4xl font-bold text-center text-white">
                    ABOUT <span className="text-yellow-500">ME</span>
                </h1>

                <div className="grid md:grid-cols-2 gap-8 mt-10">
                    {/* Personal Info Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-5">PERSONAL INFOS</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "First Name", value: "Steve" },
                                { label: "Last Name", value: "Milner" },
                                { label: "Age", value: "27 Years" },
                                { label: "Nationality", value: "Tunisian" },
                                { label: "Freelance", value: <span className="text-green-500">Available</span> },
                                { label: "Address", value: "Tunis" },
                                { label: "Phone", value: "+21621184010" },
                                { label: "Email", value: "you@mail.com" },
                                { label: "Skype", value: "steve.milner" },
                                { label: "Languages", value: "French, English" }
                            ].map((info, index) => (
                                <p key={index}>
                                    <span className="font-bold">{info.label}:</span> {info.value}
                                </p>
                            ))}
                        </div>
                        <button className="bg-yellow-500 text-black font-bold py-2 px-4 mt-5 flex items-center gap-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-yellow-600">
                            DOWNLOAD CV <Download />
                        </button>
                    </div>

                    {/* Experience & Achievements Section */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "YEARS OF EXPERIENCE", value: "12+" },
                            { label: "COMPLETED PROJECTS", value: "97+" },
                            { label: "HAPPY CUSTOMERS", value: "81+" },
                            { label: "AWARDS WON", value: "53+" }
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-800 p-5 text-center rounded-lg hover:bg-gray-700 transition-all">
                                <h3 className="text-yellow-500 text-3xl">{item.value}</h3>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-center">MY SKILLS</h2>
                    <div className="grid grid-cols-4 gap-4 mt-5">
                        {['HTML', 'JAVASCRIPT', 'CSS', 'PHP','LARAVEL','NEXT JS'].map((skill, index) => (
                            <div key={skill} className="text-center">
                                <div className="relative w-24 h-24 mx-auto">
                                    <svg className="w-full h-full" viewBox="0 0 36 36">
                                        <circle
                                            cx="18"
                                            cy="18"
                                            r="15.5"   
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="3"
                                        />
                                        <circle
                                            cx="18"
                                            cy="18"
                                            r="15.5"
                                            fill="none"
                                            stroke="#fbbf24"
                                            strokeWidth="3"
                                            strokeDasharray={`${[25, 89, 70, 66,90,50][index]} 100`}
                                            className="animate-[pulse_1.5s_ease-in-out_infinite]"
                                        />
                                    </svg>
                                    <span className="absolute inset-0 flex items-center justify-center font-bold">
                                        {[25, 89, 70, 66,90,50][index]}%
                                    </span>
                                </div>
                                <p className="mt-2">{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
