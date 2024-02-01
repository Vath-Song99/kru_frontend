import React from "react";
import { Dropdown, InputForm, ShowDropdown, LinkDropdown, LinkDropdownPage } from "@/components";
const Home = () => {
  return (
    <div>
      <InputForm width="sm" height="sm" placholder="Enter your email" />
      <InputForm width="sm" height="sm" placholder="Enter your email" />
      <Dropdown
        className="my-custom-dropdown left-1/2 text-sm"
        buttonContent="hello thon"
      >
        <ShowDropdown  aling="right-0" className=" w-56  mt-1" role="menu" >
          <LinkDropdown className="py-1" role="none">
            <LinkDropdownPage className="text-gray-700 block px-4 py-2 text-sm" id="menu-item-1" href="/gogo">
            Home
            </LinkDropdownPage>
          </LinkDropdown>
          <LinkDropdown className="py-1" role="none">
            <LinkDropdownPage className="text-gray-700 block px-4 py-2 text-sm" id="menu-item-1" href="/gogo">
            about
            </LinkDropdownPage>
          </LinkDropdown>
        </ShowDropdown>
     
      </Dropdown>

    </div>
  );
};

export default Home;
