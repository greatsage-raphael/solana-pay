import Productsusd from '../../components/Productsusd'
import SiteHeading from '../../components/SiteHeading'

export default function ShopPage() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl items-stretch m-auto pt-24">
      <SiteHeading>Biiso Coffee</SiteHeading>
      <Productsusd submitTarget='/shop/checkout' enabled={true} />    </div>
  )
}