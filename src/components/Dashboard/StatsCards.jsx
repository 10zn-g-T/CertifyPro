import {
    FiFileText,
    FiBook,
    FiUsers,
    FiAward,
} from "react-icons/fi";

function StatsCards({ certificates }) {

    const total = certificates.length;

    const courses =
        new Set(certificates.map(c => c.course)).size;

    const institutions =
        new Set(certificates.map(c => c.institution)).size;

    const verified =
        certificates.filter(c => c.certificateId).length;

    const cards = [

        {
            title: "Certificates",
            value: total,
            icon: <FiFileText size={30} />,
            color: "bg-blue-600",
        },

        {
            title: "Courses",
            value: courses,
            icon: <FiBook size={30} />,
            color: "bg-green-600",
        },

        {
            title: "Institutions",
            value: institutions,
            icon: <FiUsers size={30} />,
            color: "bg-purple-600",
        },

        {
            title: "Verified",
            value: verified,
            icon: <FiAward size={30} />,
            color: "bg-orange-500",
        },

    ];

    return (

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

            {cards.map((card, index) => (

                <div
                    key={index}
                    className={`${card.color} text-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300`}
                >

                    <div className="flex justify-between">

                        <div>

                            <p className="text-sm opacity-80">
                                {card.title}
                            </p>

                            <h2 className="text-4xl font-black mt-3">
                                {card.value}
                            </h2>

                        </div>

                        {card.icon}

                    </div>

                </div>

            ))}

        </div>

    );
}

export default StatsCards;