import { CardNFT } from "@/components/card-nft";
import { ContainerGrid } from "@/components/container";

import ImageNft01 from '@/assets/img-neft/01.jpg';


export default function Home() {
  return (
    <>
      <section>
        <ContainerGrid>
          <CardNFT
            thumbnail={ImageNft01}
            name='Cat 221'
            value='0.0721'
            value_brl='602,02'
          />
        </ContainerGrid>
      </section>
    </>
  );
}
