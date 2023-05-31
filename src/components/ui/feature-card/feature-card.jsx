import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Feature, Image, Owner, Header, Text } from "./styles";

function FeatureCard({
  title, //название особенности
  owner, // владелец особенности (обычный магазин, фермерский)
  about, //описание особенности
  isNegative, //является ли особенность отрицательной
  image //иконка
}) {
  return (
    <Feature isNegative={isNegative}>
      <Header>
        <Image src={image} alt={title} width={56} height={56} />
        <div>
          <Owner isNegative={isNegative}>{owner}</Owner>
          <Title size={TitleSize.EXTRA_SMALL} as="h3">
            {title}
          </Title>
        </div>
      </Header>
      <Text
        size={TitleSize.EXTRA_SMALL}
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </Feature>
  );
}

export default FeatureCard;
