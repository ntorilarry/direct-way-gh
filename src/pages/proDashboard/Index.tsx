import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Navbar from "../../shared/Navbar";
import Leads from "./Leads";

const tabs = [
  {
    title: "Leads",
    content: <Leads />,
  },
  {
    title: "Item two",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    title: "Item three",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
];

export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-2 py-24 sm:px-0">
        <Tab.Group>
          <Tab.List className="space-x-2">
            {tabs.map((tab) => (
              <Tab key={tab.title} as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`${
                      selected
                        ? "border-b-[#4187ED] text-heading"
                        : "border-transparent text-text"
                    } border-b-2 py-2 px-4 text-base font-semibold focus:bg-white focus:outline-none`}
                  >
                    {tab.title}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-4">
            {tabs.map((tab) => (
              <Tab.Panel key={tab.title}>
                {/* <h2 className="text-sm font-semibold text-heading">
                {tab.title}
              </h2> */}
                <p className="text-sm text-text">{tab.content}</p>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
