import React from "react";
import profile10 from "./../dist/images/profile-10.jpg";
import logo from "./../dist/images/logo.svg"
import "./app.css"
export default function Index(){
    
    return(
       <React.Fragment>
            <div className="top-bar top-0 left-0 fixed w-full h-16">
                <div className="-intro-y top-bar__content bg-white border-theme-3 dark:bg-dark-2 dark:border-dark-2 border-b w-full h-full flex px-5">
                <a className="hidden md:flex items-center h-full mr-auto" href="http://localhost/page/dashboard">
                <img alt="Topson Messenger Tailwind HTML Admin Template" className="h-8" src={logo}/>
                <div className="text-base font-light ml-4"> <span className="font-medium">Topson</span> Messenger </div>
                </a>
                <a className="mobile-menu-toggler flex md:hidden items-center h-full mr-auto px-5 -ml-5" href> <i data-feather="bar-chart-2" className="w-5 h-5 transform rotate-90"></i> </a>
                <div className="h-full flex items-center">
                <div className="mr-3">Dark Mode</div>
                <input className="form-check-switch" type="checkbox" id="dark-mode-switcher"/>
                </div>
                <div className="hidden md:flex items-center px-5"> <a href data-toggle="modal" data-target="#invite-friends-modal" className="btn btn-primary">Invite Friends</a> </div>
                <div className="notification-dropdown dropdown">
                <a href className="notification-dropdown__toggler text-gray-600 border-theme-7 dark:border-dark-4 dark:text-gray-300 dropdown-toggle h-full flex items-center px-5 relative -mr-3 md:mr-0 md:border-l md:border-r">
                <div className="relative">
                <i data-feather="bell" className="w-5 h-5"></i>
                <div className="w-2 h-2 bg-theme-1 text-white flex items-center justify-center absolute -mt-0.5 top-0 right-0 rounded-full"></div>
                </div>
                </a>
                <div className="notification-dropdown__content dropdown-menu">
                <div className="dropdown-menu__content box dark:bg-dark-2 px-4 pt-4 pb-5">
                <div className="text-base font-medium leading-tight mb-4">Notifications</div>
                <div className="cursor-pointer relative flex items-center ">
                <div className="w-10 h-10 flex-none image-fit mr-1">
                <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
                <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                <div className="flex items-center">
                <a href className="font-medium truncate mr-5">Keanu Reeves</a>
                <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">05:09 AM</div>
                </div>
                <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-6">
                <div className="w-10 h-10 flex-none image-fit mr-1">
                <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
                <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                <div className="flex items-center">
                <a href className="font-medium truncate mr-5">Leonardo DiCaprio</a>
                <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">01:10 PM</div>
                </div>
                <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-6">
                <div className="w-10 h-10 flex-none image-fit mr-1">
                <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
                <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                <div className="flex items-center">
                <a href className="font-medium truncate mr-5">Christian Bale</a>
                <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">05:09 AM</div>
                </div>
                <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-6">
                <div className="w-10 h-10 flex-none image-fit mr-1">
                <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
                <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                <div className="flex items-center">
                <a href className="font-medium truncate mr-5">Kevin Spacey</a>
                <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">06:05 AM</div>
                </div>
                <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-6">
                <div className="w-10 h-10 flex-none image-fit mr-1">
                <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
                <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                <div className="flex items-center">
                <a href className="font-medium truncate mr-5">Tom Hanks</a>
                <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">05:09 AM</div>
                </div>
                <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div className="account-dropdown dropdown relative">
                <a href className="h-full dropdown-toggle flex items-center pl-5">
                <div className="w-8 h-8 image-fit">
                <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full shadow-md" src={profile10}/>
                </div>
                <div className="hidden md:block ml-3">
                <div className="w-28 truncate font-medium leading-tight">Keanu Reeves</div>
                <div className="account-dropdown__info text-xs text-gray-600">Frontend Engineer</div>
                </div>
                </a>
                <div className="dropdown-content dropdown-menu absolute w-56 top-0 right-0 z-20">
                <div className="dropdown-menu__content box dark:bg-dark-2">
                <div className="p-2">
                <a href className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <i data-feather="user" className="w-4 h-4 mr-2"></i> Profile </a>
                <a href className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <i data-feather="edit" className="w-4 h-4 mr-2"></i> Add Account </a>
                <a href className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <i data-feather="lock" className="w-4 h-4 mr-2"></i> Reset Password </a>
                <a href className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <i data-feather="help-circle" className="w-4 h-4 mr-2"></i> Help </a>
                </div>
                <div className="border-gray-200 dark:border-dark-4 p-2 border-t">
                <a href className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <i data-feather="toggle-right" className="w-4 h-4 mr-2"></i> Logout </a>
                </div>
                </div>
                </div>
                </div>
                </div>
            </div>
<div className="modal-invite-friends modal" id="invite-friends-modal" tabindex="-1" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-body p-4">
<div className="intro-y text-lg font-medium">Invite Friends</div>
<div className="modal-content__scrollable overflow-y-auto scrollbar-hidden -mx-4 px-4 mt-4">
<div className="user-list">
<div className="intro-y pb-3">
<div className="intro-y text-gray-500 mb-3">A</div>
<div className="intro-y block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Keanu Reeves</a>
<div className="flex items-center text-xs">
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 14 seconds ago ago</div>
</div>
</div>
<input className="form-check-switch ml-auto" type="checkbox" id="friend-list-a-0"/>
</div>
</div>
<div className="intro-y block">
    <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
        <div className="w-10 h-10 flex-none image-fit mr-1">
            <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
            <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
        </div>
        <div className="ml-2 overflow-hidden">
            <a href className="font-medium">Leonardo DiCaprio</a>
            <div className="flex items-center text-xs">
                <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                    Last seen 10 minutes ago ago
                </div>
            </div>
        </div>
        <input className="form-check-switch ml-auto" type="checkbox" id="friend-list-a-1"/>
    </div>
</div>
    <div className="intro-y block">
        <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
            <div className="w-10 h-10 flex-none image-fit mr-1">
                <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
                <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
            </div>
            <div className="ml-2 overflow-hidden">
                <a href className="font-medium">Christian Bale</a>
                <div className="flex items-center text-xs">
                    <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                        Last seen 15 seconds ago ago
                    </div>
                </div>
            </div>
            <input className="form-check-switch ml-auto" type="checkbox" id="friend-list-a-2"/>
        </div>
    </div>
    <div className="intro-y text-gray-500 mt-6 mb-3">B</div>
        <div className="intro-y block">
            <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
                <div className="w-10 h-10 flex-none image-fit mr-1">
                    <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
                    <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                    <a href className="font-medium">Keanu Reeves</a>
                    <div className="flex items-center text-xs">
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 14 seconds ago ago</div>
                    </div>
                </div>
            <input className="form-check-switch ml-auto" type="checkbox" id="friend-list-b-0"/>
        </div>
    </div>
    <div className="intro-y block">
        <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
            <div className="w-10 h-10 flex-none image-fit mr-1">
                <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
                <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
            </div>
        <div className="ml-2 overflow-hidden">
        <a href className="font-medium">
            Leonardo DiCaprio
        </a>
        <div className="flex items-center text-xs">
            <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                Last seen 10 minutes ago ago
            </div>
        </div>
    </div>
    <input className="form-check-switch ml-auto" type="checkbox" id="friend-list-b-1"/>
    </div>
</div>
<div className="intro-y block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Christian Bale</a>
<div className="flex items-center text-xs">
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 15 seconds ago ago</div>
</div>
</div>
<input className="form-check-switch ml-auto" type="checkbox" id="friend-list-b-2"/>
</div>
</div>
<div className="intro-y block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Kevin Spacey</a>
<div className="flex items-center text-xs">
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 52 seconds ago ago</div>
</div>
</div>
<input className="form-check-switch ml-auto" type="checkbox" id="friend-list-b-3"/>
</div>
</div>
<div className="intro-y text-gray-500 mt-6 mb-3">C</div>
<div className="intro-y block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Keanu Reeves</a>
<div className="flex items-center text-xs">
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 14 seconds ago ago</div>
</div>
</div>
<input className="form-check-switch ml-auto" type="checkbox" id="friend-list-ac-0"/>
</div>
</div>
<div className="intro-y block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Leonardo DiCaprio</a>
<div className="flex items-center text-xs">
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 10 minutes ago ago</div>
</div>
</div>
<input className="form-check-switch ml-auto" type="checkbox" id="friend-list-ac-1"/>
</div>
</div>
</div>
<div className="user-list__action bg-white dark:bg-dark-6 -mx-4 px-4">
<button className="btn btn-primary w-full">Send Invitation</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="side-menu hidden md:block top-0 left-0 fixed w-16 h-screen">
<div className="side-menu__content box border-theme-3 dark:bg-dark-2 dark:border-dark-2 -intro-x border-r w-full h-full pt-16 flex flex-col justify-center overflow-hidden">
<a className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative side-menu__content__link--active tooltip py-5" href data-placement="right" title="Chats" data-content="chats"> <i data-feather="mail" className="w-5 h-5 mx-auto"></i> </a>
<a className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5" href data-placement="right" title="Groups" data-content="groups"> <i data-feather="edit" className="w-5 h-5 mx-auto"></i> </a>
<a className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5" href data-placement="right" title="Contacts" data-content="contacts"> <i data-feather="users" className="w-5 h-5 mx-auto"></i> </a>
<a className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5" href data-placement="right" title="Profile" data-content="profile"> <i data-feather="user" className="w-5 h-5 mx-auto"></i> </a>
<a className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5" href="login.html" data-placement="right" title="Login"> <i data-feather="lock" className="w-5 h-5 mx-auto"></i> </a>
<a className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5" href="register.html" data-placement="right" title="Register"> <i data-feather="user-plus" className="w-5 h-5 mx-auto"></i> </a>
<a className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5" href="settings.html" data-placement="right" title="Settings"> <i data-feather="settings" className="w-5 h-5 mx-auto"></i> </a>
</div>
</div>
<div className="md:pl-16 pt-16">
<div className="-mt-16 ml-auto xl:-ml-16 mr-auto xl:pl-16 pt-16 xl:h-screen w-auto sm:w-3/5 xl:w-auto grid grid-cols-12 gap-6">
<div className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 flex-col overflow-hidden" data-content="profile">
<div className="intro-y text-xl font-medium">Profile</div>
<div className="intro-y box relative px-4 py-6 mt-5">
<a href title="Settings" className="text-gray-600 tooltip w-8 h-8 block flex items-center justify-center absolute top-0 right-0 mr-1 mt-1"> <i data-feather="edit-2" className="w-4 h-4"></i> </a>
<div className="w-20 h-20 mx-auto image-fit">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 top-0 mt-1 mr-1 rounded-full border-2"></div>
</div>
<div className="text-base font-medium text-center mt-3">John Travolta</div>
<div className="text-gray-600 text-center text-xs uppercase mt-0.5">Software Engineer</div>
</div>
<div className="intro-y box p-4 mt-3">
<div className="border-gray-200 dark:border-dark-5 flex items-center border-b pb-3">
<div className="">
<div className="text-gray-600">Country</div>
<div className="capitalize mt-0.5">New York City, USA</div>
</div>
<i data-feather="globe" className="w-4 h-4 text-gray-600 ml-auto"></i>
</div>
<div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
<div className="">
<div className="text-gray-600">Phone</div>
<div className="mt-0.5">+32 19 23 62 24 34</div>
</div>
<i data-feather="mic" className="w-4 h-4 text-gray-600 ml-auto"></i>
</div>
<div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
<div className="">
<div className="text-gray-600">Gender</div>
<div className="capitalize mt-0.5">male</div>
</div>
<i data-feather="mail" className="w-4 h-4 text-gray-600 ml-auto"></i>
</div>
<div className="border-gray-200 dark:border-dark-5 flex items-center py-3">
<div className="">
<div className="text-gray-600">Email</div>
<div className="mt-0.5">johntravolta@left4code.com</div>
</div>
<i data-feather="mail" className="w-4 h-4 text-gray-600 ml-auto"></i>
</div>
</div>
<div className="intro-y box p-4 mt-3">
<div className="border-gray-200 dark:border-dark-5 flex items-center border-b pb-3">
<div className="">
<div className="text-gray-600">Twitter</div>
<a className="mt-0.5" href>@johntravolta</a>
</div>
<i data-feather="twitter" className="w-4 h-4 text-gray-600 ml-auto"></i>
</div>
<div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
<div className="">
<div className="text-gray-600">Facebook</div>
<a className="mt-0.5" href>johntravolta</a>
</div>
<i data-feather="facebook" className="w-4 h-4 text-gray-600 ml-auto"></i>
</div>
<div className="border-gray-200 dark:border-dark-5 flex items-center py-3">
<div className="">
<div className="text-gray-600">Instagram</div>
<a className="mt-0.5" href>@johntravolta</a>
</div>
<i data-feather="instagram" className="w-4 h-4 text-gray-600 ml-auto"></i>
</div>
</div>
</div>
<div className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 flex-col overflow-hidden" data-content="contacts">
<div className="intro-y text-xl font-medium">Contacts</div>
<div className="intro-y relative mt-5 mb-6">
<input type="text" className="form-control box py-3 px-4 border-transparent pr-8" placeholder="Search for contacts..."/>
<i data-feather="search" className="text-gray-600 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3"></i>
</div>
<div className="intro-y overflow-y-auto scrollbar-hidden -mx-5 px-5">
<div className="user-list">
<div className="intro-x">
<div className="intro-x text-gray-500 mb-3">A</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">John Travolta</a>
<div className="flex items-center text-xs mt-0.5">
<div className="text-gray-600 dark:text-gray-500 truncate">Last seen 26 seconds ago ago</div>
</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Brad Pitt</a>
<div className="flex items-center text-xs mt-0.5">
<div className="text-gray-600 dark:text-gray-500 truncate">Last seen 59 seconds ago ago</div>
</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Leonardo DiCaprio</a>
<div className="flex items-center text-xs mt-0.5">
<div className="text-gray-600 dark:text-gray-500 truncate">Last seen 29 seconds ago ago</div>
</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
</div>
<div className="intro-x text-gray-500 mt-6 mb-3">B</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">John Travolta</a>
<div className="flex items-center text-xs mt-0.5">
<div className="text-gray-600 dark:text-gray-500 truncate">Last seen 26 seconds ago ago</div>
</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Brad Pitt</a>
<div className="flex items-center text-xs mt-0.5">
<div className="text-gray-600 dark:text-gray-500 truncate">Last seen 59 seconds ago ago</div>
</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Leonardo DiCaprio</a>
<div className="flex items-center text-xs mt-0.5">
<div className="text-gray-600 dark:text-gray-500 truncate">Last seen 29 seconds ago ago</div>
</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Sylvester Stallone</a>
<div className="flex items-center text-xs mt-0.5">
<div className="text-gray-600 dark:text-gray-500 truncate">Last seen 42 minutes ago ago</div>
</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
</div>
<div className="intro-x text-gray-500 mt-6 mb-3">C</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">John Travolta</a>
<div className="flex items-center text-xs mt-0.5">
<div className="text-gray-600 dark:text-gray-500 truncate">Last seen 26 seconds ago ago</div>
</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Brad Pitt</a>
<div className="flex items-center text-xs mt-0.5">
<div className="text-gray-600 dark:text-gray-500 truncate">Last seen 59 seconds ago ago</div>
</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 side-content--active flex-col overflow-hidden" data-content="chats">
<div className="intro-y text-xl font-medium">Chats</div>
<div className="intro-y relative mt-5">
<input type="text" className="form-control box py-3 px-4 border-transparent pr-8" placeholder="Search for messages or users..."/>
<i data-feather="search" className="text-gray-600 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3"></i>
</div>
<div className="intro-y flex-none overflow-x-auto overflow-y-hidden scrollbar-hidden">
<div className="flex mt-6">
<a href className="w-12 mr-3 cursor-pointer tooltip" title="John Travolta">
<div className="w-12 h-12 flex-none image-fit rounded-full">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="text-gray-600 dark:text-gray-500 truncate text-center mt-2">John Travolta</div>
</a>
<a href className="w-12 mr-3 cursor-pointer tooltip" title="Brad Pitt">
<div className="w-12 h-12 flex-none image-fit rounded-full">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="text-gray-600 dark:text-gray-500 truncate text-center mt-2">Brad Pitt</div>
</a>
<a href className="w-12 mr-3 cursor-pointer tooltip" title="Leonardo DiCaprio">
<div className="w-12 h-12 flex-none image-fit rounded-full">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="text-gray-600 dark:text-gray-500 truncate text-center mt-2">Leonardo DiCaprio</div>
</a>
<a href className="w-12 mr-3 cursor-pointer tooltip" title="Sylvester Stallone">
<div className="w-12 h-12 flex-none image-fit rounded-full">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="text-gray-600 dark:text-gray-500 truncate text-center mt-2">Sylvester Stallone</div>
</a>
<a href className="w-12 mr-3 cursor-pointer tooltip" title="Johnny Depp">
<div className="w-12 h-12 flex-none image-fit rounded-full">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="text-gray-600 dark:text-gray-500 truncate text-center mt-2">Johnny Depp</div>
</a>
<a href className="w-12 mr-3 cursor-pointer tooltip" title="Russell Crowe">
<div className="w-12 h-12 flex-none image-fit rounded-full">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="text-gray-600 dark:text-gray-500 truncate text-center mt-2">Russell Crowe</div>
</a>
<a href className="w-12 mr-3 cursor-pointer tooltip" title="Arnold Schwarzenegger">
<div className="w-12 h-12 flex-none image-fit rounded-full">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="text-gray-600 dark:text-gray-500 truncate text-center mt-2">Arnold Schwarzenegger</div>
</a>
<a href className="w-12 mr-3 cursor-pointer tooltip" title="Sylvester Stallone">
<div className="w-12 h-12 flex-none image-fit rounded-full">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="text-gray-600 dark:text-gray-500 truncate text-center mt-2">Sylvester Stallone</div>
</a>
<a href className="w-12 mr-3 cursor-pointer tooltip" title="Al Pacino">
<div className="w-12 h-12 flex-none image-fit rounded-full">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
</div>
<div className="text-gray-600 dark:text-gray-500 truncate text-center mt-2">Al Pacino</div>
</a>
<a href className="w-12 mr-3 cursor-pointer tooltip" title="Angelina Jolie">
<div className="w-12 h-12 flex-none image-fit rounded-full">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
</div>
<div className="text-gray-600 dark:text-gray-500 truncate text-center mt-2">Angelina Jolie</div>
</a>
</div>
</div>
<div className="intro-y text-base font-medium leading-tight mt-3">Recent Chats</div>
<div className="intro-y overflow-y-auto scrollbar-hidden pt-2 mt-3 -mx-5 px-5">
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 bg-theme-1 dark:bg-theme-1">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-white">John Travolta</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-white">03:20 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-white" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Brad Pitt</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Leonardo DiCaprio</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">05:09 AM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Sylvester Stallone</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Johnny Depp</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Russell Crowe</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Arnold Schwarzenegger</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Sylvester Stallone</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Al Pacino</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Angelina Jolie</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">06:05 AM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Russell Crowe</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Al Pacino</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">06:05 AM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Bruce Willis</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Brad Pitt</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Keanu Reeves</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Christian Bale</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Leonardo DiCaprio</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Tom Cruise</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Kevin Spacey</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">01:10 PM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
<div className="intro-x">
<div className="zoom-in">
<div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium text-gray-800 dark:text-white">Denzel Washington</a>
<div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
</div>
<div className="flex flex-col">
<div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">05:09 AM</div>
<div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
<a className="dropdown-toggle block text-opacity-70 text-gray-500" href> <i data-feather="chevron-down" className="w-6 h-6"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share Contact </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="copy" className="w-4 h-4 mr-2"></i> Copy Contact </a>
</div>
</div>
</div>
</div>
<div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
</div>
</div>
</div>
</div>
</div>
<div className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 flex-col overflow-hidden" data-content="groups">
<div className="intro-y text-xl font-medium">Create Group</div>
<div className="intro-y box p-2 mt-5 mb-6">
<div className="boxed-tabs nav nav-tabs justify-center flex" role="tablist"> <a data-toggle="tab" data-target="#group-members" href className="hover:bg-gray-100 dark:hover:bg-dark-2 flex-1 py-2 rounded-md text-center active" id="group-members-tab" role="tab" aria-controls="group-members" aria-selected="true">Members</a> <a data-toggle="tab" data-target="#group-details" href className="hover:bg-gray-100 dark:hover:bg-dark-2 flex-1 py-2 rounded-md text-center" id="group-details-tab" role="tab" aria-controls="group-details" aria-selected="false">Details</a> </div>
</div>
<div className="intro-y overflow-y-auto scrollbar-hidden -mx-5 px-5">
<div className="tab-content">
<div className="tab-pane active" id="group-members" role="tabpanel" aria-labelledby="group-members-tab">
<div className="user-list">
<div className="intro-x pb-6">
<div className="intro-x text-gray-500 mb-3">A</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">John Travolta</a>
<div className="flex items-center text-xs">
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 26 seconds ago ago</div>
</div>
</div>
<input className="form-check-switch ml-auto" type="checkbox" id="user-list-a-0"/>
</div>
</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Brad Pitt</a>
<div className="flex items-center text-xs">
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 59 seconds ago ago</div>
</div>
</div>
<input className="form-check-switch ml-auto" type="checkbox" id="user-list-a-1"/>
</div>
</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Leonardo DiCaprio</a>
<div className="flex items-center text-xs">
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 29 seconds ago ago</div>
</div>
</div>
<input className="form-check-switch ml-auto" type="checkbox" id="user-list-a-2"/>
</div>
</div>
<div className="intro-x text-gray-500 mt-6 mb-3">B</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">John Travolta</a>
<div className="flex items-center text-xs">
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 26 seconds ago ago</div>
</div>
</div>
<input className="form-check-switch ml-auto" type="checkbox" id="user-list-b-0"/>
</div>
</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Brad Pitt</a>
<div className="flex items-center text-xs">
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 59 seconds ago ago</div>
</div>
</div>
<input className="form-check-switch ml-auto" type="checkbox" id="user-list-b-1"/>
</div>
</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Leonardo DiCaprio</a>
<div className="flex items-center text-xs">
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 29 seconds ago ago</div>
</div>
</div>
<input className="form-check-switch ml-auto" type="checkbox" id="user-list-b-2"/>
</div>
</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Sylvester Stallone</a>
<div className="flex items-center text-xs">
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 42 minutes ago ago</div>
</div>
</div>
<input className="form-check-switch ml-auto" type="checkbox" id="user-list-b-3"/>
</div>
</div>
<div className="intro-x text-gray-500 mt-6 mb-3">C</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">John Travolta</a>
<div className="flex items-center text-xs">
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 26 seconds ago ago</div>
</div>
</div>
<input className="form-check-switch ml-auto" type="checkbox" id="user-list-c-0"/>
</div>
</div>
<div className="intro-x block">
<div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
<div className="w-10 h-10 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="font-medium">Brad Pitt</a>
<div className="flex items-center text-xs">
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 59 seconds ago ago</div>
</div>
</div>
<input className="form-check-switch ml-auto" type="checkbox" id="user-list-c-1"/>
</div>
</div>
</div>
<div className="user-list__action bg-theme-2 dark:bg-dark-6 -mx-5 px-5 pb-6">
<button className="btn btn-primary text-white w-full">Next</button>
</div>
</div>
</div>
<div className="tab-pane" id="group-details" role="tabpanel" aria-labelledby="group-details-tab">
<div className="box p-4 mt-3 mb-6">
<div>
<label for="create-group-form-1" className="form-label">Photo</label>
<div className="image-upload border shadow-sm relative flex flex-col items-center justify-center rounded-md py-8 mt-3">
<div className="image-upload__icon w-12 h-12 rounded-full flex items-center justify-center"> <i data-feather="image" className="w-5 h-5"></i> </div>
<div className="image-upload__info mt-2">Choose your group profile photo</div>
<input type="file" className="w-full h-full top-0 left-0 absolute opacity-0" id="create-group-form-1"/>
</div>
</div>
<div className="mt-3">
<label for="create-group-form-2" className="form-label">Group Name</label>
<input type="text" className="form-control" id="create-group-form-2"/>
</div>
<div className="mt-3">
<label for="create-group-form-3" className="form-label">Tagline</label>
<input type="text" className="form-control" id="create-group-form-3"/>
</div>
<div className="mt-3">
<label for="create-group-form-4" className="form-label">Public</label>
<div className="form-check">
<input type="checkbox" className="form-check-switch" id="create-group-form-4"/>
</div>
</div>
<div className="mt-3">
<label for="create-group-form-5" className="form-label">Description</label>
<textarea className="form-control" rows="5" id="create-group-form-5"></textarea>
</div>
<button className="btn btn-primary w-full mt-3">Create Group</button>
</div>
</div>
</div>
</div>
</div>
<div className="chat-box border-theme-5 col-span-12 xl:col-span-6 flex flex-col overflow-hidden xl:border-l xl:border-r p-6">
<div className="intro-y box border border-theme-3 dark:bg-dark-2 dark:border-dark-2 flex items-center px-5 py-4">
<div className="flex items-center mr-auto">
<div className="w-12 h-12 flex-none image-fit mr-1">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 w-3 h-3 absolute right-0 top-0 rounded-full border-2 border-white"></div>
</div>
<div className="ml-2 overflow-hidden">
<a href className="text-base font-medium">John Travolta</a>
<div className="text-gray-600">Online</div>
</div>
</div>
<a className="text-gray-600 hover:text-theme-1" href> <i data-feather="camera" className="w-4 h-4 sm:w-6 sm:h-6"></i> </a>
<a className="text-gray-600 hover:text-theme-1 ml-2 sm:ml-5" href> <i data-feather="mic" className="w-4 h-4 sm:w-6 sm:h-6"></i> </a>
</div>
<div className="overflow-y-scroll scrollbar-hidden pt-5 flex-1">
<div className="-intro-x chat-text-box flex items-end float-left mb-4">
<div className="chat-text-box__photo w-10 h-10 hidden sm:block flex-none image-fit relative mr-4">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
</div>
<div className="w-full">
<div>
<div className="chat-text-box__content flex items-center float-left">
<div className="box leading-relaxed dark:text-gray-300 text-gray-700 px-4 py-3 mt-3"> Lorem ipsum sit <a className="text-theme-1" href>@edwardnorton</a> amen dolor, lorem ipsum sit amen dolor </div>
<div className="hidden sm:block dropdown relative ml-3 mt-3">
<a href className="dropdown-toggle w-4 h-4"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="corner-up-left" className="w-4 h-4 mr-2"></i> Reply </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="trash" className="w-4 h-4 mr-2"></i> Delete </a>
</div>
</div>
</div>
</div>
<div className="clear-both"></div>
<div className="chat-text-box__content flex items-center float-left">
<div className="box text-gray-700 dark:text-gray-300 flex flex-col sm:flex-row items-center mt-3 p-3">
<div className="chat-text-box__content__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">JPG</div>
</div>
<div className="sm:ml-3 mt-3 sm:mt-0 text-center sm:text-left">
<div className="text-gray-700 dark:text-gray-300 whitespace-nowrap font-medium">preview-8.jpg</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">1.2 MB Image File</div>
</div>
<div className="sm:ml-20 mt-3 sm:mt-0 flex">
<a href title="Download" className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center sm:ml-2"> <i data-feather="download" className="w-4 h-4"></i> </a>
<a href title="Share" className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center ml-2"> <i data-feather="share" className="w-4 h-4"></i> </a>
<a href title="Permission" className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center ml-2"> <i data-feather="more-horizontal" className="w-4 h-4"></i> </a>
</div>
</div>
<div className="hidden sm:block dropdown relative ml-3 mt-3">
<a href className="dropdown-toggle w-4 h-4"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="corner-up-left" className="w-4 h-4 mr-2"></i> Reply </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="trash" className="w-4 h-4 mr-2"></i> Delete </a>
</div>
</div>
</div>
</div>
</div>
<div className="clear-both mb-2"></div>
<div className="text-gray-600 text-xs">2 mins ago</div>
</div>
</div>
<div className="clear-both"></div>
<div className="intro-x chat-text-box flex items-end float-right mb-4">
<div className="w-full">
<div>
<div className="chat-text-box__content flex items-center float-right">
<div className="hidden sm:block dropdown relative mr-3 mt-3">
<a href className="dropdown-toggle w-4 h-4"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="corner-up-left" className="w-4 h-4 mr-2"></i> Reply </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="trash" className="w-4 h-4 mr-2"></i> Delete </a>
</div>
</div>
</div>
<div className="box leading-relaxed bg-theme-1 text-opacity-80 text-white px-4 py-3 mt-3"> Lorem ipsum sit <a className="text-white" href>@morganfreeman</a> amen dolor, lorem ipsum sit amen dolor </div>
</div>
<div className="clear-both"></div>
<div className="chat-text-box__content flex items-center float-right">
<div className="hidden sm:block dropdown relative mr-3 mt-3">
<a href className="dropdown-toggle w-4 h-4"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="corner-up-left" className="w-4 h-4 mr-2"></i> Reply </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="trash" className="w-4 h-4 mr-2"></i> Delete </a>
</div>
</div>
</div>
<div className="rounded-md text-gray-700 chat-text-box__content__text--image flex justify-end mt-3">
<div className="tooltip w-16 h-16 image-fit zoom-in" title="preview-4.jpg">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-md" src={profile10}/>
</div>
<div className="tooltip w-16 h-16 image-fit ml-2 zoom-in" title="preview-4.jpg">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-md" src={profile10}/>
</div>
<div className="tooltip w-16 h-16 image-fit ml-2 zoom-in" title="preview-4.jpg">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-md" src={profile10}/>
</div>
</div>
</div>
</div>
<div className="clear-both mb-2"></div>
<div className="text-gray-600 text-xs text-right">1 mins ago</div>
</div>
<div className="chat-text-box__photo w-10 h-10 hidden sm:block flex-none image-fit relative ml-4">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
</div>
</div>
<div className="clear-both"></div>
<div className="intro-y text-gray-500 text-xs text-center mb-6 mt-5">12 June 2020</div>
<div className="-intro-x chat-text-box flex items-end float-left mb-4">
<div className="chat-text-box__photo w-10 h-10 hidden sm:block flex-none image-fit relative mr-4">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
</div>
<div className="w-full">
<div>
<div className="chat-text-box__content flex items-center float-left">
<div className="box leading-relaxed dark:text-gray-300 text-gray-700 px-4 py-3 mt-3"> Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor </div>
<div className="hidden sm:block dropdown relative ml-3 mt-3">
<a href className="dropdown-toggle w-4 h-4"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="corner-up-left" className="w-4 h-4 mr-2"></i> Reply </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="trash" className="w-4 h-4 mr-2"></i> Delete </a>
</div>
</div>
</div>
</div>
<div className="clear-both"></div>
<div className="chat-text-box__content flex items-center float-left">
<div className="rounded-md text-gray-700 chat-text-box__content__text--image flex justify-end mt-3">
<div className="tooltip w-16 h-16 image-fit zoom-in" title="preview-4.jpg">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-md" src={profile10}/>
</div>
<div className="tooltip w-16 h-16 image-fit ml-2 zoom-in" title="preview-12.jpg">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-md" src={profile10}/>
</div>
</div>
<div className="hidden sm:block dropdown relative ml-3 mt-3">
<a href className="dropdown-toggle w-4 h-4"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="corner-up-left" className="w-4 h-4 mr-2"></i> Reply </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="trash" className="w-4 h-4 mr-2"></i> Delete </a>
</div>
</div>
</div>
</div>
<div className="clear-both"></div>
<div className="chat-text-box__content flex items-center float-left">
<div className="box leading-relaxed dark:text-gray-300 text-gray-700 px-4 py-3 mt-3"> Contrary to popular belief </div>
<div className="hidden sm:block dropdown relative ml-3 mt-3">
<a href className="dropdown-toggle w-4 h-4"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="corner-up-left" className="w-4 h-4 mr-2"></i> Reply </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="trash" className="w-4 h-4 mr-2"></i> Delete </a>
</div>
</div>
</div>
</div>
</div>
<div className="clear-both mb-2"></div>
<div className="text-gray-600 text-xs">10 secs ago</div>
</div>
</div>
<div className="clear-both"></div>
<div className="intro-x chat-text-box flex items-end float-right mb-4">
<div className="w-full">
<div>
<div className="chat-text-box__content flex items-center float-right">
<div className="hidden sm:block dropdown relative mr-3 mt-3">
<a href className="dropdown-toggle w-4 h-4"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="corner-up-left" className="w-4 h-4 mr-2"></i> Reply </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="trash" className="w-4 h-4 mr-2"></i> Delete </a>
</div>
</div>
</div>
<div className="box leading-relaxed bg-theme-1 text-opacity-80 text-white px-4 py-3 mt-3"> Lorem ipsum </div>
</div>
<div className="clear-both"></div>
<div className="chat-text-box__content flex items-center float-right">
<div className="hidden sm:block dropdown relative mr-3 mt-3">
<a href className="dropdown-toggle w-4 h-4"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="corner-up-left" className="w-4 h-4 mr-2"></i> Reply </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="trash" className="w-4 h-4 mr-2"></i> Delete </a>
</div>
</div>
</div>
<div className="box leading-relaxed text-gray-700 dark:text-gray-300 flex flex-col sm:flex-row items-center mt-3 p-3">
<div className="chat-text-box__content__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">PNG</div>
</div>
<div className="sm:ml-3 mt-3 sm:mt-0 text-center sm:text-left">
<div className="text-gray-700 dark:text-gray-300 whitespace-nowrap font-medium">preview-10.jpg</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">1.4 MB Image File</div>
</div>
<div className="sm:ml-20 mt-3 sm:mt-0 flex">
<a href title="Download" className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center ml-2"> <i data-feather="download" className="w-4 h-4"></i> </a>
<a href title="Share" className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center ml-2"> <i data-feather="share" className="w-4 h-4"></i> </a>
<a href title="Permission" className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center ml-2"> <i data-feather="more-horizontal" className="w-4 h-4"></i> </a>
</div>
</div>
</div>
</div>
<div className="clear-both mb-2"></div>
<div className="text-gray-600 text-xs text-right">1 secs ago</div>
</div>
<div className="chat-text-box__photo w-10 h-10 hidden sm:block flex-none image-fit relative ml-4">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
</div>
</div>
<div className="clear-both"></div>
<div className="-intro-x chat-text-box flex items-end float-left mb-4">
<div className="w-10 h-10 hidden sm:block flex-none image-fit relative mr-5">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
</div>
<div className="w-full">
<div>
<div className="chat-text-box__content flex items-center float-left">
<div className="box leading-relaxed dark:text-gray-300 text-gray-700 px-4 py-3 mt-3">
John Travolta is typing
<span className="typing-dots ml-1"> <span>.</span> <span>.</span> <span>.</span> </span>
</div>
</div>
</div>
</div>
</div>

</div>
<div className="intro-y chat-input box border-theme-3 dark:bg-dark-2 dark:border-dark-2 border flex items-center px-5 py-4">
<div className="dropdown relative" data-placement="top">
<a href className="text-gray-600 hover:text-theme-1 dropdown-toggle"> <i data-feather="plus" className="w-5 h-5 sm:w-6 sm:h-6"></i> </a>
<div className="chat-input__dropdown dropdown-menu">
<div className="dropdown-menu__content p-2">
<a href className="shadow-md text-gray-600 bg-white rounded-full dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center block p-3 transition duration-300 rounded-md mb-2"> <i data-feather="camera" className="w-5 h-5"></i> </a>
<a href className="shadow-md text-gray-600 bg-white rounded-full dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center block p-3 transition duration-300 rounded-md mb-2"> <i data-feather="mic" className="w-5 h-5"></i> </a>
<a href className="shadow-md text-gray-600 bg-white rounded-full dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center block p-3 transition duration-300 rounded-md mb-2"> <i data-feather="mail" className="w-5 h-5"></i> </a>
</div>
</div>
</div>
<textarea className="form-control h-12 shadow-none resize-none border-transparent px-5 py-3 focus:shadow-none truncate mr-3 sm:mr-0" rows="1" placeholder="Type your message..."></textarea>
<div className="dropdown relative mr-3 sm:mr-5" data-placement="top-end">
<a href className="text-gray-600 hover:text-theme-1 dropdown-toggle w-4 h-4 sm:w-5 sm:h-5 block"> <i data-feather="smile" className="w-full h-full"></i> </a>
<div className="chat-input__smiley dropdown-menu">
<div className="dropdown-menu__content box dark:text-gray-300 dark:bg-dark-3 shadow-md">
<div className="chat-input__smiley__box flex flex-col pb-3 -mt-2">
<div className="px-3 pt-5">
<div className="relative">
<input type="text" className="form-control bg-gray-200 border-transparent pr-10" placeholder="Search emojis..."/>
<i className="w-5 h-5 absolute my-auto inset-y-0 mr-3 right-0" data-feather="search"></i>
</div>
</div>
<div className="chat-input__smiley__box__tabs text-gray-600 nav nav-tabs flex px-3 mt-5" role="tablist">
<a data-toggle="tab" data-target="#history" href className="py-2 flex justify-center flex-1 rounded hover:bg-gray-200 dark:hover:bg-dark-2 active" id="history-tab" role="tab" aria-controls="history" aria-selected="true">
<svg className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor" d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"></path>
</svg>
</a>
<a data-toggle="tab" data-target="#smile" href className="py-2 flex justify-center flex-1 rounded hover:bg-gray-200 dark:hover:bg-dark-2" id="smile-tab" role="tab" aria-controls="smile" aria-selected="false">
<svg className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
<path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"></path>
</svg>
</a>
<a data-toggle="tab" data-target="#cat" href className="py-2 flex justify-center flex-1 rounded hover:bg-gray-200 dark:hover:bg-dark-2" id="cat-tab" role="tab" aria-controls="cat" aria-selected="false">
<svg className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor" d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"></path>
</svg>
</a>
<a data-toggle="tab" data-target="#coffee" href className="py-2 flex justify-center flex-1 rounded hover:bg-gray-200 dark:hover:bg-dark-2" id="coffee-tab" role="tab" aria-controls="coffee" aria-selected="false">
<svg className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
<path fill="currentColor" d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path>
</svg>
</a>
<a data-toggle="tab" data-target="#futbol" href className="py-2 flex justify-center flex-1 rounded hover:bg-gray-200 dark:hover:bg-dark-2" id="futbol-tab" role="tab" aria-controls="futbol" aria-selected="false">
<svg className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"></path>
</svg>
</a>
<a data-toggle="tab" data-target="#building" href className="py-2 flex justify-center flex-1 rounded hover:bg-gray-200 dark:hover:bg-dark-2" id="building-tab" role="tab" aria-controls="building" aria-selected="false">
<svg className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path fill="currentColor" d="M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"></path>
</svg>
</a>
<a data-toggle="tab" data-target="#lightbulb" href className="py-2 flex justify-center flex-1 rounded hover:bg-gray-200 dark:hover:bg-dark-2" id="lightbulb-tab" role="tab" aria-controls="lightbulb" aria-selected="false">
<svg className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
<path fill="currentColor" d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"></path>
</svg>
</a>
<a data-toggle="tab" data-target="#music" href className="py-2 flex justify-center flex-1 rounded hover:bg-gray-200 dark:hover:bg-dark-2" id="music-tab" role="tab" aria-controls="music" aria-selected="false">
<svg className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor" d="M511.99 32.01c0-21.71-21.1-37.01-41.6-30.51L150.4 96c-13.3 4.2-22.4 16.5-22.4 30.5v261.42c-10.05-2.38-20.72-3.92-32-3.92-53.02 0-96 28.65-96 64s42.98 64 96 64 96-28.65 96-64V214.31l256-75.02v184.63c-10.05-2.38-20.72-3.92-32-3.92-53.02 0-96 28.65-96 64s42.98 64 96 64 96-28.65 96-64l-.01-351.99z"></path>
</svg>
</a>
</div>
<div className="tab-content overflow-hidden mt-5">
<div className="h-full tab-pane active" id="history" role="tabpanel" aria-labelledby="history-tab">
<div className="font-medium px-3">Recent Emojis</div>
<div className="h-full pb-10 px-2 overflow-y-auto scrollbar-hidden mt-2">
<div className="grid grid-cols-8 text-2xl">
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😂</button>
</div>
</div>
</div>
<div className="h-full tab-pane" id="smile" role="tabpanel" aria-labelledby="smile-tab">
<div className="font-medium px-3">Smileys & People</div>
<div className="h-full pb-10 px-2 overflow-y-auto scrollbar-hidden mt-2">
<div className="grid grid-cols-8 text-2xl">
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😃</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😆</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😍</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😘</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😙</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☺️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤩</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😶</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😥</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😮</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😯</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😴</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😜</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😝</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙃</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😲</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☹️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😞</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😟</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😢</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😭</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😩</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤯</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😰</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😱</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😵</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😷</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤢</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤮</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😇</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤥</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤭</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👿</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👹</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👺</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☠️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👻</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👽</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👾</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💩</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😺</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😸</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😹</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😻</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😼</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😽</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😿</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">😾</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👶</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👴</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👵</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;⚕️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;⚕️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;🎓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;🎓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;🏫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;🏫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;⚖️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;⚖️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;🌾</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;🌾</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;🍳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;🍳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;🔧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;🔧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;🏭</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;🏭</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;💼</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;💼</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;🔬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;🔬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;💻</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;💻</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;🎤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;🎤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;🎨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;🎨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;✈️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;✈️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;🚀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;🚀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;🚒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;🚒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👮</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👮&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👮&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕵️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕵️&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕵️&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💂&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💂&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👷</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👷&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👷&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤴</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👸</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👳&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👳&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👲</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👱</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👱&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👱&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤵</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👰</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤰</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤱</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👼</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤶</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧙</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧙&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧙&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧚&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧚&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧛&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧛&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧜</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧜&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧜&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧝</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧝&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧝&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧞</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧞&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧞&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧟</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧟&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧟&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙍</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙍&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙍&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙎&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙎&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙅&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙅&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙆</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙆&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙆&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💁&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💁&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙋&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙋&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙇</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙇&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙇&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤦&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤦&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤷</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤷&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤷&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💆</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💆&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💆&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💇</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💇&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💇&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚶</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚶&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚶&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏃</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏃&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏃&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💃</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕺</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👯</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👯&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👯&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧖&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧖&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧗&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧗&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧘</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧘&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧘&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕴️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗣️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👥</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤺</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏇</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛷️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏌️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏌️&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏌️&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏄&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏄&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚣&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚣&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏊&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏊&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛹️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛹️&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛹️&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏋️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏋️&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏋️&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚴</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚴&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚴&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚵</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚵&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚵&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏎️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏍️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤸</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤸&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤸&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤼</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤼&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤼&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤽</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤽&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤽&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤾</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤾&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤾&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤹</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤹&zwj;♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤹&zwj;♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👭</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;❤️&zwj;💋&zwj;👨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;❤️&zwj;💋&zwj;👨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;❤️&zwj;💋&zwj;👩</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;❤️&zwj;👨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;❤️&zwj;👨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;❤️&zwj;👩</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👩&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👩&zwj;👧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👩&zwj;👧&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👩&zwj;👦&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👩&zwj;👧&zwj;👧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👨&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👨&zwj;👧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👨&zwj;👧&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👨&zwj;👦&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👨&zwj;👧&zwj;👧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;👩&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;👩&zwj;👧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;👩&zwj;👧&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;👩&zwj;👦&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;👩&zwj;👧&zwj;👧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👦&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👧&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👨&zwj;👧&zwj;👧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;👦&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;👧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;👧&zwj;👦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👩&zwj;👧&zwj;👧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☝️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👆</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🖕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👇</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✌️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤞</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🖖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤘</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤙</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🖐️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👍</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤜</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤟</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✍️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤲</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🙏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🤝</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👃</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👁️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👁️&zwj;🗨️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💘</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">❤️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💙</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💜</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🖤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💝</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💞</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💟</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">❣️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💢</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💥</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗨️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗯️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💭</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕳️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕶️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧥</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👘</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👙</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👜</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👝</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛍️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👞</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👟</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👢</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">👒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎩</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧢</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛑️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📿</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💍</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💎</button>
</div>
</div>
</div>
<div className="h-full tab-pane" id="cat" role="tabpanel" aria-labelledby="cat-tab">
<div className="font-medium px-3">Animals & Nature</div>
<div className="h-full pb-10 px-2 overflow-y-auto scrollbar-hidden mt-2">
<div className="grid grid-cols-8 text-2xl">
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐵</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦍</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐶</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐩</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐺</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐱</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐯</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐆</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐴</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐮</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐃</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐷</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐽</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐘</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐭</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐹</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐰</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐇</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐿️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦇</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐻</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐼</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐾</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦃</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐥</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕊️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦆</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐸</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐢</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐍</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐲</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐟</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐙</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐜</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐝</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🐞</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕷️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕸️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🦂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌸</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💮</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏵️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌹</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌺</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌻</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌼</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌷</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌱</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌲</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌴</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌵</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌾</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌿</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☘️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍃</button>
</div>
</div>
</div>
<div className="h-full tab-pane" id="coffee" role="tabpanel" aria-labelledby="coffee-tab">
<div className="font-medium px-3">Food & Drink</div>
<div className="h-full pb-10 px-2 overflow-y-auto scrollbar-hidden mt-2">
<div className="grid grid-cols-8 text-2xl">
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍇</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍍</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥝</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥥</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍆</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌽</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌶️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥜</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌰</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍞</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥞</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🧀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥩</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍟</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌭</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌮</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌯</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥙</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥘</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍲</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍿</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍱</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍘</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍙</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍜</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍝</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍢</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍥</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥟</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍩</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍰</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍭</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍮</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍯</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍼</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍵</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍶</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍾</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍷</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍸</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍹</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍺</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍻</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥃</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥢</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍽️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🍴</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏺</button>
</div>
</div>
</div>
<div className="h-full tab-pane" id="futbol" role="tabpanel" aria-labelledby="futbol-tab">
<div className="font-medium px-3">Activities</div>
<div className="h-full pb-10 px-2 overflow-y-auto scrollbar-hidden mt-2">
<div className="grid grid-cols-8 text-2xl">
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎃</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎆</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎇</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎍</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎗️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎟️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎖️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏆</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥇</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚽</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚾</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎾</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎱</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏸</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎯</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛸️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎽</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎿</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛷</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎮</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕹️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎲</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♠️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♥️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♦️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♣️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🃏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🀄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎴</button>
</div>
</div>
</div>
<div className="h-full tab-pane" id="building" role="tabpanel" aria-labelledby="building-tab">
<div className="font-medium px-3">Travel & Places</div>
<div className="h-full pb-10 px-2 overflow-y-auto scrollbar-hidden mt-2">
<div className="grid grid-cols-8 text-2xl">
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌍</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗺️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗾</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏔️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛰️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗻</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏕️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏖️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏜️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏝️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏞️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏟️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏛️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏗️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏘️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏙️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏚️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏢</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏥</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏩</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏭</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏯</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏰</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗼</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗽</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕍</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛩️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛲</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛺</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌃</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌆</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌇</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♨️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎢</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎭</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🖼️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎰</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚃</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚆</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚇</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚝</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚞</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚍</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚘</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚙</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚜</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚲</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛴</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛵</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛣️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛤️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛽</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚥</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛵</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛶</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛳️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛴️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛥️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚢</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✈️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛩️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💺</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚟</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛰️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛸</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛎️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛏️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛋️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚽</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚿</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⌛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⌚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏰</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏱️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏲️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕰️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕜</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕝</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕞</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕟</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕢</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕘</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕙</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕥</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌘</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌙</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌜</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌡️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌝</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌞</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⭐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌟</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☁️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛈️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌤️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌥️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌦️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌧️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌨️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌩️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌪️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌫️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌬️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛱️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">❄️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☃️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☄️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔥</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🌊</button>
</div>
</div>
</div>
<div className="h-full tab-pane" id="lightbulb" role="tabpanel" aria-labelledby="lightbulb-tab">
<div className="font-medium px-3">Objects</div>
<div className="h-full pb-10 px-2 overflow-y-auto scrollbar-hidden mt-2">
<div className="grid grid-cols-8 text-2xl">
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔇</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📢</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📯</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎼</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎵</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎶</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎙️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎚️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎛️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📻</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎷</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎸</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎹</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎺</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎻</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🥁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📱</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📲</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☎️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📞</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📟</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💻</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🖥️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🖨️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⌨️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🖱️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🖲️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💽</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💾</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💿</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎥</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎞️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📽️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📺</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📷</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📸</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📹</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📼</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔍</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔭</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕯️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏮</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📘</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📙</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📃</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📜</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📰</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗞️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏷️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💰</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💴</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💵</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💶</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💷</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💸</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💹</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💱</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💲</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✉️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📩</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📥</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📭</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📮</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗳️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✏️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✒️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🖋️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🖊️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🖌️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🖍️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📝</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💼</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📆</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗒️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗓️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📇</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📍</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🖇️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗃️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗄️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗑️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗝️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔨</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛏️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚒️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛠️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗡️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚔️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏹</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛡️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔩</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚙️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗜️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚗️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚖️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛓️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚰️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚱️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🗿</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛢️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔮</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛒</button>
</div>
</div>
</div>
<div className="h-full tab-pane" id="music" role="tabpanel" aria-labelledby="music-tab">
<div className="font-medium px-3">Symbols</div>
<div className="h-full pb-10 px-2 overflow-y-auto scrollbar-hidden mt-2">
<div className="grid grid-cols-8 text-2xl">
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🏧</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚮</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚰</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♿</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚹</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚺</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚻</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚼</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚾</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛃</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚠️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚸</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚭</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚯</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚱</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🚷</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📵</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔞</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☢️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☣️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⬆️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">↗️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">➡️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">↘️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⬇️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">↙️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⬅️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">↖️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">↕️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">↔️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">↩️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">↪️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⤴️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⤵️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔃</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔄</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔙</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔜</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔝</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🛐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚛️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕉️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✡️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☸️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☯️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✝️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☦️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☪️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☮️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🕎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔯</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♈</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♉</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♊</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♋</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♍</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♏</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⛎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔀</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔂</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">▶️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏩</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏭️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏯️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">◀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏮️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔼</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔽</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏬</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏸️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏹️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏺️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⏏️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🎦</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔆</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📶</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📴</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♀️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚕️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">♻️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚜️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔱</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">📛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔰</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⭕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✅</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">☑️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✔️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✖️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">❌</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">❎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">➕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">➖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">➗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">➰</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">➿</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">〽️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✳️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">✴️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">❇️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">‼️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⁉️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">❓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">❔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">❕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">❗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">〰️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">©️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">®️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">™️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">#️⃣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">*️⃣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">0️⃣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">1️⃣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">2️⃣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">3️⃣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">4️⃣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">5️⃣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">6️⃣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">7️⃣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">8️⃣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">9️⃣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔟</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💯</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔡</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔢</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔣</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔤</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🅰️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🆎</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🅱️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🆑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🆒</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🆓</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">ℹ️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🆔</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">Ⓜ️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🆕</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🆖</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🅾️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🆗</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🅿️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🆘</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🆙</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🆚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🈁</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🈂️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🈷️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🈶</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🈯</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🉐</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🈹</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🈚</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🈲</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🉑</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🈸</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🈴</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🈳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">㊗️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">㊙️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🈺</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🈵</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">▪️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">▫️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">◻️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">◼️</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">◽</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">◾</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⬛</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⬜</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔶</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔷</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔸</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔹</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔺</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔻</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">💠</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔘</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔲</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔳</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚪</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">⚫</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔴</button>
<button className="rounded hover:bg-gray-200 dark:hover:bg-dark-2 focus:outline-none">🔵</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<a href className="bg-theme-1 text-white w-8 h-8 sm:w-10 sm:h-10 block rounded-full flex-none flex items-center justify-center"> <i data-feather="send" className="w-4 h-4 sm:w-5 sm:h-5"></i> </a>
</div>
</div>
<div className="info-content col-span-12 xl:col-span-3 flex flex-col overflow-hidden pl-6 xl:pl-0 pr-6">
<div className="overflow-y-auto scrollbar-hidden py-6">
<div className="intro-y box relative px-4 py-6">
<a href title="Settings" className="text-gray-600 tooltip w-8 h-8 block flex items-center justify-center absolute top-0 right-0 mr-1 mt-1"> <i data-feather="edit-2" className="w-4 h-4"></i> </a>
<div className="w-20 h-20 mx-auto image-fit">
<img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={profile10}/>
<div className="bg-green-500 border-white w-3 h-3 absolute right-0 top-0 mt-1 mr-1 rounded-full border-2"></div>
</div>
<div className="text-base font-medium text-center mt-3">John Travolta</div>
<div className="text-gray-600 text-center text-xs uppercase mt-0.5">Software Engineer</div>
</div>
<div className="intro-y box p-4 mt-3">
<div className="text-base font-medium">Personal Information</div>
<div className="mt-4">
<div className="border-gray-200 dark:border-dark-5 flex items-center border-b pb-3">
<div className="">
<div className="text-gray-600">Country</div>
<div className="mt-0.5">New York City, USA</div>
</div>
<i data-feather="globe" className="w-4 h-4 text-gray-600 ml-auto"></i>
</div>
<div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
<div className="">
<div className="text-gray-600">Phone</div>
<div className="mt-0.5">+32 19 23 62 24 34</div>
</div>
<i data-feather="mic" className="w-4 h-4 text-gray-600 ml-auto"></i>
</div>
<div className="border-gray-200 dark:border-dark-5 flex items-center py-3">
<div className="">
<div className="text-gray-600">Email</div>
<div className="mt-0.5">johntravolta@left4code.com</div>
</div>
<i data-feather="mail" className="w-4 h-4 text-gray-600 ml-auto"></i>
</div>
</div>
</div>
<div className="intro-y h-full box flex flex-col p-4 mt-3">
<div className="text-base font-medium">Shared Files</div>
<div className="mt-4 overflow-x-hidden overflow-y-auto scrollbar-hidden">
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative ">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">JPG</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">preview-8.jpg</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">1.2 MB Image File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">MP4</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">Celine Dion - Ashes.mp4</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">20 MB Audio File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">PDF</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">Laravel 7</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">120 MB Document File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">ZIP</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">Repository</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">20 KB Zipped File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">JPG</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">preview-3.jpg</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">1.2 MB Image File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">JPG</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">preview-10.jpg</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">1.2 MB Image File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">JPG</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">preview-11.jpg</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">1.2 MB Image File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">JPG</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">preview-6.jpg</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">1 MB Image File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">TXT</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">Resources.txt</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">2.2 MB Text File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">PDF</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">Documentation</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">4 MB Document File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">MP4</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">Celine Dion - Ashes.mp4</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">20 MB Audio File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">PDF</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">Documentation</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">4 MB Document File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">TXT</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">Resources.txt</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">2.2 MB Text File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">JPG</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">preview-11.jpg</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">1.2 MB Image File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">PDF</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">Laravel 7</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">120 MB Document File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">JPG</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">preview-13.jpg</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">1.2 MB Image File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">JPG</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">preview-8.jpg</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">1.2 MB Image File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">JPG</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">preview-5.jpg</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">1 MB Image File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">PHP</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">Routes.php</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">1 KB Script File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
<div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
<div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
<div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">PHP</div>
</div>
<div className="w-full ml-3">
<div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">Routes.php</div>
<div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">1 KB Script File</div>
</div>
<div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
<a className="dropdown-toggle w-4 h-4" href aria-expanded="false"> <i data-feather="more-vertical" className="w-4 h-4"></i> </a>
<div className="dropdown-menu w-40">
<div className="dropdown-menu__content box dark:bg-dark-1 p-2">
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 mr-2"></i> Share </a>
<a href className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 mr-2"></i> Download </a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
       </React.Fragment>
    )
}