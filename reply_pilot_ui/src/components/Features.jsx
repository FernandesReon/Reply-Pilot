import { CheckCircle, Copy, Zap } from "lucide-react";

const Features = () => {

    const features = [
        {
            title: "Lightning Fast",
            description: "Generate professional replies in seconds with AI-powered assistance.",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            icon: <Zap />
        },
        {
            title: "Multiple Tones",
            description: "Choose from various reply types to match your communication style.",
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            icon: <CheckCircle />
        },
        {
            title: "Easy Copy",
            description: "One-click copy to clipboard for seamless message sharing.",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
            icon: <Copy />
        }
    ]

    return (
        <div className="mt-12 grid md:grid-cols-3 gap-6">
            {
                features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                        <div className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                            <span className={`text-xl ${feature.iconColor}`}>{feature.icon}</span>
                            {/* Replace feature.icon with the actual Lucide component like <Bolt /> */}
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Features;