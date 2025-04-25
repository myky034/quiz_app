import { useState } from "react";
import { NavLink, Link } from "react-router";

import { Button, Menu, Dropdown, Avatar, MenuProps } from "antd";

import { HiMiniChevronDown } from "react-icons/hi2";
import { HiSearch } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  MessageOutlined,
  LockOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import classes from "./MainNavigation.module.css";
import { BiChevronDown } from "react-icons/bi";

const navItems = [
  { label: "Home", url: "/", key: "home" },
  { label: "Events", url: "/events", key: "events" },
  { label: "About", url: "/about", key: "about" },
  { label: "Setting", url: "/setting", key: "setting" },
];

const avatarItems: MenuProps["items"] = [
  { label: "My profile", key: "profile", icon: <UserOutlined /> },
  { label: "Settings", key: "settings", icon: <SettingOutlined /> },
  { label: "Privacy policy", key: "privacy", icon: <LockOutlined /> },
  { label: "Share feedback", key: "feedback", icon: <MessageOutlined /> },
  { type: "divider" }, // Divider replacement
  { label: "Sign out", key: "logout", icon: <LogoutOutlined />, danger: true },
];

const dropdownItems: MenuProps["items"] = [
  { label: "Create quiz", key: "newQuiz", icon: <PlusOutlined /> },
];

export default function MainNavigation() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className='flex items-center px-4'>
        <div className='py-2.5 lg:hidden'>
          <span className='relative'>
            <div>
              {/* <Drawer.Root
                open={open}
                onOpenChange={(e) => setOpen(e.open)}>
                <Drawer.Trigger asChild>
                  <Button
                    variant='outline'
                    size='sm'>
                    Open Drawer
                  </Button>
                </Drawer.Trigger>
                <Portal>
                  <Drawer.Backdrop />
                  <Drawer.Positioner>
                    <Drawer.Content>
                      <Drawer.Header>
                        <span className='relative'>
                          <MenuGroup />
                        </span>
                      </Drawer.Header>
                      <Drawer.Body>
                        <div className='flex flex-col gap-0.5'>
                          {navItems.map(({ label, url }) => (
                            <span className='relative'>
                              <NavLink
                                to={url}
                                className={({ isActive }) =>
                                  isActive ? classes.active : undefined
                                }
                                end
                                onClick={handleClose}>
                                {label}
                              </NavLink>
                            </span>
                          ))}
                        </div>
                      </Drawer.Body>
                      <Drawer.CloseTrigger asChild>
                        <CloseButton size='sm' />
                      </Drawer.CloseTrigger>
                    </Drawer.Content>
                  </Drawer.Positioner>
                </Portal>
              </Drawer.Root> */}
            </div>
          </span>
        </div>
        <div className='min-w-0 flex-1'>
          <nav className='flex flex-1 items-center gap-4 py-2.5'>
            <span className='relative'>
              <Dropdown
                menu={{ items: dropdownItems }}
                trigger={["click"]}>
                <Button
                  type='text'
                  aria-label='Settings'
                  icon={<BiChevronDown />}
                  iconPosition='end'>
                  Quiz app
                </Button>
              </Dropdown>
            </span>
            <div className='max-lg:hidden h-6 w-px bg-zinc-950/10 dark:bg-white/10'></div>
            <div className='max-lg:hidden flex items-center gap-3'>
              <span className='relative'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end>
                  Home
                </NavLink>
              </span>
              <span className='relative'>
                <NavLink
                  to='/events'
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }>
                  Events
                </NavLink>
              </span>
              <span className='relative'>
                <NavLink
                  to='/about'
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }>
                  About
                </NavLink>
              </span>
              <span className='relative'>
                <NavLink
                  to='/setting'
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }>
                  Setting
                </NavLink>
              </span>
            </div>
            <div className='-ml-4 flex-1'></div>
            <div className='flex items-center gap-3'>
              <span className='relative'>
                <Button
                  icon={<HiSearch />}
                  type='text' // Equivalent to "transparent" in Chakra UI
                  aria-label='Search database'
                  style={{
                    color: "grey",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "#18181b";
                    (e.target as HTMLElement).style.background =
                      "var(--color-gray-custom-230)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "grey";
                    (e.target as HTMLElement).style.background = "transparent";
                  }}
                />
              </span>
              <span className='relative'>
                <Button
                  type='text' // Equivalent to transparent background
                  aria-label='Search database'
                  icon={<LuSettings />} // Adjust size if needed
                  style={{
                    color: "grey",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "#18181b";
                    (e.target as HTMLElement).style.background =
                      "var(--color-gray-custom-230)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "grey";
                    (e.target as HTMLElement).style.background = "transparent";
                  }}
                />
              </span>
              <span className='relative'>
                <Dropdown
                  menu={{ items: avatarItems }}
                  trigger={["click"]}>
                  <Avatar
                    src='https://bit.ly/dan-abramov' // Replace with user image
                    size='small'
                    style={{ cursor: "pointer" }}
                  />
                </Dropdown>
              </span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
