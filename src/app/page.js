import { ContainerGrid } from "@/components/container";
import { TitleSection } from "@/components/title-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <ContainerGrid>
          <TitleSection
            title='Coleções notáveis'
            subtitle='Destaque em Coleções'
            />
        </ContainerGrid>
      </section>
    </>
  );
}
