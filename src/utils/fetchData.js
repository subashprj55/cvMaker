import axios from 'axios'

const getData = async (dispatch, reducerName) => {
  dispatch(reducerName(''))
}

const createDatabase = async (id) => {
  createEducationDB(id)
  createExperienceDB(id)
  createPSLDatabase(id)
}

const createEducationDB = async (id) => {
  try {
    await axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/api/education',
      data: {
        courseName: '',
        institutionName: '',
        collageAddress: '',
        startDate: '',
        endDate: '',
        user: id,
      },
    })
  } catch (err) {
    console.log('education db not created', err)
  }
}

const createExperienceDB = async (id) => {
  try {
    await axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/api/experience',
      data: {
        jobTitle: '',
        companyName: '',
        location: '',
        startDate: '',
        endDate: '',
        user: id,
      },
    })
  } catch (err) {
    console.log('experience db not created', err)
  }
}

const createPSLDatabase = async (id) => {
  try {
    await axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/api/psl',
      data: {
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
        user: id,
      },
    })
  } catch (err) {
    console.log('project,skill and language db not created', err)
  }
}

const updateBasicInfo = async (basicInfoData) => {
  await axios({
    method: 'patch',
    url: `http://127.0.0.1:5000/api/basicInfo/${basicInfoData.id}`,
    data: basicInfoData,
  })
}

const updateEducation = (educationData) => {
  educationData.forEach(async (item) => {
    try {
      await axios({
        method: 'patch',
        url: `http://127.0.0.1:5000/api/education/${item._id}`,
        data: item,
      })
    } catch (err) {
      console.log('errr', err)
    }
  })
}

const updateExperience = (experienceData) => {
  experienceData.forEach(async (item) => {
    try {
      await axios({
        method: 'patch',
        url: `http://127.0.0.1:5000/api/experience/${item._id}`,
        data: item,
      })
    } catch (err) {
      console.log('errr', err)
    }
  })
}

const updatePSL = async (PSLDate) => {
  await axios({
    method: 'patch',
    url: `http://127.0.0.1:5000/api/psl/${PSLDate.id}`,
    data: PSLDate,
  })
}

const deleteData = async (id, dbName) => {
  await axios({
    method: 'delete',
    url: `http://127.0.0.1:5000/api/${dbName}/${id}`,
  })
}

const getUserInfo = async (id) => {
  try {
    const response = await axios(`http://127.0.0.1:5000/api/users/${id}`)
    return response.data.user
  } catch (err) {
    console.log('errror', err)
  }
}

const sendPin = async (email) => {
  const response = await axios({
    method: 'post',
    url: `http://127.0.0.1:5000/api/users/forgotPassword`,
    data: {
      email,
    },
  })
  return response.data.status
}
const changePassword = async (email, pin, newPassword) => {
  const response = await axios({
    method: 'post',
    url: `http://127.0.0.1:5000/api/users/changePassword`,
    data: {
      email,
      pin,
      newPassword,
    },
  })
  return response.data
}

export {
  getData,
  createDatabase,
  updateBasicInfo,
  updateEducation,
  updateExperience,
  updatePSL,
  createEducationDB,
  createExperienceDB,
  createPSLDatabase,
  deleteData,
  getUserInfo,
  sendPin,
  changePassword,
}
