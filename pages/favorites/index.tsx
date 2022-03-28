import { Card, Grid } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Layout } from "../../Components/Layouts";
import { FavoritePokemons } from "../../Components/pokemon";
import { NoFavorites } from "../../Components/ui";
import { localFavorites } from "../../utils";

const Favorites = () => {
  const [favoritesPokemos, setFavoritesPokemos] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemos(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites">
      {favoritesPokemos.length == 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritesPokemos} />
      )}
    </Layout>
  );
};

export default Favorites;
