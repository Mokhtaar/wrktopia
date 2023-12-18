/* eslint-disable @next/next/no-img-element */

const features = [
  {
    name: "Development & IT",
    rating: "4.85/5",
    skill: 1853,
  },
  {
    name: "Graphic Design & Creative Stuff",
    rating: "4.91/5",
    skill: 968,
  },
  {
    name: "Sales & Marketing",
    rating: "4.77/5",
    skill: 392,
  },
  {
    name: "Copy Writing & Translation",
    rating: "4.92/5",
    skill: 505,
  },
  {
    name: "Admin & Customer Support",
    rating: "4.66/5",
    skill: 508,
  },
  {
    name: "Finance & Accounting",
    rating: "4.77/5",
    skill: 214,
  },
  {
    name: "Engineer & Architecture",
    rating: "4.13/5",
    skill: 756,
  },
  {
    name: "Legal",
    rating: "4.85/5",
    skill: 145,
  },
];

export default function TalentCategories() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-28">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl text-center sm:text-start font-medium tracking-normal text-[#2EBF91] sm:text-5xl">
            Browse talent by CATEGORY
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Looking for work?{" "}
            <span className="text-[#2ebf91]">Browse jobs</span>
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-5 gap-y-5 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex px-4 py-5 h-36 bg-[#2EBF911A] flex-col justify-between"
              >
                <div className="h-full">
                  <div className="text-2xl font-normal text-gray-900">
                    {feature.name}
                  </div>
                </div>
                <div className="flex text-sm text-[#25252599] w-full justify-between">
                  <div className="flex gap-x-1">
                    <img
                      src="./star.png"
                      alt="star"
                      className="object-contain"
                    ></img>
                    <p>{feature.rating}</p>
                  </div>
                  <p>{feature.skill} skills</p>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
