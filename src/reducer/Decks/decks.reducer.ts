import { createSlice } from "@reduxjs/toolkit";

interface IImages {
  svg: string;
  png: string;
}
interface ICards {
  code: string;
  image: string;
  images: IImages;
  suit: string;
  value: string;
}
interface IDecks {
  cards: ICards[];
  selectedCardIds: ICards[];
}

const initialState: IDecks = {
  cards: [],
  selectedCardIds: [],
};

const deckSlice = createSlice({
  name: "decks",
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    toggleCardSelection(state, action) {
      const cardId = action.payload;
      if (state.selectedCardIds.includes(cardId)) {
        state.selectedCardIds = state.selectedCardIds.filter(
          (id) => id !== cardId
        );
      } else {
        state.selectedCardIds.push(cardId);
      }
    },
  },
});

export const { setCards, toggleCardSelection } = deckSlice.actions;
export default deckSlice.reducer;
