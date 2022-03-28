import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  id: number;
}
export const FavoriteCardPokemon: FC<Props> = ({ id }) => {
  const { push } = useRouter();

  const onFavoriteClick = () => {
    push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} lg={1}>
      <Card
        hoverable
        clickable
        css={{ padding: "10px" }}
        onClick={onFavoriteClick}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
