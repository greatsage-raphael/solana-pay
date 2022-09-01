import BackLink from '../components/BackLink';
import Confirmed from '../components/Confirmed';
import PageHeading from '../components/PageHeading';

export default function ConfirmedPage() {
  return (
    <div className='flex flex-col gap-8 items-center'>
      <BackLink href='/'>Home</BackLink>

      <PageHeading>Thank you ❤️, enjoy your cookies! Love from Kampala</PageHeading>

      <div className='h-80 w-80'><Confirmed /></div>
    </div>
  )
}
