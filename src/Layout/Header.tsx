import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth, useUser } from 'reactfire';
import TailwindHelper from '../tailwind-helper';
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'My queue', href: '/queue', current: false },
  { name: 'My tickets', href: '/tickets', current: false },
];

export const Header = () => {
  const { status, data: user } = useUser();
  const auth = useAuth();
  let navigate = useNavigate();

  const logout = () => {
    auth.signOut();
    navigate('/login');
  };

  const userNavigation = [
    { name: 'Your Profile', href: '/profile' },
    {
      name: 'Sign out',
      action: () => {
        logout();
      },
    },
  ];
  return (
    <Disclosure as="nav" className="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
              <div className="px-2 flex items-center lg:px-0">
                <div className="flex-shrink-0">
                  <img
                    className="block h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=300"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden lg:block lg:ml-10">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) => {
                          return TailwindHelper.classNames(
                            isActive
                              ? 'bg-indigo-700 text-white'
                              : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                            'rounded-md py-2 px-3 text-sm font-medium'
                          );
                        }}
                        aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:block lg:ml-4">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="bg-indigo-600 flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative flex-shrink-0">
                    <div>
                      <Menu.Button className="bg-indigo-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img className="rounded-full h-8 w-8" src={user?.photoURL ?? ''} alt="" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map(item => (
                          <Menu.Item key={item.name}>
                            {({ active }) => {
                              if (item.href) {
                                return (
                                  <NavLink
                                    to={item.href}
                                    className={TailwindHelper.classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block py-2 px-4 text-sm text-gray-700'
                                    )}>
                                    {item.name}
                                  </NavLink>
                                );
                              } else if (item.action) {
                                return (
                                  <div
                                    className="block py-2 px-4 text-sm text-gray-700 cursor-pointer"
                                    onClick={item.action}>
                                    {item.name}
                                  </div>
                                );
                              } else {
                                return <div>{item.name}</div>;
                              }
                            }}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={TailwindHelper.classNames(
                    item.current ? 'bg-indigo-700 text-white' : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                    'block rounded-md py-2 px-3 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            {status === 'loading' && user && (
              <div className="pt-4 pb-3 border-t border-indigo-700">
                <div className="px-5 flex items-center">
                  <div className="flex-shrink-0">
                    <img className="rounded-full h-10 w-10" src={user.photoURL ?? ''} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">{user.displayName}</div>
                    <div className="text-sm font-medium text-indigo-300">{user.email}</div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto bg-indigo-600 flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {userNavigation.map(item => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75">
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
