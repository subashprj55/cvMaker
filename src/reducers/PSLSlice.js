import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  project: [
    {
      projectName: '',
      description: '',
      link: '',
    },
  ],
  skill: [
    {
      skill: '',
      skillRating: 0,
    },
  ],
  language: [
    {
      language: '',
      languageRating: 0,
    },
  ],
  id: null,
}
const PSRSlice = createSlice({
  name: 'project,skill and language',
  initialState,
  reducers: {
    addProject: (state) => {
      state.project.push({
        projectName: '',
        description: '',
        link: '',
      })
    },
    addSkill: (state) => {
      state.skill.push({
        skill: '',
        skillRating: 0,
      })
    },
    addLanguge: (state) => {
      state.language.push({
        language: '',
        languageRating: 0,
      })
    },
    deleteProject: (state, action) => {
      const newProject = state.project.filter(
        (item, index) => index !== action.payload.i
      )
      state.project = newProject
    },
    deleteSkill: (state, action) => {
      const newSkill = state.skill.filter(
        (item, index) => index !== action.payload.i
      )
      state.skill = newSkill
    },
    deleteLanguge: (state, action) => {
      const newLanguge = state.language.filter(
        (item, index) => index !== action.payload.i
      )
      state.language = newLanguge
    },
    editProject: (state, action) => {
      const { index, text, id } = action.payload
      const newObj = state.project[index]
      newObj[id] = text
      const newArr = state.project.map((item, i) => {
        if (i === index) return newObj
        else return item
      })
      state.project = newArr
    },
    editSkill: (state, action) => {
      const { index, text, id } = action.payload
      const newObj = state.skill[index]
      newObj[id] = text
      const newArr = state.skill.map((item, i) => {
        if (i === index) return newObj
        else return item
      })
      state.skill = newArr
    },
    editLanguage: (state, action) => {
      const { index, text, id } = action.payload
      const newObj = state.language[index]
      newObj[id] = text
      const newArr = state.language.map((item, i) => {
        if (i === index) return newObj
        else return item
      })
      state.language = newArr
    },
    getAllData: (state, action) => {
      const data = action.payload
      state.project = data[0].project
      state.language = data[0].language
      state.skill = data[0].skill
      state.id = data[0]._id
    },
  },
})

export const {
  addProject,
  deleteProject,
  editProject,
  addSkill,
  deleteSkill,
  editSkill,
  addLanguge,
  editLanguage,
  deleteLanguge,
  getAllData,
} = PSRSlice.actions
export default PSRSlice.reducer
