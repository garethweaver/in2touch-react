const SET_TEAMS_LIST = payload => {
  return {
    type: 'SET_TEAMS_LIST',
    payload: payload,
  }
}

const SET_LEAGUES_LIST = payload => {
  return {
    type: 'SET_LEAGUES_LIST',
    payload: payload,
  }
}

export default payload => {
  return (dispatch, getState, fb) => {
    fb()[payload]()
      .once('value', snapshot => {
        if (snapshot.val()) {
          const data = []
          snapshot.forEach(x => {
            data.push({
              ...x.val()
            })
          })
          return payload === 'teams'
            ? dispatch(SET_TEAMS_LIST(data))
            : dispatch(SET_LEAGUES_LIST(data))
        }
      })
  }
}
