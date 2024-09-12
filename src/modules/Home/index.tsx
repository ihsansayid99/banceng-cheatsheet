import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { FC } from "react";
import viteLogo from "/vite.svg";
import { useCreateDeckQuery, useLazyGetAllCardsQuery } from "@/api";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCards, toggleCardSelection } from "@/reducer/Decks/decks.reducer";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  // const { config, mutations } = useAppSelector((state) => state.decksApi);
  const { cards, selectedCardIds } = useAppSelector((state) => state.decks);
  const { data, isLoading } = useCreateDeckQuery({});
  const [getCards, { data: dataCards, isLoading: isLoadingCard }] =
    useLazyGetAllCardsQuery({});

  const onGenerateDecks = async () => {
    try {
      const { deck_id } = data;
      const res = await getCards(deck_id).unwrap();
      dispatch(setCards(res?.cards));
      console.log("res", res);
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleCardClick = (cardId: string) => {
    dispatch(toggleCardSelection(cardId));
  };

  return (
    <>
      {!isLoadingCard && dataCards?.success && (
        <Box mt={"1rem"} mb={"1rem"}>
          <Heading
            color={"brand.primary"}
            fontSize={"2em"}
            textAlign={"center"}
          >
            Banceng Cheatsheet
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(4, 1fr)", md: "repeat(13, 1fr)" }}
            gap={6}
            mt={"3rem"}
          >
            {cards?.map((x) => {
              const isSelected = selectedCardIds.includes(x.code as any);
              return (
                <GridItem
                  borderRadius={'8px'}
                  border={isSelected ? "3px solid black" : "none"}
                  cursor={"pointer"}
                  onClick={() => handleCardClick(x.code)}
                >
                  <Image src={x.image} />
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      )}
      <Box
        display={!isLoadingCard && dataCards?.success ? "none" : "flex"}
        justifyContent={"center"}
        flexDir={"column"}
        alignItems={"center"}
        height={"95vh"}
      >
        <Heading color={"brand.primary"} fontSize={"2em"} textAlign={"center"}>
          Banceng Cheatsheet
        </Heading>
        {isLoading && (
          <Box my={"1rem"}>
            <Spinner />
          </Box>
        )}
        {!isLoading && data?.success && dataCards === undefined && (
          <Box
            mt={"1rem"}
            mb={"1rem"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Image src={viteLogo} w={"50%"} />
            <Button
              variant={"primary"}
              my={"1rem"}
              onClick={onGenerateDecks}
              isLoading={isLoadingCard}
            >
              Generate Decks
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Home;
