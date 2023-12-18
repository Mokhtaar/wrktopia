"use client";
import { useState } from "react";

interface TabType {
  name: string;
  href: string;
  current: boolean;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {

  const intialTabs = [
    { name: "WHY WRKTOPIA", href: "#", current: true },
    { name: "HIRE TALENTS", href: "#", current: false },
    { name: "CATEGORIES", href: "#", current: false },
    { name: "WHAT PEOPLE SAY", href: "#", current: false },
    { name: "CONTACT US", href: "#", current: false },
  ];
  
  const [tabs, setTabs] = useState(intialTabs);

  const handleTabSelection = (selectedTab: TabType) => {
    const updatedTabs = tabs.map((tab) => ({
      ...tab,
      current: tab.name === selectedTab.name,
    }));
    console.log(updatedTabs);
    setTabs(updatedTabs);
  };

  return (
    <>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current)?.name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav
          className="flex items-center px-10 text-lg bg-white rounded-full shadow isolate font-poppins"
          aria-label="Tabs"
        >
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src="/logo.png" className="h-10 w-44" />
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              onClick={() => handleTabSelection(tab)}
              className={classNames(
                tab.current
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-700",
                // tabIdx === 0 ? "rounded-l-lg" : "",
                // tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                "group min-w-0 relative h-full flex-1 overflow-hidden py-6 w-44 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
              )}
              aria-current={tab.current ? "page" : false}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? "bg-[#2EBF91]" : "bg-transparent",
                  "absolute inset-x-0 bottom-0 h-0.5"
                )}
              />
            </a>
          ))}
          <div>
            <button
              type="button"
              className="btn px-10 py-2 text-lg font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              LOGIN
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
