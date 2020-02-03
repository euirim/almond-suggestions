export const GET_TOP_REPOS = Symbol('GET_TOP_REPOS')

export function getTopRepos ({ lang }) {
  return dispatch => {
    dispatch({
      type: GET_TOP_REPOS
    })

    return {
      type: GET_TOP_REPOS
    }
  }
}
