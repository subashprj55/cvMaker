import { CgProfile } from 'react-icons/cg'
import { MdCastForEducation, MdOutlineLanguage } from 'react-icons/md'
import { BsBagCheck } from 'react-icons/bs'
import { AiOutlineProject } from 'react-icons/ai'
import { HiOutlineLightBulb } from 'react-icons/hi'

export const SideBarData = [
  {
    id: 0,
    name: 'about',
    icon: CgProfile,
    link: '/basicInfo',
  },
  {
    id: 1,
    name: 'Education',
    icon: MdCastForEducation,
    link: '/education',
  },
  {
    id: 2,
    name: 'experience',
    icon: BsBagCheck,
    link: '/experience',
  },
  // {
  //   id: 3,
  //   name: 'project',
  //   icon: AiOutlineProject,
  //   link: '/basicInfo',
  // },
  // {
  //   id: 4,
  //   name: 'skills',
  //   icon: HiOutlineLightBulb,
  //   link: '/basicInfo',
  // },
  // {
  //   id: 5,
  //   name: 'language',
  //   icon: MdOutlineLanguage,
  //   link: '/basicInfo',
  // },
]
