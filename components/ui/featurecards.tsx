import { Zap, Shield, RotateCcw } from "lucide-react";

const FeatureCards = () => {
    const features = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Lightning Fast",
            description: "Process files instantly in your browser with no uploads needed"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Privacy First",
            description: "All conversions happen locally, your files never leave your device"
        },
        {
            icon: <RotateCcw className="w-6 h-6" />,
            title: "Any Format",
            description: "Support for all major image, audio, and video formats"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default FeatureCards;