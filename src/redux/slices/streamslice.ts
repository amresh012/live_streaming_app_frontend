// store/streamSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StreamData {
  title: string;
  description: string;
  category: string;
  scheduledAt: string;
  isPrivate: boolean;
}

const initialState: StreamData = {
  title: '',
  description: '',
  category: '',
  scheduledAt: '',
  isPrivate: false,
};

const streamSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {
    updateField: <K extends keyof StreamData>(state: { [x: string]: string | boolean; }, action: PayloadAction<{ key: K; value: StreamData[K] }>) => {
      state[action.payload.key] = action.payload.value;
    },
    resetStream: () => initialState,
  },
});

export const { updateField, resetStream } = streamSlice.actions;
export default streamSlice.reducer;
