/* eslint-disable @next/next/no-img-element */
import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "TIME RESCURER",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    imageSrc: "/whyWrktopia/1.png",
    href: "#",
  },
  {
    name: "PROFESSIONAL FREELANCERS",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    imageSrc: "/whyWrktopia/2.png",
    href: "#",
  },
  {
    name: "SAFE & EASY PAYMENTS",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    imageSrc: "/whyWrktopia/3.png",
    href: "#",
  },
  {
    name: "FAIR PRICES",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    imageSrc: "/whyWrktopia/4.png",
    href: "#",
  },
  {
    name: "CUSTOMER SUPPORT",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    imageSrc: "/whyWrktopia/5.png",
    href: "#",
  },
];

export default function WhyWrktopia() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto px-4 sm:px-28">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl text-center sm:text-start font-medium tracking-normal text-[#2EBF91] sm:text-4xl">
            WHY WRKTOPIA
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl  grid-cols-1 gap-x-24 gap-y-16 lg:max-w-none lg:grid-cols-5">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col  justify-between items-center"
              >
                <img
                  className="h-24 mb-6 object-cover"
                  src={feature.imageSrc}
                  alt="Feature"
                />
                <div className="h-full">
                  <div className="text-3xl font-semibold tracking-[0.6px] text-gray-900 text-center">
                    {feature.name}
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
