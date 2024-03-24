import React from "react";

const BecomeVolunteerButton = () => {
  return (
    <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
      <div class=" p-2 sm:flex sm:items-center sm:gap-4">
        <a href="become-volunteer">
          <div class="rounded-md mt-1 w-full bg-rose-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-rose-600 sm:mt-0 sm:w-auto sm:shrink-0">
            Become Volunteer
          </div>
        </a>
      </div>
    </div>
  );
};

export default BecomeVolunteerButton;
