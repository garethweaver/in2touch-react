import refreshSelectedUserLeagues from './refresh-leagues'
import refreshSelectedUserTeams from './refresh-teams'

const SET_CONFIG = payload => {
  return {
    type: 'SET_CONFIG',
    payload: payload,
  }
}

const DUMP_CACHES = payload => {
  return {
    type: 'DUMP_CACHES',
    payload: payload,
  }
}

const fbListener = () => {
  return (dispatch, getState, fb) => {
    fb()
      .config()
      .on('value', snapshot => {
        const caches = [
          'leagues',
          'teams',
        ].filter(c => {
          return snapshot.val()[`${c}Hash`] !== getState().config[`${c}Hash`]
        })

        if (caches.length > 0) {
          dispatch(DUMP_CACHES(caches))
        }

        if (caches.includes('leagues')){
          dispatch(refreshSelectedUserLeagues(getState().user.leagues))
        }

        if (snapshot.val().teamDataHash !== getState().config.teamDataHash) {
          dispatch(refreshSelectedUserTeams(getState().user.teams))
        }

        dispatch(SET_CONFIG(snapshot.val()))
      })
  }
}

export default fbListener
