const ADD_TEAM = payload => {
  return {
    type: 'ADD_TEAM',
    payload: payload,
  }
}

export default payload => {
  return (dispatch, getState, fb) => {
    let ref = fb().db.ref('.info/connected')
    ref.once('value', snapshot => {
      if (snapshot.val()){
        fb()
          .teamData(payload.id)
          .once('value', snapshot => {
            if (snapshot.val()) {
              return dispatch(ADD_TEAM(snapshot.val()))
            } else {
              console.log('no team data')
            }
          })
      } else {
        alert('you need to be connected to add teams')
      }
    })
  }
}
