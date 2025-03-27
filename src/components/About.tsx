import { Download } from "@mui/icons-material";
import { Link } from "@mui/material";
export default function AboutMe() {
    return (

        <div className=" text-white py-10 px-5">
            <h1 className="text-4xl font-bold text-center text-white">
                ABOUT <span className="text-yellow-500">ME</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
                {/* Personal Info Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-5">PERSONAL INFOS</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "First Name", value: "Prince" },
                            { label: "Last Name", value: "Kumar" },
                            { label: "Age", value: "25 Years" },
                            { label: "Nationality", value: "India" },
                            { label: "Freelance", value: <span className="text-green-500">Available</span> },
                            { label: "Address", value: "Chandigarh, India" },
                            { label: "Phone", value: "+91- 9882374011 " },
                            { label: "Email", value: "princekumar74011@gmail.com, pk7542663@gmail.com" },
                            { label: "Skype", value: "prince.choudhary" },
                            { label: "Languages", value: "English, Hindi" }
                        ].map((info, index) => (
                            <p key={index}>
                                <span >{info.label}:</span> <span className="font-bold">{info.value}</span>
                            </p>
                        ))}
                    </div>

                    {/* <button className="button">
                        <p className="title">DOWNLOAD CV</p>
                        <Download className="button-img" />
                        <p className="description">Enjoy Unlimited<br />Benefits</p>
                    </button> */}
                    <div className="col-sm-12 col-md-6 ">
                        <Link className="dedcription-btn" href="#">
                            <span className="name-descripeion">DOWNLOAD CV </span>
                            <div className="btn-icon brain text-white">
                            <Download /></div>
                        </Link>
                    </div>
                </div>

                {/* Experience & Achievements Section */}
                <div className="row g-4">
                    {[
                        { label: "YEARS OF EXPERIENCE", value: "5+" },
                        { label: "COMPLETED PROJECTS", value: "10+" },
                        { label: "HAPPY CUSTOMERS", value: "7+" },
                        { label: "AWARDS WON", value: "5+" }
                    ].map((item, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-6">
                            <div className="accordion bg-gray-800 p-5 text-center rounded-lg hover:bg-yellow-500 transition-all">
                                <h3 className="text-yellow-500 text-3xl">{item.value}</h3>
                                <p>{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Skills Section */}
            <div className="row mt-5">
                <div className="col-12 text-center mb-4">
                    <h2 className="text-2xl font-bold">MY SKILLS</h2>
                </div>

                {['HTML', 'JAVASCRIPT', 'CSS', 'PHP', 'WORDPRESS', 'LARAVEL', 'NEXT JS'].map((skill, index) => (
                    <div key={skill} className="col-6 col-md-4 col-lg-3 text-center mb-4">
                        <div className="position-relative w-100" style={{ maxWidth: '100px', margin: '0 auto' }}>
                            <svg className="w-100" viewBox="0 0 36 36">
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
                                    strokeDasharray={`${[25, 89, 70, 66, 80, 90, 50][index]} 100`}
                                    className="animate-[pulse_1.5s_ease-in-out_infinite]"
                                />
                            </svg>
                            <span className="position-absolute top-50 start-50 translate-middle fw-bold">
                                {[25, 89, 70, 66, 80, 90, 50][index]}%
                            </span>
                        </div>
                        <p className="mt-2">{skill}</p>
                    </div>
                ))}
            </div>

        </div>

    );
}
