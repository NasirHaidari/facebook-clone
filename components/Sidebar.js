import { session, useSession } from 'next-auth/client'
import SidebarRow from './SidebarRow'
import {
  BellIcon,
  CalendarIcon,
  ChatIcon,
  ChevronDownIcon,
  ClockIcon,
  DesktopComputerIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingBagIcon,
} from '@heroicons/react/outline'

const Sidebar = () => {
  const [Session, loading] = useSession()
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
      <SidebarRow src={Session.user.image} title={Session.user.name} />
      <SidebarRow Icon={UserIcon} title='Friends' />
      <SidebarRow Icon={UserGroupIcon} title='Group' />
      <SidebarRow Icon={ShoppingBagIcon} title='MarketPlace' />
      <SidebarRow Icon={DesktopComputerIcon} title='Watch' />
      <SidebarRow Icon={CalendarIcon} title='Events' />
      <SidebarRow Icon={ClockIcon} title='Memories' />
      <SidebarRow Icon={ChevronDownIcon} title='See More' />
    </div>
  )
}

export default Sidebar
