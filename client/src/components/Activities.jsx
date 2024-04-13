import React from "react";

// Icons
import { MdOutlineWarningAmber } from "react-icons/md";
import { RiCommunityFill } from "react-icons/ri";
import { RiPlantFill } from "react-icons/ri";
import { FaPeace } from "react-icons/fa6";
import { MdVolunteerActivism } from "react-icons/md";

const Activities = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 lg:items-stretch">
          <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
            <div className="flex flex-col  mx-auto max-w-md text-center lg:text-left">
              <header className="flex flex-col items-center">
                <img
                  src="../img/KKO.png"
                  className="w-24 pb-10"
                  alt="KKO Logo"
                />
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  What we do?
                </h2>

                <p className="mt-4 text-gray-500 text-left">
                  Khudai Khidmatgar Organization (KKO), The successor to Khan
                  Abdul Ghaffar Khan's movement, focuses on disaster management,
                  arts and culture, civil society development, community
                  development, democracy, environment, humanitarian relief,
                  peace, and volunteerism. Inspired by Khan's principles, it
                  aims to bring about positive change through grassroots
                  initiatives and collaborative efforts.
                </p>
              </header>

              <a
                href="activities"
                className="mt-8 w-fit inline-block rounded border border-rose-900 bg-rose-900 hover:bg-rose-500 hover:border-red-300 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="flex flex-wrap place-content-center gap-3 rounded bg-gray-100 p-6 sm:p-8">
            <div className="flex w-40 flex-col items-center bg-yellow-200 h-fit p-4 rounded-lg justify-center shadow-md">
              <MdOutlineWarningAmber className="text-5xl" />
              <h4 className="mt-2 text-center leading-4">
                Disaster Management
              </h4>
            </div>
            <div className="flex w-40 flex-col items-center bg-blue-200 h-fit p-4 rounded-lg justify-center shadow-md">
              <RiCommunityFill className="text-5xl" />
              <h4 className="mt-2 text-center leading-4">
                Civil Society Development
              </h4>
            </div>
            <div className="flex w-40 flex-col items-center bg-rose-800/25 h-fit p-4 rounded-lg justify-center shadow-md">
              <MdOutlineWarningAmber className="text-5xl" />
              <h4 className="mt-2 text-center leading-4">
                Art & Culture Preservation
              </h4>
            </div>
            <div className="flex w-40 flex-col items-center bg-green-200 h-fit p-4 rounded-lg justify-center shadow-md">
              <RiPlantFill className="text-5xl" />
              <h4 className="mt-2 text-center leading-4">
                Enivromental Development
              </h4>
            </div>
            <div className="flex w-40 flex-col items-center bg-gray-200 h-fit p-4 rounded-lg justify-center shadow-md">
              <FaPeace className="text-5xl" />
              <h4 className="mt-2 text-center leading-4">Struggle For Peace</h4>
            </div>
            <div className="flex w-40 flex-col items-center bg-pink-200 h-fit p-4 rounded-lg justify-center shadow-md">
              <MdVolunteerActivism className="text-5xl" />
              <h4 className="mt-2 text-center leading-4">
                Volunteerism Thought
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
