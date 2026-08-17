import { PageFrame, ProductCards, RFQBand } from '@/components/marketing-page'

export const metadata = {
  title: 'Products & Wear Systems Catalog | WearGuard™',
  description: 'Explore specialized wear component packages for Dryer Drums, Mixers & Liners, Filter Systems, Bucket Elevators, Transfer Points, and Earthmoving Equipment.',
}

export default function ProductsPage() {
  return (
    <PageFrame
      eyebrow="PRODUCTS / WEAR SYSTEMS CATALOG"
      title={
        <>
          PARTS THAT<br />
          <em>OUTWEAR OEM.</em>
        </>
      }
      intro="From one replacement part to a full-plant wear strategy, each system is engineered around the actual impact, abrasion, thermal, and corrosion forces in your plant."
    >
      <ProductCards />
      <RFQBand />
    </PageFrame>
  )
}
