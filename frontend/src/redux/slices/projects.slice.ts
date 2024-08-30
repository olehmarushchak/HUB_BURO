/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";
import { Projects } from "../../types/projects.type.ts";
import { getAllProject } from "../../api/project.ts";

export interface projectsState {
  loaded: boolean;
  projects: Projects[];
  contactsForm: boolean;
}

const initialState: projectsState = {
  loaded: false,
  projects: [],
  contactsForm: false,
};

export const initProjects = createAsyncThunk("projects/FETCH", () =>
  getAllProject()
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, actions) => {
      state.projects = actions.payload;
    },
    setContactsForm: (state, actions) => {
      state.contactsForm = !state.contactsForm;
    },
  },
  extraReducers(builder) {
    builder.addCase(initProjects.pending, (state) => {
      state.loaded = true;
    });
    builder.addCase(initProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.loaded = false;
    });
    builder.addCase(initProjects.rejected, (state) => {
      state.loaded = false;
    });
  },
});

export const { setProjects, setContactsForm } = projectsSlice.actions;

export const selectProjects = (state: RootState) => state.projects;

export default projectsSlice.reducer;
