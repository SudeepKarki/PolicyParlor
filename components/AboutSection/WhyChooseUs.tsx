import {
  LayoutGrid,
  Users,
  Lightbulb,
  Headphones,
  ShieldCheck,
  Compass,
} from "lucide-react";

const features = [
  {
    title: "Explore Our Services",
    description:
      "The Company was a wholly owned subsidiary of The Oriental Government Security Life",
    icon: LayoutGrid,
  },
  {
    title: "Client-Center Approach",
    description:
      "The Company was a wholly owned subsidiary of The Oriental Government Security Life",
    icon: Users,
  },
  {
    title: "Innovative Thinking",
    description:
      "The Company was a wholly owned subsidiary of The Oriental Government Security Life",
    icon: Lightbulb,
  },
  {
    title: "Reliable Support",
    description:
      "The Company was a wholly owned subsidiary of The Oriental Government Security Life",
    icon: Headphones,
  },
  {
    title: "Transparency",
    description:
      "The Company was a wholly owned subsidiary of The Oriental Government Security Life",
    icon: ShieldCheck,
  },
  {
    title: "Explore Our Services",
    description:
      "The Company was a wholly owned subsidiary of The Oriental Government Security Life",
    icon: Compass,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-white text-center">
      <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
        Why Choose Us?
      </h2>
      <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
        The Company was a wholly owned subsidiary of The Oriental Government
        Security Life Assurance Company Ltd.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="border border-green-400 rounded-lg p-6 text-left hover:shadow-md transition duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
