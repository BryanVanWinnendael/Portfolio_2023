import { Menu, Transition } from "@headlessui/react"
import Link from "next/link"
import React, { Fragment } from "react"
import { HiOutlineBars3 } from "react-icons/hi2"

const NavButton = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <HiOutlineBars3 className="w-8 h-8 cursor-pointer text-white" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute border-[#2c2e30] border right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#0e0e0e] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 flex flex-col">
            <Menu.Item>
              <Link href="/" className="p-2 hover:bg-[#0c0c0c] rounded-md">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="/projects"
                className="p-2 hover:bg-[#0c0c0c] rounded-md"
              >
                Projects
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="/contact"
                className="p-2 hover:bg-[#0c0c0c] rounded-md"
              >
                Contact
              </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
export default NavButton
