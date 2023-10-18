import { ISubTitle } from '@/interfaces'

const SubTitle = ({ title }: ISubTitle) => {
  return <h2 className="mb-5 text-t-md text-gray-400 max-sm:hidden">{title}</h2>
}

export default SubTitle
